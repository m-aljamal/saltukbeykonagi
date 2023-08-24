import Image from "next/image";
export default function FooterLogo() {
  const lineStyle = "text-white w-full opacity-30 h-[1px] bg-white";

  return (
    <div className="relative flex justify-between items-center  ">
      <div className={lineStyle}></div>
      <div className=" md:w-[400px] w-[700px]">
        <Image src="/logo2.png" width={200} height={200} alt="logo" />
      </div>
      <div className={lineStyle}></div>
    </div>
  );
}
