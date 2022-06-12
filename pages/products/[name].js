/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "../../data";

const Product = ({ product }) => {
  return (
    <div className="flex  px-[50px] py-[120px] ">
      <div className=" flex flex-wrap flex-[2-2-0%] ">
        {product.images.map((img) => (
          <div
            className="imgContainer w-[30%] h-[30%] m-[10px] relative overflow-hidden  "
            key={img.id}
          >
            <img alt="" src={img.url} className="w-full h-full" />
          </div>
        ))}
      </div>
      <div>
        <div className=" flex-1">
          <h2 className="font-bold mb-5 text-5xl">{product.title}</h2>
          <p className="mb-8">{product.longDesc}</p>
          <button
            className="bg-green-700 p-[10px] rounded-lg text-white text-xl cursor-pointer"
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
