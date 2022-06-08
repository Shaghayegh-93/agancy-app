import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = ({ services }) => {
  return (
    <div className=" px-[100px]">
      <h2 className=" text-2xl font-bold border-b-2  border-green-700 w-52 mb-3  ">
        What We Can Do?
      </h2>
      <h3 className="text-5xl font-semibold text-green-700">
        Services we can help you with
      </h3>
      <div className="flex items-center justify-between">
        {services.map((service) => (
          <Link
            className=" flex items-center justify-between"
            passHref
            key={service.id}
            href="/"
          >
            <div className=" bg-slate-300 p-9">
              <span>{service.title}</span>
              <div className=" ">
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    loop
                    className="w-36 h-36 rounded-full"
                  />
                ) : (
                  <Image
                    alt="serviceImage"
                    src={`/img/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
                    className="w-40 h-36 rounded-full"
                  />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
// href={`/products/${service.name}`}

export default Services;
