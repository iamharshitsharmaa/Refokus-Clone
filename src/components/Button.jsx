import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Button = ({ tittle = "Get Started" }) => {
  return (
    <motion.div
      className="w-36 bg-zinc-100 rounded-full px-4 py-1 text-zinc-900 flex items-center gap-3 hover:cursor-pointer"
      whileHover={{
        scale: 1.05,
        backgroundColor: "#e0e0e0",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <span className="text-sm font-normal">{tittle}</span>
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <BsArrowReturnRight className="text-sm mt-1" />
      </motion.div>
    </motion.div>
  );
};

export default Button;
