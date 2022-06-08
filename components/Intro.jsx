import Image from "next/image";
import React from "react";
import Circle from "./Circle";

const Intro = () => {
  return (
    <div className="w-full h-[calc(100vh-50px)] flex overflow-hidden relative ">
      {/* leftSide */}
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className="flex-1  p-[100px] pr-0 flex flex-col justify-around items-start">
        <h1 className="text-[50px] tracking-wide font-semibold">
          <span className="text-green-700 mr-2 ">AV0CAD0</span>
          DIGITAL PRODUCT AGANCY
        </h1>
        <p className="font-normal">
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className="p-[10px] bg-green-700 rounded-md">Discover</button>
      </div>
      {/* rightSide */}
      <div className="flex-1 relative p-[100px] pr-0 ">
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
