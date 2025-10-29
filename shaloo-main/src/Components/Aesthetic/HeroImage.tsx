"use client";
import * as React from "react";

interface HeroImageProps {
  imageUrl?: string;
  altText?: string;
}

/**
 * HeroImage component displays a full-width hero image with proper accessibility
 */
const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl = "https://cdn.builder.io/api/v1/image/assets/TEMP/84c43d26d42a1006dc7ea0e8157e03acf93cef51",
  altText = "City skyline with skyscrapers and crowd",
}) => {
  return (
    <section
      className="flex sticky top-0 left-0  flex-col w-full bg-white h-screen z-0"
      role="region"
      aria-label="Hero section"
    >
      <div className="flex relative flex-col w-full h-screen">
        <div className="flex absolute inset-0 flex-col">
          <figure className="overflow-hidden relative flex-1 w-full">
            <img
              src={imageUrl}
              alt={altText}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
