import React from "react";
import Button from "./Button";

const Product = ({elem}) => {
  return (
    <div className="w-full h-full text-white bg-[#1C1C1C] py-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between py-10">
        <div>
          <h1 className="text-5xl font-medium">{elem.tittle}</h1>
        </div>
        <div className="w-1/3 ">
          <p className="mb-7 font-semibold">
            {elem.description}
          </p>
          <div className="flex gap-3 items-center">
          {elem.live && <Button />}
          {elem.case && <Button />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
