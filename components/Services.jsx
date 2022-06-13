import React from "react";
import Link from "next/link";
import Image from "next/image";

const Services = ({ services }) => {
  return (
    <div className="p-5 md:px-[100px]">
      <h2 className=" text-3xl font-bold border-b-4  border-green-700 w-max mb-3  ">
        What We Can Do?
      </h2>
      <h3 className="sm:text-5xl text-3xl font-semibold text-green-700 mb-7">
        Services we can help you with
      </h3>
      <div className=" flex flex-wrap justify-center sm:justify-around lg:justify-evenly">
        {services.map((service) => (
          <Link className=" " passHref key={service.id} href="/">
            <div className=" w-[250px] h-[250px] md:w-[350px] md:h-[350px]  lg:w-[500px] lg:h-[500px] bg-slate-100 flex items-center justify-center p-[8px] md:p-[10px]  mb-[50px] relative cursor-pointer group ">
              <div className="hidden sm:group-hover:flex items-center justify-center bg-slate-200 absolute z-30 w-[70%]  text-center p-5 opacity-50 rounded-lg ">
                {service.desc}
              </div>
              <span className="absolute top-[5px] left-[5px] md:top-[10px] md:left-[10px] font-light md:tracking-[5px] text-slate-500">
                {service.title}
              </span>
              <div className="w-[90%] h-[90%] md:w-[85%] md:h-[85%] overflow-hidden rounded-full group-hover:scale-110 transition-all duration-1000 ease-in-out">
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    loop
                    muted
                    width="100%"
                    height="100%"
                    objectFit="cover"
                  />
                ) : (
                  <Image
                    alt="serviceImage"
                    src={`/img/${service.photo}`}
                    width="100%"
                    height="100%"
                    layout="responsive"
                    objectFit="cover"
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
