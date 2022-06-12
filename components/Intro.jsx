import Image from "next/image";
import React from "react";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className="w-full h-[calc(100vh-50px)] flex overflow-hidden relative flex-col md:flex-row ">
      {/* leftSide */}
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className="flex-1 -mb-9 md:mb-0 md:p-[100px] p-[50px] md:pr-0 flex flex-col md:justify-around md:items-start items-center justify-center text-center md:text-left  ">
        <h1 className="text-[30px] mb-5 md:mb-0 md:text-[50px] tracking-wide font-semibold">
          <span className="text-green-700 mr-2 ">AV0CAD0</span>
          DIGITAL PRODUCT AGANCY
        </h1>
        <p className="font-normal hidden md:block">
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className="p-[10px] bg-green-700 rounded-md">Discover</button>
      </div>
      {/* rightSide */}
      <div className="flex-1 relative p-[50px]  md:p-[100px] items-center justify-center text-center md:pr-0 ">
        <Image
          src="/img/Avocado.png"
          width="100%"
          heigh="100%"
          layout="fill"
          objectFit="cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;
