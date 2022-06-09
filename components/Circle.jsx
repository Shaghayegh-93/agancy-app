import React from "react";

const Circle = (props) => {
  return (
    <div
      className="h-[100vh] w-[100vh] rounded-full absolute z-50 opacity-10 mx-auto"
      style={{ ...props }}
    ></div>
  );
};

export default Circle;
