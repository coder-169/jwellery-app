"use client";
import Input from "@/app/components/Input";
import Loader from "@/app/components/Loader";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    category: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log("changed");
    setSelectedFile(event.target.files[0]);
  };
  const router = useRouter();

  const uploadProduct = async (e) => {
    e.preventDefault();
    try {
      const { name, price, category, password } = productDetails;

      if (price === "" || category === "" || name === "") {
        console.error("all fields are required");
        return;
      }
      setLoading(true);
      const data = new FormData();
      data.append("file", selectedFile);
      data.append("upload_preset", "diamond_labs");
      data.append("cloud_name", process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      console.log(res);
      const { secure_url, public_id } = res;
      if (public_id && secure_url) {
        console.log("here");
        const response = await fetch("/api/uploader", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            thumbnail: secure_url,
            name,
            price,
            category,
            password,
          }),
        });
        const backendRes = await response.json();
        if (backendRes.success) {
          toast.success(backendRes.message, { autoClose: 1500 });
          setProductDetails({
            name: "",
            price: "",
            category: "",
            password: "",
          });
          setAvatarPreview(null);
        } else {
          toast.error(backendRes.message, { autoClose: 1500 });
        }
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 1500 });
    }
    setLoading(false);
  };
  const [avatarPreview, setAvatarPreview] = useState(null);
  const avatarChange = async (e) => {
    if (e.target.name === "thumbnail") {
      const file = e.target.files[0];
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const onChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  return (
    <section className="flex relative items-center justify-center h-auto md:h-[100vh] w-full bg-gray-900 text-white">
      <Link href={'/'} className="text-white font-medium absolute top-4 left-4">Home</Link>
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={uploadProduct}
          encType="multipart/form-data"
          className={` w-4/5  mx-auto lg:w-3/5 p-8 rounded-lg shadow-white`}
        >
          <h2 className="text-3xl text-center font-bold mb-4">Add Product</h2>
          <div className="flex items-center flex-col-reverse md:flex-row gap-8">
            <div className="w-full md:w-3/4 mx-auto">
              <div className="mt-4">
                <Input
                  type="text"
                  hint="Product Name"
                  id="name"
                  handler={onChange}
                  value={productDetails.name}
                />
              </div>
              <div className="mt-4">
                <Input
                  type="text"
                  hint="Price"
                  id="price"
                  handler={onChange}
                  value={productDetails.price}
                />
              </div>
              <div className="mt-4">
                <Input
                  type="text"
                  hint="Category"
                  id="category"
                  value={productDetails.category}
                  handler={onChange}
                />
              </div>
              <div className="mt-4">
                <Input
                  type="password"
                  hint="Password"
                  id="password"
                  value={productDetails.password}
                  handler={onChange}
                />
              </div>
              <div className="mt-4">
                <Input
                  type="file"
                  id="thumbnail"
                  classes={"!text-black"}
                  handler={avatarChange}
                />
              </div>
              <div className="mt-8">
                <input
                  type="submit"
                  className={`outline-none rounded-md uppercase cursor-pointer py-2 font-semibold text-xl px-4 w-1/2 mx-auto block transition-all text-white duration-300 bg-blue-400 hover:bg-blue-500`}
                  value={"UPLOAD"}
                />
              </div>
            </div>
            <div className="w-full md:w-3/4 mx-auto">
              {avatarPreview ? (
                <Image width={400} height={400} src={avatarPreview} alt="" />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  width={350}
                  height={350}
                  src={"https://dummyimage.com/350x350"}
                  alt=""
                />
              )}
            </div>
          </div>
        </form>
      )}
    </section>
  );
};

export default Page;
