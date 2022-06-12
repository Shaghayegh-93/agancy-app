/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { data } from "../../data";

const Product = ({ product }) => {
  return (
    <div className="grid grid-cols-3  px-[50px] py-[120px] ">
      <div className="grid gap-2 grid-cols-3 col-span-2 mr-8 ">
        {product.images.map((img) => (
          <div className="imgContainer " key={img.id}>
            <Image
              alt=""
              src={img.url}
              width="230%"
              height="200%"
              objectFit="responsive"
              //   layout="fill"
            />
          </div>
        ))}
      </div>
      <div>
        <div className="mt-16">
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
