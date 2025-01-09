import React from "react";
import Button from "./Button";

const Product = ({elem,mover,count}) => {
  return (
    <div className="w-full text-white bg-[#1C1C1C]  ">
      <div className="max-w-screen-xl h-[20rem] mx-auto flex items-center justify-between py-20 " onMouseEnter={()=>{mover(count)}}>
        <div>
          <h1 className="text-5xl font-medium">{elem.title}</h1>
        </div>
        <div className="w-1/3 ">
          <p className="mb-7 font-semibold">
            {elem.description}
          </p>
          <div className="flex gap-3 items-center">
          {elem.live && <Button />}
          {elem.case && <Button tittle = "Case Study" />} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
