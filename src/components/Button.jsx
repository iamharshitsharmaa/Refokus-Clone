import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Button = ({ tittle = "Get Started", onClick }) => {
  return (
    <motion.div
      className="w-auto max-w-full bg-zinc-100 rounded-full px-6 py-2 text-zinc-900 flex items-center gap-3 justify-center hover:cursor-pointer transition-all duration-200"
      whileHover={{
        scale: 1.05,
        backgroundColor: "#e0e0e0",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={onClick} // Makes the button interactive
      role="button" // Adds accessibility
      tabIndex={0} // Allows keyboard navigation
    >
      <span className="text-sm font-medium truncate">{tittle}</span>
      <motion.div
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <BsArrowReturnRight className="text-base mt-0.5" />
      </motion.div>
    </motion.div>
  );
};

export default Button;
