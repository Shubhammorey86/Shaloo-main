import React from 'react';
import pic from "../assets/pic.png"

const LegacySection = () => {
  return (
    <div id="legacy" className="flex flex-col md:flex-row bg-[#111111] text-white md:h-screen">
      {/* Left side - Text content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center p-8 md:p-16">
        <h2 className="text-3xl md:text-5xl md:text-start text-center leading-[50px] font-medium mb-8 font-urbanist">
          A Legacy of Humility and Impact
        </h2>
        
        <div className="space-y-6 font-urbanist text-center md:text-start">
          <p className="leading-custom">
            Humility is at the core of his character. Despite his significant 
            accomplishments in the real estate industry, Vaibhav remains grounded 
            and focused on what truly matters—people. Whether it's his clients, his 
            family, or his community, he always strives to act with integrity and 
            compassion, ensuring that trust is at the heart of every relationship he 
            builds.
          </p>
          
          <p className="leading-custom">
            For Vaibhav, true success isn't measured by numbers or milestones, but 
            by the impact he has on the lives of others. He takes pride in being a 
            mentor and guide to his team members, helping clients make 
            decisions that will shape their futures, just as he strives to guide his own 
            child with love and wisdom. His legacy is not just in his professional 
            accomplishments, but in the trust he earns and the lives he 
            touches along the way.
          </p>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-full md:w-2/5 hidden md:flex pl-[10px] h-full relative">
        <img
          src="/photo3.JPG"
          alt="Vaibhav Setiya"
          className="w-auto h-full object-cover object-center"
        />
      </div>
    </div>
  );
};

export default LegacySection;