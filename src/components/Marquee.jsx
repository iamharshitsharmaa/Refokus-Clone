import React from "react";

const Marquee = ({ imagesUrl }) => {
  return (
    <>
      <div className="bg-[#1C1C1C] w-full h-full flex justify-between py-5 ">
        {imagesUrl.map((url) => (
          <img src={url} className="" />
        ))}
        {imagesUrl.map((url) => (
          <img src={url} className="" />
        ))}
      </div>
    </>
  );
};

export default Marquee;
