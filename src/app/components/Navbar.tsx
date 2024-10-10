import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-black h-12">
      <div className="text-orange-400 font-extrabold flex justify-between items-center">
        
          <h1 className=" text-xl m-2 cursor-pointer">NAVBAR</h1>
          <ul className="flex gap-3 mr-3 ">
            <Link className="hover:text-orange-500 " href="/#">HOME</Link>
            <Link className="hover:text-orange-500 "  href="./about">ABOUT</Link>
            <Link className="hover:text-orange-500 "href="./contact">CONTACT</Link>
            <Link className="hover:text-orange-500 "href="./service">SERVICE</Link>
          </ul>

      </div>
    </div>
  );
};

export default Navbar;
