import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="container md:flex  justify-between my-16 gap-10">
      <div className="md:w-1/2">
        <h4 className="text-mainYello mb-10">HAKKIMIZDA</h4>
        <h2 className="text-2xl font-bold">Merhaba Kilis Sevdalıları !..</h2>
        <p className="text-gray-500 mt-3">
          Herşeyin bir öyküsü vardır, elbette bir de başlangıcı. Bizim de
          öykümüz henüz yazılmaya başlandı. Öykümüzün adı Saltuk Bey Konağı
           Saltuk Bey Konağı  10 odadan oluşmakta.
          Odalarımız Kilis’in taş mekanlarını yansıtan dış mimarisiyle nostalji
          esintileri getirirken iç şıklığıyla da kendinizi özel hissetmenizi
          sağlıyor.
        </p>
        <p className="text-gray-500 mt-3">
          Aynı zamanda akşam sefası sevenler için havuz başını saran zeytin
          ağaçlarıyla kaplı bahçemiz olup Kilis çarşısına çok kısa mesafede
          olup, oradaki hareketliliğe ortak olabilirsiniz.
        </p>
        <p className="text-gray-500 mt-3">
          {`
Gaziantep'den 60 km uzaklıkta olan Saltuk Bey Konağı ,
Hatay'dan ise Kilis’e 150 km uzaklıkta olan Saltuk Bey Konağı ulaşım ile çok kolay.Otelimize ulaştıktan sonraki her türlü
rahatlığınızın garantisi Saltuk Bey Konağı ’dir. Özel
araçlarınız için de otopark hizmeti veriyoruz.
`}
        </p>
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
