"use client";

import React from "react";
import ScrollButton from "./ScrollButton";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection: React.FC = () => {
  return (
    <section className="sticky  top-0 left-0 w-full h-screen flex justify-center items-center px-5 py-10 bg-[url('/Background.png')] bg-cover bg-center z-0">
      <motion.div
        className="flex flex-col items-center px-5 py-10 text-center text-white max-w-[1200px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.h2
          className="mb-4 text-base uppercase tracking-[6.4px] max-sm:text-sm max-sm:tracking-[4px]"
          variants={itemVariants}
        >
          INTEGRITY TRUST SOLUTIONS
        </motion.h2>

        <motion.h1
          className="mb-4 text-6xl uppercase leading-[75px] max-md:text-5xl max-md:leading-[60px] max-sm:text-4xl max-sm:leading-10"
          variants={itemVariants}
        >
          LOREM IPSUM HERE &amp; THERE
        </motion.h1>

        <motion.p
          className="mb-4 max-w-screen-md text-xl tracking-wider leading-8 lowercase opacity-60 max-md:text-lg max-md:leading-7 max-md:max-w-[600px] max-sm:max-w-full max-sm:text-base max-sm:leading-6"
          variants={itemVariants}
        >
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </motion.p>

        <motion.div variants={itemVariants}>
          <ScrollButton />
        </motion.div>
      </motion.div>
{/* 
      <div className="absolute font-sans -bottom-[10px] w-full overflow-hidden py-10 hidden md:block">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"], // Moves continuously from 0% to -100%
          }}
          transition={{
            ease: "linear",
            duration: 12, // Adjust speed as needed
            repeat: Infinity,
          }}
        >
         
          {[...Array(10)].map((_, index) => (
            <p
              key={index}
              className="text-[100px] md:text-[130px] font-bold text-transparent text-center px-10"
              style={{
                WebkitTextStroke: "1px #000000",
                letterSpacing: "2px",
              }}
            >
              SCROLL DOWN
            </p>
          ))}
        </motion.div>
      </div> */}
    </section>
  );
};

export default HeroSection;
