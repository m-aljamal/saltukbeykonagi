import React from "react";
import HeroImage from "src/components/HeroImage";
import { rooms } from "src/data/rooms";
import Room from "src/components/Room";

export default function Rooms() {
  return (
    <div>
      <HeroImage src="/images/2.webp" />
      <div className="container">
        <div className="text-center my-8">
          <h2 className="text-2xl text-mainYello">
            Saltuk Bey Konağı Otel
          </h2>
          <p className="mt-3 text-lg leading-8 text-gray-700">
            Otelimiz Kadim Medeniyetler Diyarı Kilis’te bulunan konukseverlik
            anıtıdır. Saltuk Bey Konağı Otel mimari yapısı restore
            edilerek ve yüksek konfor teknolojileriyle donatılarak eski
            görkemini günümüze taşımaktadır. Konukların ihtiyaçları en ince
            detaylarına göre düşünülerek tasarlanan Saltuk Bey Konağı, muhteşem odalarıyla misafirlerine konforlu ve kaliteli
            konaklama hizmeti veriyor. Saltuk Bey Konağı Otel ışık saçan
            mimarisi ve huzur veren motifleri ile geçmişin dokusunu
            yansıtmaktadır. Geçmişin pek çok dönemine tanıklık etmiş Saltuk Bey
            Konağı Otel değişen çağlara meydan okurcasına dimdik ayakta.
            Saltuk Bey Konağı Otel, taş işçiliğinin tüm görkemini yansıtan
            karakteristik binası, Kilis şehrine hakim konumu, önemli tarihi
            eserlere yakınlığıyla, ziyaretçilerine büyülü bir zaman yolculuğu
            sunuyor. Restoran & Cafe bölümümüz ise konuklarını Kilis mutfağına
            özgü mükemmel lezzetlerle ağırlıyor.
          </p>
        </div>
        <div className="my-10">
          {rooms.map((room: any, i) => (
            <Room room={room} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
