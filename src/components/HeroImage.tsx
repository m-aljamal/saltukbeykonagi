import React from "react";
import Image from "next/image";
const HeroImage = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className=" relative h-[500px]">
      <Image alt="image" layout="fill" src={src} />
      <h2 className=" container absolute text-3xl text-white top-1/2 ">
        {text}
      </h2>
    </div>
  );
};

export default HeroImage;
