import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
export default function AppCarousel() {
  return (
    <Carousel infiniteLoop showStatus={false}>
      <CarouselImage src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
      <CarouselImage src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80" />
      <CarouselImage src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" />
    </Carousel>
  );
}

const CarouselImage = ({ src }: { src: string }) => {
  return (
    <div className="relative   h-[100vh]   ">
      <div className="absolute bg-gray-800 top-0 bottom-0 left-0 right-0 bg-opacity-25 z-10"></div>
      <div className=" flex  flex-col justify-center items-center h-[100%]">
        <p className=" font-bold text-mainYello z-50">WELCOME HIROTO</p>
        <h2 className=" text-4xl z-50 text-white font-bold">
          Experience the greatest for you holidays.
        </h2>
      </div>
      <Image layout="fill" objectFit="cover" alt="image" src={src} />
    </div>
  );
};
