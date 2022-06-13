/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "../../data";

const Product = ({ product }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row  px-[50px] md:py-[120px]  ">
      <div className=" flex flex-col items-center justify-center md:flex-row md:flex-wrap flex-[2-2-0%] before:content-['Projects'] before:w-full before:text-3xl before:text-center before:mb-5 md:before:hidden">
        {product.images.map((img) => (
          <div
            className="md:imgContainer relative m-[5px] md:overflow-hidden w-[300px] h-[300px]  md:w-[30%] md:h-[250px] "
            key={img.id}
          >
            <img
              alt=""
              src={img.url}
              className="w-full h-full md:object-cover object-fill "
            />
          </div>
        ))}
      </div>
      <div className=" flex-1 mt-[85px]">
        <div className="flex flex-col items-center justify-center md:items-start">
          <h2 className="font-bold mb-5 text-3xl md:text-5xl">
            {product.title}
          </h2>
          <p className="mb-8 text-center md:text-left ">{product.longDesc}</p>
          <button
            className="bg-green-700 mb-5 p-[10px] rounded-lg text-white text-xl cursor-pointer"
            type="button"
          >
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const products = data;
  const paths = products.map((product) => {
    return {
      params: { name: product.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  //   console.log("🚀 context", context);
  const name = context.params.name;
  const product = data.filter((item) => item.name === name)[0];
  //   console.log("product:", product);
  return {
    props: {
      product,
    },
  };
}
export default Product;
