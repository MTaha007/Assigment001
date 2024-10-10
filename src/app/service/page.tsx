import React from "react";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <div className="bg-black">
      <Navbar/>
      <div className="h-screen w-{100%}">
        <h1 className="text-orange-400 font-extrabold text-center">
          THIS IS SERVICE PAGE
        </h1>
      </div>
    </div>
  );
};

export default page;
