import React from "react";
import Navbar from "../components/Navbar";

const about = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div className="h-screen w-{100%}">
        <h1 className="text-orange-400 font-extrabold text-center">
          THIS IS ABOUT PAGE
        </h1>
      </div>
    </div>
  );
};

export default about;
