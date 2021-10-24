import Head from "next/head";
import React, { useState } from "react";
import HeroImage from "src/components/HeroImage";
import ImageModul from "src/components/ImageModul";
import imagesArry from "src/data/images";
import Image from "next/image";
const Galeri = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const handleImageClick = (image: string) => {
    setShouldShow(true);
    setCurrentImage(image);
  };

  return (
    <div>
      <HeroImage src="/images/7.webp" />
      <div className=" container">
        <h2 className="text-center my-10 text-mainYello text-2xl">Galeri</h2>
        <div className=" grid md:grid-cols-3 grid-cols-1 gap-10 my-8">
          {imagesArry.map((image) => (
            <div
              className=" relative w-full h-56 shadow-lg"
              key={image}
              onClick={() => handleImageClick(image)}
            >
              <Image
                className="rounded-md "
                alt="Galeri"
                src={image}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>
        {currentImage && (
          <ImageModul
            shouldShow={shouldShow}
            currentImage={currentImage}
            close={async () => setShouldShow(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Galeri;
