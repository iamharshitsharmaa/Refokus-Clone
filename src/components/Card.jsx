import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para, hover, header, title }) => {
  return (
    <>
      <div className={`${width} bg-zinc-700 p-3 rounded-xl text-white ${hover ? "hover:bg-violet-500" : "" }`}>
        <div className="w-full flex justify-between items-center mb-6">
          <h3>{header}</h3>
          <IoIosArrowRoundForward />
        </div>
        <div className="w-full">
          <h1 className="text-4xl">{title}</h1>
        </div>
        <div className="down w-full mt-48">
          {start && (
            <>
              <h1 className="text-6xl font-semibold tracking-tight leading-none">
                Start a Project
              </h1>
              <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
                Contact Us
              </button>
            </>
          )}
          {para && (
            <p className="text-sm text-zinc-400 font-regular pt-16">
              Explore what drives our team.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
