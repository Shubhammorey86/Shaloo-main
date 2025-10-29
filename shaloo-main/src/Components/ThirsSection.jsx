import React from 'react';
import { motion } from 'framer-motion';
import data from "../assets/Data.png";

const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.3 } }
};

const ThirdSection = () => {
    return (
        <div id="values" className="flex font-urbanist relative md:gap-[50px] flex-col md:flex-row items-center min-h-screen md:p-0 p-8 md:pr-5">
            {/* Image Section */}
            <motion.div 
                className="w-full md:w-1/2"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <img
                    src={data}
                    alt="Vaibhav Setiya"
                    className="w-full h-auto object-cover"
                />
            </motion.div>

            {/* Text Section */}
            <motion.div 
                className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-0"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="md:text-5xl text-3xl leading-[50px] md:text-start text-center font-medium text-black mb-4">
                    The Values That Define Vaibhav Setiya's Journey
                </h2>
                <p className="text-gray-700 leading-custom text-center md:text-start">
                    Success is often measured by achievements, milestones, and accolades — but for Vaibhav Setiya, true success is defined by something far deeper: his unwavering commitment to family, humility, and a purposeful life.
                    <br /><br />
                    Beyond his impressive professional accomplishments, Vaibhav is a man deeply anchored in values that shape both his personal and professional journey. At the heart of these values is fatherhood — a role that has profoundly influenced his outlook on life. Being a father has taught him invaluable lessons in patience, empathy, and resilience. Every day, his experiences as a parent reinforce the importance of leading with compassion, understanding, and unwavering integrity.
                    <br /><br />
                    For Vaibhav, fatherhood is more than just a role — it's a guiding force that shapes his interactions, decisions, and ambitions. Whether he's supporting his loved ones or driving meaningful change in his professional sphere, he approaches each challenge with a mindset rooted in responsibility and care. This deep sense of purpose inspires him to build authentic connections, foster positive change, and leave a lasting impact on those around him.
                    <br /><br />
                    Through his journey, Vaibhav continues to exemplify that true success isn’t just about reaching goals — it’s about uplifting others, staying grounded, and embracing the values that matter most.
                </p>
            </motion.div>
        </div>
    );
};

export default ThirdSection;
