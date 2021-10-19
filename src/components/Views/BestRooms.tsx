import Image from "next/image";
export default function BestRooms() {
  return (
    <section className="my-8 container">
      <h2 className="text-center text-3xl text-mainYello">GALERİ</h2>
      <div className="md:flex mt-8 gap-5">
        <div className="md:w-1/2 ">
          <div className="relative h-96">
            <Image
              layout="fill"
              className=" rounded-t-md"
              alt="room"
              src="/images/11.webp"
            />
          </div>
          <div className=" p-4 shadow-md  ">
            <h3 className=" text-darkGray">Standart Odamız</h3>
            <p className="text-gray-700">
              Her odamızda bulunan merkezi klima sistemi,82 ekran LED TV, oturma
              grubu, kasa, fön makinesi, mini bar ve ultra konforlu
              yataklarımızla sizlere hizmet veriyoruz.
            </p>
          </div>
        </div>
        <div className="md:w-1/2  grid sm:grid-cols-2  grid-cols-1 gap-5 mt-5 md:mt-0">
          <RoomImage src="/images/12.webp" text="Lobi" />
          <RoomImage src="/images/13.webp" text="Toplantı Salonu" />
          <RoomImage src="/images/14.webp" text="Restoran" />
          <RoomImage src="/images/15.webp" text="Bahçe" />
        </div>
      </div>
    </section>
  );
}

const RoomImage = ({ src, text }: { src: string; text: string }) => {
  return (
    <div className="relative h-64 md:h-auto">
      <Image layout="fill" alt="room" src={src} className="rounded-md" />
      <p className="absolute bottom-0 left-4 text-white bg-mainYello p-1 rounded-md mb-2">
        {text}
      </p>
    </div>
  );
};
