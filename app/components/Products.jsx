import React, { useEffect, useState } from "react";
import Image from "next/image";
import first from "../../public/assets/pinkBlossom.jpg";
import second from "../../public/assets/PinkRound.jpg";
import third from "../../public/assets/Bracelet.jpg";
import fourth from "../../public/assets/secondImage.jpeg";
import peakLogo from "../../public/assets/Peak.png";
import Link from "next/link";
import ProductCard from "./ProductCard";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "./Loader";

const Page2 = () => {
  // const products = [
  //   {
  //     name: "Blossom of Serenity Pink Diamond Ring",
  //     category: "Natural Pink Diamond Ring",
  //     price: "68,000",
  //     img: first,
  //   },
  //   {
  //     name: "Harmony Blossom Elegance Ring",
  //     category: "Lab-Grown Pink Diamond Ring",
  //     price: "9,900",
  //     img: second,
  //   },
  //   {
  //     name: "Celestial Cascade Diamond Bracelet",
  //     category: "18k White Gold Diamond Bracelet",
  //     price: "9,360",
  //     img: third,
  //   },
  // ];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api_home/products");
      if (!data.success) toast.error(data.message);
      else setProducts(data.prods);
    } catch (error) {
      toast.error(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="w-full">
      <h2 className="px-8 mt-16 lg:w-full sm:text-4xl text-center tracking-tight py-5 lg:text-5xl text-3xl">
        Our Brand
      </h2>
      <div className="w-full py-5">
        <Image
          alt=""
          src={peakLogo}
          className="mx-auto w-36 sm:w-44 md:w-44 lg:w-44"
        />
      </div>
      <div className="w-full px-[5vw]">
        <section className="body-font lg:mt-5 mt-8">
          <div className="container px-[5vw] mx-auto">
            {loading ? (
              <Loader />
            ) : (
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                {products.map((product) => (
                  <ProductCard
                    key={product._id}
                    img={product.thumbnail}
                    price={product.price}
                    name={product.name}
                    category={product.category}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
        <div className="w-full px-[5vw]">
          <div className="w-full flex justify-center mt-10">
            <Link
              href="https://thepeak.io/jewellery"
              className="border px-4 py-2 font-medium uppercase rounded-md border-gray-400"
            >
              Browse Products
            </Link>
          </div>
          <section className="mt-16 body-font">
            <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
              <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl tracking-wider text-3xl mb-4 font-medium">
                  Your diamond. Your design.
                </h1>

                <p className="mb-8 leading-5 text-sm w-3/4 ">
                  Whether it&apos;s your favourite NFT, or a picture of your
                  loved ones, Diamond Laboratories offers the best crafting
                  services available
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:hello@diamondlabs.io"
                    target="_blank"
                    className="inline-flex border-2  border-gray-300 py-3 px-5 rounded"
                  >
                    SEND INQUIRY
                  </a>
                </div>
              </div>
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Image
                  width={600}
                  height={100}
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={fourth}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page2;
