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
      <HeroImage src="/images/2.webp" />
      <div className="container">
        <div className="text-center my-8">
          <h2 className="text-2xl text-mainYello">
            DOĞANIN TAM İÇİNDE… SESSİZ… ÖZEL…
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-700">
            Otelimiz Kadim Medeniyetler Diyarı Kilis’te bulunan konukseverlik
            anıtıdır. Saltuk Bey Konağı Butik Otel mimari yapısı restore
            edilerek ve yüksek konfor teknolojileriyle donatılarak eski
            görkemini günümüze taşımaktadır. Konukların ihtiyaçları en ince
            detaylarına göre düşünülerek tasarlanan Saltuk Bey Konağı Butik
            Otel, muhteşem odalarıyla misafirlerine konforlu ve kaliteli
            konaklama hizmeti veriyor. Saltuk Bey Konağı Butik Otel ışık saçan
            mimarisi ve huzur veren motifleri ile geçmişin dokusunu
            yansıtmaktadır. Geçmişin pek çok dönemine tanıklık etmiş Saltuk Bey
            Konağı Butik Otel değişen çağlara meydan okurcasına dimdik ayakta.
            Saltuk Bey Konağı Butik Otel, taş işçiliğinin tüm görkemini yansıtan
            karakteristik binası, Kilis şehrine hakim konumu, önemli tarihi
            eserlere yakınlığıyla, ziyaretçilerine büyülü bir zaman yolculuğu
            sunuyor. Restoran & Cafe bölümümüz ise konuklarını Kilis mutfağına
            özgü mükemmel lezzetlerle ağırlıyor.
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
