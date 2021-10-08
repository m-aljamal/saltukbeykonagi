import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExternalIconLink from "../ExternalIconLink";
import { socialLinks } from "src/constant/socialLinks";
import { mainLinks } from "src/constant/mainLinks";

export default function Header() {
  return (
    <nav className="relative w-full py-5 bg-darkGray">
      <div className="flex flex-col-reverse md:flex-row  items-center container justify-between">
        <div className="flex gap-10 ">
          {mainLinks.map((l, i) => (
            <Link href={l.link} key={i}>
              <a className="   text-white">{l.text}</a>
            </Link>
          ))}
        </div>
        <div className=" relative w-36 md:absolute top-0 z-40 bg-darkGray h-40 xl:w-60 lg:w-52 md:w-40 left-0 right-0 mx-auto rounded-3xl ">
          <Image
            src="/logo.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="logo"
            className="w-full"
          />
        </div>
        <ul className="md:flex gap-10 hidden">
          {socialLinks.map((s) => (
            <li className="cursor-pointer" key={s.href}>
              <ExternalIconLink href={s.href} iconName={s.icon} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
