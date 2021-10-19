import React from "react";
import Image from "next/image";
import HeroImage from "src/components/HeroImage";
import { rooms } from "src/data/rooms";
import Room from "src/components/Room";

export default function Rooms() {
  return (
    <div>
      <HeroImage
        src="/images/2.webp"
        text="Odalar"
      />
      <div className="container">
        <div className="text-center my-8">
          <h2 className="text-2xl text-mainYello">
            DOĞANIN TAM İÇİNDE… SESSİZ… ÖZEL…
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-700">
            Misyonumuz misafirlerin güzel anılarında yer eden başta Kilis
            kültürü olmak üzere tüm bölge kültürlerimizi misafirperverliği mizi
            en iyi şekilde aktarabilen yenilikçi yapısı ve verdiğimiz hizmetle
            alanında örnek ve öncü olan büyük bir marka olmak en büyük hayalimiz
          </p>
        </div>
        <div className="my-10">
          {rooms.map((room: any) => (
            <Room room={room} key={room.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
