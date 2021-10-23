import React from "react";
import Image from "next/image";
const HeroImage = ({ src }: { src: string }) => {
  return (
    <div className=" relative h-[500px]">
      <Image alt="image" layout="fill" src={src} objectFit="cover" />
    </div>
  );
};

export default HeroImage;
