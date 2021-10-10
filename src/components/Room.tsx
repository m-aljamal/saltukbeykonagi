import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export interface IRoom {
  room: {
    images: string[];
    title: string;
    text: string;
    services: { text: string; logo: string }[];
  };
}

export default function Room({ room }: IRoom) {
  return (
    <section className="md:flex my-12 shadow-lg rounded-md bg-mainBlack  md:h-96    ">
      <div className="md:w-1/2">
        <Carousel infiniteLoop showStatus={false}>
          {room.images.map((image, i) => (
            <div className="relative h-96 " key={i}>
              <Image
                src={image}
                objectFit="cover"
                layout="fill"
                alt={room.title}
                className="rounded-tl-md md:rounded-bl-md rounded-tr-md md:rounded-tr-none"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="md:w-1/2 px-8 pt-3  pb-8">
        <h2 className=" mb-5 text-mainYello text-xl">{room.title}</h2>
        <p className="leading-8 text-white">{room.text}</p>
        <div className="flex justify-between mt-8 gap-5 flex-wrap ">
          {room.services.map((s) => (
            <div key={s.text} className="text-center">
              <i className={`${s.logo} text-2xl text-mainRed`}></i>
              <p className="mt-3 text-white">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
