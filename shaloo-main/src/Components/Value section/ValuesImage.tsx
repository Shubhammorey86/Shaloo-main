import React from "react";
import data from "../../assets/Data.png"
/**
 * ValuesImage component displays the father and daughter portrait image
 * in the values section.
 */
const ValuesImage: React.FC = () => {
  return (
    <div className="flex flex-1 justify-center h-full items-center">
      <div className="flex gap-8 items-center max-md:flex-col">
        <figure className="flex-1">
          <img
            src={data}
            alt="Father and daughter portrait"
            className="w-full rounded-[8px]"
          />
        </figure>
      </div>
    </div>
  );
};

export default ValuesImage;
