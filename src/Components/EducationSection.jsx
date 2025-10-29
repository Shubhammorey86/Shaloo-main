import React from 'react';
import { motion } from 'framer-motion';
import remove from "../assets/final.png";

const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
};

const EarlyLifeSection = () => {
    return (
        <div id="education" className="flex flex-col-reverse md:flex-row bg-[#111111] text-white md:h-screen">
            {/* Left side - Text content */}
            <motion.div
                className="w-full md:w-3/5 flex flex-col justify-center p-8 md:p-16"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-3xl md:text-5xl md:text-start text-center leading-[50px] font-medium mb-8 font-urbanist">
                    Early Life and Education
                </h2>

                <div className="space-y-6 font-urbanist text-center md:text-start">
                    <p className="leading-custom">
                        With a solid background in engineering, he approaches his work with precision, logic, and a problem-solving mindset. His ability to analyze situations from a technical perspective ensures that every solution he offers is well-structured, efficient, and effective. Yet, while his analytical skills are undeniably impressive, it’s his deep sense of dedication to his clients that truly sets him apart. He understands that beyond numbers, data, and strategies, successful relationships are built on trust, empathy, and genuine connection.
                    </p>
                    <p className="leading-custom">
                        Through Treysta, he channels this belief into every interaction, striving to create meaningful relationships that extend far beyond a single transaction. His goal isn’t just to meet client expectations — it’s to exceed them, fostering bonds that are built on reliability, integrity, and personalized care. Whether he's guiding clients through complex decisions, offering tailored advice, or simply being a dependable presence, he remains committed to putting people first. His work is driven by a passion not only to deliver results but also to inspire confidence and build partnerships that stand the test of time.
                    </p>
                </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
                className="w-full md:w-2/5 px-10 py-10 md:px-0 md:py-0 flex  h-full relative"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <img
                    src="/image.avif"
                    alt="Vaibhav Setiya"
                    className="w-auto h-full object-cover object-center"
                />
            </motion.div>
        </div>
    );
};

export default EarlyLifeSection;
