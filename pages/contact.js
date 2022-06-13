import Circle from "../components/Circle";
import React from "react";

const contact = () => {
  return (
    <div className="flex items-center justify-center flex-col overflow-hidden relative py-[50px]">
      <Circle backgroundColor="#b0ff49" left="-40vh" top="-20vh" />
      <Circle backgroundColor="#01c686" right="-30vh" bottom="-60vh" />
      <h1 className="text-4xl font-semibold">GET IN tOUCH</h1>
      <form className="w-full md:h-[500px] md:w-[500px] p-[50px] flex flex-wrap ">
        <input
          type={"text"}
          placeholder="Name"
          className="flex-1  my-2 h-[50px] pl-[10px] border md:mr-[5px] rounded-[10px]"
        ></input>
        <input
          type={"tel"}
          placeholder="Phone"
          className="flex-1  my-2 h-[50px] pl-[10px] border rounded-[10px]"
        ></input>
        <input
          type={"email"}
          placeholder="Email"
          className="border w-full h-[50px] pl-[10px] rounded-[10px]  my-2"
        ></input>
        <input
          type={"text"}
          placeholder="Subject"
          className="border  w-full h-[50px] pl-[10px] rounded-[10px]  my-2"
        ></input>
        <textarea
          type={"text"}
          placeholder="Message"
          rows={6}
          className="border w-full pl-[10px] rounded-[10px]  my-2"
        ></textarea>
        <button
          type={"submit"}
          className=" w-full mt-5 bg-green-900 text-white py-[5px] px-[10px] text-base cursor-pointer rounded-[10px]"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default contact;
