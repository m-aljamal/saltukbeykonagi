import React from "react";
import Image from "next/image";
import HeroImage from "src/components/HeroImage";
import { rooms } from "src/data/rooms";
import Room from "src/components/Room";
import Head from "next/head";

export default function Rooms() {
  return (
    <div>
      <Head>
        <title>saltukbeykonagi</title>
        <meta name="description" content="saltukbeykonagi" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <HeroImage src="/images/2.webp" text="Odalar" />
      <div className="container">
        <div className="text-center my-8">
          <h2 className="text-2xl text-mainYello">
            DOĞANIN TAM İÇİNDE… SESSİZ… ÖZEL…
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-700">
            Otelimiz Kilis’te, şehir merkezinde ve bir o kadar da Kilis’in
            kokusunu en iyi şekilde duyabileceğiniz bir yerdedir. Eski mimari ve
            tarihi dokusuyla dizayn edilmiş olan otelimizde aile odası, süit oda
            ve standart oda seçenekleriyle beraber konaklama imkânlarını sizlere
            sunuyoruz. Her odamızda bulunan merkezi klima sistemi, 82 ekran LED
            TV, kasa, fön makinesi, yöresel kahvaltı toplantı salonu, mini bar
            ve ultra konforlu yataklarımızla sizlere hizmet veriyoruz.
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
