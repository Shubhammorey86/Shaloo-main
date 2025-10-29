import React from "react";

interface ProfileImageProps {
  imageUrl: string;
  altText: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ imageUrl, altText }) => {
  return (
    <figure className="shrink-0">
      <img
        src={imageUrl}
        className="object-cover rounded-full h-[525px] w-[405px] max-md:h-[390px] max-md:w-[300px] max-sm:h-[325px] max-sm:w-[250px]"
        alt={altText}
      />
    </figure>
  );
};

export default ProfileImage;
