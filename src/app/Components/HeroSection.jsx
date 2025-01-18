"use client"
import React from 'react'
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="lg-py-16">
      <div className="grid grid-col-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
              Hello,I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Saksham",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Programmer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base mb-6 sm:text-lg lg:text-xl">
            Full-Stack MERN Developer | Tech Enthusiast | Passionate about Web Development &
            Innovative Solutions
          </p>
          <div>
            <button className="px-6  py-3 w-full sm:w-fit rounded-full mr-3 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire me
            </button>
            <button className="p-[2.5px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 w-full sm:w-fit mr-3 rounded-full bg-transparent hover:bg-slate-800 text-white mt-3 ">
              <span className="bg-[#181818] block hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 mt-4 lg:mt-0 "
        >
          <div className="rounded-full bg-[#181818] relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/01.png"
              className="absolute transform -translate-x-2/3 -translate-y-1/2 top-1/2 left-2/3"
              alt="Hero image"
              width={280}
              height={280}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection