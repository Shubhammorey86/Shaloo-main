"use client";
import * as React from "react";
import ProfileContent from "./ProfileContent";
import ProfileImage from "./ProfileImage";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeSlideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const fadeSlideRight = {
  hidden: { opacity: 0, x: 80 },
  show: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
};

const AboutVaibhav: React.FC = () => {
  return (
    <section className="flex relative z-10 pt-screen justify-center items-center px-40 py-28 mx-auto max-w-none bg-white max-md:px-10 max-md:py-16 max-md:max-w-[991px] max-sm:px-5 max-sm:py-10 max-sm:max-w-screen-sm">
      <motion.div
        className="flex gap-28 items-center px-5 py-0 max-w-[1200px] max-md:flex-col-reverse max-md:gap-16 max-sm:gap-10 max-sm:p-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div variants={fadeSlideLeft}>
          <ProfileContent />
        </motion.div>

        <motion.div variants={fadeSlideRight}>
          <ProfileImage
            imageUrl="https://cdn.builder.io/api/v1/image/assets/TEMP/281a46415cfa4b83ec7539f507645a8d60c61d2d"
            altText="Vaibhav Setiya"
          />
        </motion.div>
      </motion.div>

 
    </section>
  );
};

export default AboutVaibhav;
