import React from 'react';
import { motion } from 'framer-motion';
import final from '../assets/one.png'; // Replace with your image path

export default function AboutSection() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="flex flex-col md:flex-row  w-full bg-white font-urbanist">

      
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 h-[500px] md:h-auto">
        <img
          src={final}
          alt="Vaibhav Setiya"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Right Side: Text Content */}
      <motion.div
        className="w-full md:w-1/2 px-6 md:px-14 py-12 flex flex-col justify-center text-black"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="text-3xl md:text-5xl font-semibold mb-6 leading-tight"
          variants={itemVariants}
        >
          Who is Vaibhav Setiya?
        </motion.h2>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
          variants={itemVariants}
        >
          Vaibhav Setiya is more than just a real estate expert—he's a trusted partner for anyone navigating the fast-paced world of Dubai property. As the founder of Treysta, a name that stands for trust, Vaibhav has built a reputation not just for his expertise, but for his unwavering commitment to putting his clients first.
        </motion.p>

        <motion.p
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-6"
          variants={itemVariants}
        >
          With a background as a civil engineer and over a decade of experience in real estate, Vaibhav has managed a portfolio worth over 100 million dirhams and closed deals exceeding 500 million dirhams. But his journey is not defined by numbers alone—it's driven by a deep passion for helping people make informed, confident decisions.
          <br/>
          For Vaibhav, real estate isn't just about transactions—it's about relationships. He listens, understands, and provides clear, honest advice that empowers his clients. Whether it's helping a family find their dream home or guiding an investor toward smart opportunities, Vaibhav's approach is grounded in transparency, integrity, and a genuine desire to help others succeed.
        </motion.p>

       
      </motion.div>
    </section>
  );
}
