import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-xl h-20 mx-auto flex items-center justify-between border-b-[1px] border-zinc-700  ">
       <div className="flex items-center">
       <img
          src="https://i.pinimg.com/736x/14/b9/0b/14b90bb343e8fe8b928dece37985a832.jpg"
          alt=""
          className="h-16 w-28"
        />
        <div className="ml-20 flex items-center gap-10">
          {["Home", "Work", "Contact","","News"].map((elem, index) => {
            return elem.length === 0 ? (
              <span className="h-8 w-[1px] bg-zinc-700"></span>
            ) : (
              <a
                href="#"
                className="text-white flex items-center text-white text-sm gap-1 hover:cursor-pointer"
              >
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block h-1 w-1 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            );
          })}
        </div>
       </div>
       <Button/>
      </div>
    </>
  );
};

export default Navbar;
