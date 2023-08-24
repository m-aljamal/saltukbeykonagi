import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
export default function AppCarousel() {
  return (
    <section>
      <Carousel
        infiniteLoop
        showStatus={false}
        className="h-[calc(100vh-64px)]"
        autoPlay
        stopOnHover={false}
      >
        <CarouselImage src="/images/8.webp" />
        <CarouselImage src="/images/2.webp" />
        <CarouselImage src="/images/10.webp" />
        <CarouselImage src="/images/11.webp" />
        <CarouselImage src="/images/14.webp" />
        <CarouselImage src="/images/4.webp" />
      </Carousel>
    </section>
  );
}

const CarouselImage = ({ src }: { src: string }) => {
  return (
    <div className="h-[calc(100vh-64px)]  ">
      <div className="absolute bg-gray-800 top-0 bottom-0 left-0 right-0 bg-opacity-40 z-10"></div>
      <div className=" flex  flex-col justify-center items-center h-[100%]">
        <p className=" font-bold text-mainYello z-50">HOŞ GELDİNİZ</p>
        <h2 className=" text-4xl z-50 text-white font-bold">
          Rahatlığınız ve Keyfiniz için en iyisini yaşayın
        </h2>
      </div>
      <Image  fill objectFit="cover" alt="image" src={src} />
    </div>
  );
};
