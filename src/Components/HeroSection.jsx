import React from 'react';
import { motion } from "framer-motion";


export default function HeroSection() {

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

  return (
    <section id="hero" className="w-full h-screen flex justify-center items-center px-5 py-10 bg-[url('/bg.jpg')] bg-cover bg-center z-0">
     <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

     <motion.div
  className="relative z-20 flex flex-col items-center px-5 py-10 text-center text-white max-w-[1200px]"
  variants={containerVariants}
  initial="hidden"
  animate="show"
>
        <motion.h2
          className="mb-4 text-base uppercase tracking-[6.4px] max-sm:text-sm max-sm:tracking-[4px]"
          variants={itemVariants}
        >
          VAIBHAV SETIYA 

        </motion.h2>

        <motion.h1
          className="mb-4 text-6xl uppercase leading-[75px] max-md:text-5xl max-md:leading-[60px] max-sm:text-4xl max-sm:leading-10"
          variants={itemVariants}
        >
         Built on Trust. Driven by Purpose. Rooted in Values
        </motion.h1>

        <motion.p
          className="mb-4 max-w-screen-md text-xl tracking-wider leading-8 lowercase opacity-60 max-md:text-lg max-md:leading-7 max-md:max-w-[600px] max-sm:max-w-full max-sm:text-base max-sm:leading-6"
          variants={itemVariants}
        >
          More than a real estate advisor — a father, a guide, and a partner in your journey. Vaibhav brings clarity, care, and compassion to every decision you make.
        </motion.p>

      
      </motion.div>

      {/* Uncomment and use the following section if needed */}
      {/*
      <div className="absolute font-sans -bottom-[10px] w-full overflow-hidden py-10 hidden md:block">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            duration: 12,
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
      </div>
      */}
    </section>
  );
}
