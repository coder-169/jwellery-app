"use client";
import Input from "@/app/components/Input";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    category: "helloworld",
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    console.log("changed");
    setSelectedFile(event.target.files[0]);
  };
  const router = useRouter();

  const uploadProfile = async (e) => {
    e.preventDefault();
    try {
      const { name, price, category } = productDetails;

      if (price === "" || category === "" || name === " ") {
        console.error("all fields are required");
        return;
      }
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
          }),
        });
        const backendRes = await response.json();
        if (backendRes.success) {
          toast.success(backendRes.msg, { autoClose: 1500 });
        } else {
          toast.error(backendRes.msg, { autoClose: 1500 });
        }
      }
    } catch (error) {
      toast.error(error.message, { autoClose: 1500 });
    }
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
    <form
      onSubmit={uploadProfile}
      encType="multipart/form-data"
      className={`mt-16 w-4/5 mx-auto lg:w-3/5 p-8 rounded-lg shadow-white`}
    >
      <h2 className="text-3xl text-center font-bold mb-4">Add Product</h2>
      <div className="flex items-center flex-col-reverse md:flex-row gap-8">
        <div className=" w-3/4 mx-auto">
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
              type="file"
              id="thumbnail"
              classes={"!text-black"}
              handler={avatarChange}
            />
          </div>
          <div className="mt-8">
            <input
              type="submit"
              className={`outline-none rounded-md uppercase tracking-wider cursor-pointer py-2 font-semibold text-xl px-4 w-1/2 mx-auto block transition-all text-white duration-300 bg-blue-400 hover:bg-blue-500`}
              value={"UPLOAD"}
            />
          </div>
        </div>
        <div className=" w-3/4 mx-auto">
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
  );
};

export default Page;
