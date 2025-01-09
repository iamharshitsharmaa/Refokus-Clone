import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-[#1C1C1C]">
      <div className="max-w-screen-xl mx-auto py-10 px-5 grid gap-10 lg:grid-cols-2">
        {/* Left Section */}
        <div>
          <h1 className="text-6xl lg:text-[11.5rem] text-white font-semibold leading-tight tracking-tight">
            refokus.
          </h1>
        </div>

        {/* Right Section */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Socials */}
          <div>
            <h4 className="mb-5 text-zinc-500 font-medium">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-600 hover:text-white transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Sitemaps */}
          <div>
            <h4 className="mb-5 text-zinc-500 font-medium">Sitemaps</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-300 hover:text-white transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Agency Info */}
          <div className="flex flex-col">
            <p className="text-zinc-400 text-sm lg:text-right">
              Refokus is a pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <div className="mt-8 flex justify-end">
              <img
                src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                alt="Refokus Logo"
                className="w-24 bg-blue-600 p-2 rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
