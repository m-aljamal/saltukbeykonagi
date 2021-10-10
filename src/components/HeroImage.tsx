import React from "react";
import Image from "next/image";
const HeroImage = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className=" relative h-[500px]">
      <Image alt="image" layout="fill" src={src} />
      <div className='container'>
        <h2 className="  absolute text-3xl text-white top-1/2 ">{text}</h2>
      </div>
    </div>
  );
};

export default HeroImage;
