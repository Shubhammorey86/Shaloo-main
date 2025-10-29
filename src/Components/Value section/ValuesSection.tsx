"use client";

import React from "react";
import ValuesImage from "./ValuesImage";
import ValuesContent from "./ValuesContent";

/**
 * ValuesSection component displays Vaibhav Setiya's values and journey
 * with an image and descriptive text content in a responsive layout.
 */
const ValuesSection: React.FC = () => {
  return (
    <section
      className="flex flex-1 gap-24 p-12 bg-[url('/blackbg.png')] bg-cover  bg-center  max-md:flex-col max-md:gap-12 max-sm:p-6"
      aria-labelledby="values-heading"
    >
      <ValuesImage />
      <ValuesContent />
    </section>
  );
};

export default ValuesSection;
