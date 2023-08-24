import React from "react";
import Image from "next/image";
import { mainLinks } from "src/constant/mainLinks";
import SocialMedia from "./SocialMedia";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="relative w-full py-5 bg-darkGray">
      <div className="flex flex-col-reverse md:flex-row  items-center container justify-between">
        <div className="flex gap-5 ">
          {mainLinks.map((l, i) => (
            <Link href={l.link} key={i} className="text-white">
              {l.text}
            </Link>
          ))}
        </div>
        <div className=" relative w-36 md:absolute top-0 z-40 bg-darkGray h-40 xl:w-60 lg:w-52 md:w-40 left-0 right-0 mx-auto rounded-3xl ">
          <Image
            src="/logo2.png"
            fill
            objectFit="contain"
            objectPosition="center"
            alt="logo"
            className="w-full"
          />
        </div>
        <SocialMedia style="hidden" />
      </div>
    </nav>
  );
}
