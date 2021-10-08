import { specialRooms } from "src/data/specialRooms";
import Image from "next/image";
export default function SpecialRooms() {
  return (
    <section className=" mt-32 bg-darkGray">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="md:w-1/2 w-full grid md:grid-cols-2 ">
          {specialRooms.map((s) => (
            <div key={s.title} className="relative h-72 ">
              <Image
                src={s.image}
                alt={s.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        <div className=" container md:w-1/2 md:py-20 py-5 pr-10 ">
          <h2 className="text-mainYello text-3xl">
            SALTUK BEY KONAĞI BUTİK OTEL
          </h2>
          <p className=" text-gray-400 mt-5 leading-8 text-justify  ">
            beklentilerinizin siz söylemeden karşılık bulduğu, ayrıcalıkların ve
            farklılıkların Kilis teki yeni adresi. Sunduğumuz farklı konaklama
            alternatifleriyle, alışılagelmiş çizgilerin ötesinde, gelişimci ve
            yenilikçi hizmet anlayışımızla, dolayısıyla duyarlı ve estetik
            yaklaşımlarımızla, değer kattığımız mekanlarımızda her detay sizin
            konfor ve memnuniyetinizi sağlamak için tasarlanmıştır.
            Misafirlerimizin memnuniyeti için benimsediğimiz temel ve etik
            ilkelerimiz, hizmetlerimizdeki kaliteyi sürekli geliştiren
            anlayışımız ve sunduğumuz olanaklar ile hizmetinizdeyiz. Saltuk Bey
            Konağı Butik Otel prestijli bir butik otelinden daha fazlası.
          </p>
        </div>
      </div>
    </section>
  );
}
