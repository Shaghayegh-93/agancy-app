import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around text-lg p-[50px] items-center h-auto md:h-[250px] md:p-[100px] flex-col sm:flex-row border-t-[3px] border-black">
      <div className="flex-[2_2_0%]">
        <h2 className="text-green-700 bg-green-100 font-normal p-[5px] text-xl flex items-center justify-center tracking-wide w-max">
          AV0CAD0 CREATIVES.
        </h2>
        <div>
          {/* <a className="flex mt-5 cursor-pointer">
            <p className="underline decoration-2 font-bold text-2xl mr-2">
              WORK WITH US
            </p>
            <Image
              alt=""
              src="/img/link.png"
              width="30px"
              height="30px"
              objectFit="contain"
            />
          </a> */}
        </div>
      </div>
      <div className="flex-1 text-sm mt-8 sm:mt-0">
        <p className="mb-5">
          12 ADAM STREET NY <br />
          USA
        </p>
        <p>
          CONTACT@SHEERY.DEV <br />
          213 1243 12312
        </p>
      </div>
      <div className="flex-1 text-sm mb-5 sm:mb-0">
        <p className="mb-5">
          FOLLOW US: <br />
          _FB_IN_BE_TW
        </p>
        <p>
          2022 LAMA INTERACTIVE <br />
          ALLRIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
