import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
const Button = () => {
  return (
    <div className=" w-36 bg-zinc-100 rounded-full px-4 py-1 text-zinc-900 flex items-center gap-3 hover:cursor-pointer">
      <span className="text-sm font-normal">Get Started</span>
      <BsArrowReturnRight className="text-sm mt-1" />
    </div>
  );
};

export default Button;
