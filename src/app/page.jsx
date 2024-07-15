"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-22">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/me.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-10 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-2xl md:text-4xl font-bold">
          Crafting Code, Building Dreams.
          </h1>
          {/* DESC */}
          <p className="lg:text-xl ">
              Welcome to my portfolio! As a dedicated architect of user experiences, I specialize in crafting elegant code that transforms ideas into reality. With a keen eye for aesthetics and a deep mastery of coding, my portfolio features a diverse range of projects that highlight my unwavering commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-5 justify-center">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            <Link
            href="/portfolio"
            className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
          >
              View My Work
              </Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
            <Link
            href="/contact"
            className="p-4 rounded-lg "
          >
              Contact Me
              </Link>
              
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
