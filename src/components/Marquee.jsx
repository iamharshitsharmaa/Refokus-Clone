import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ imagesUrl, direction }) => {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="bg-[#1C1C1C] w-full h-full flex gap-20 py-7 overflow-hidden whitespace-nowrap flex-shrink-0 "
      >
        {imagesUrl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
        {imagesUrl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="bg-[#1C1C1C] w-full h-full flex gap-20 py-7 overflow-hidden whitespace-nowrap flex-shrink-0 "
      >
        {imagesUrl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
        {imagesUrl.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
