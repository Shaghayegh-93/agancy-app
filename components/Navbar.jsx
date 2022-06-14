import router from "next/router";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = ({ open, menuHandler }) => {
  return (
    <nav className=" ">
      <div className="bg-black text-white flex items-center  justify-between h-[50px] px-5  md:px-[100px] relative">
        {/* leftSide */}
        <div className="text-lg">AV0CAD0</div>
        {/* righySide */}
        <ul className="hidden md:flex hover:text-green-800">
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer hover:text-green-800">
            <Link href="/products/design">
              <a>DESIGN</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer hover:text-green-800">
            <Link href="/products/development">
              <a>DEVELOPMENT</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer hover:text-green-800">
            <Link href="/products/production">
              <a>PRODUCTION</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer hover:text-green-800">
            <Link href="/products/photography">
              <a>PHOTOGRAPHY</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer hover:text-green-800">
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
        <div className="w-[25px] h-5 cursor-pointer flex flex-col justify-between md:hidden relative">
          <div className="bg-white w-full h-[3px] " />

          <div className="bg-white w-full h-[3px] " />
          <div className="bg-white w-full h-[3px] " />
        </div>
        <input
          type="checkbox"
          name="menu"
          id="menu"
          className="absolute w-[40px] h-5 right-0 peer opacity-0"
        />
        <ul
          className=" fixed h-[calc(100vh-50px)] w-[50vw] bg-black top-[50px] font-bold text-gray-300 flex flex-col items-center justify-around z-10 transition-all duration-1000 peer-checked:right-[-50vw] md:hidden right-0
           "
          style={{ right: !open ? "-50vw" : "0" }}
        >
          <li className=" text-sm text-gray-200 cursor-pointer w-full text-center">
            <Link href="/products/design">
              <a onClick={menuHandler}>DESIGN</a>
            </Link>
            {/* DESIGN */}
          </li>
          <li className=" text-sm text-gray-200 cursor-pointer">
            <Link href="/products/development">
              <a onClick={menuHandler}>DEVELOPMENT</a>
            </Link>
          </li>
          <li className=" text-sm text-gray-200 cursor-pointer">
            <Link href="/products/production">
              <a onClick={menuHandler}>PRODUCTION</a>
            </Link>
          </li>
          <li className=" text-sm text-gray-200 cursor-pointer">
            <Link href="/products/photography">
              <a onClick={menuHandler}>PHOTOGRAPHY</a>
            </Link>
          </li>
          <li className=" text-sm text-gray-200 cursor-pointer">
            <Link href="/contact">
              <a onClick={menuHandler}>CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
