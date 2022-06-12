import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" ">
      <div className="bg-black text-white flex items-center  justify-between h-[50px]  px-[100px]">
        {/* leftSide */}
        <div className="text-lg">AV0CAD0</div>
        {/* righySide */}
        <ul className="flex">
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer">
            <Link href="/products/design">
              <a>DESIGN</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer">
            <Link href="/products/development">
              <a>DEVELOPMENT</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer">
            <Link href="/products/production">
              <a>PRODUCTION</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer">
            <Link href="/products/photography">
              <a>PHOTOGRAPHY</a>
            </Link>
          </li>
          <li className="mr-[30px] text-sm text-gray-200 cursor-pointer">
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
