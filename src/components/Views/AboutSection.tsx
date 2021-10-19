import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="container md:flex  justify-between my-16 gap-10">
      <div className="md:w-1/2">
        <h4 className="text-mainYello mb-10">ABOUT US</h4>
        <h2 className="text-2xl font-bold">
          Welcome Hiroto Hotel In Street L’Abreuvoir
        </h2>
        <p className="text-gray-500 mt-3">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt.
        </p>
        <p className="text-gray-500 mt-3">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </p>
        <Image src="/signture.png" width={200} height={100} alt="signture" />
      </div>
      <div className="flex gap-4 md:w-1/2 mt-5 md:mt-0">
        <div>
          <Image
            className="rounded-md"
            width={300}
            height={400}
            alt="hotel room"
            src="/images/5.webp"
          />
        </div>
        <div className="transform translate-y-14">
          <Image
            className="rounded-md "
            width={300}
            height={400}
            alt="hotel room"
            src="/images/19.webp"
          />
        </div>
      </div>
    </section>
  );
}
