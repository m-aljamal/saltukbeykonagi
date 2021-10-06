import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExternalIconLink from "../ExternalIconLink";
import { socialLinks } from "src/constant/socialLinks";
import { mainLinks } from "src/constant/mainLinks";

export default function Header() {
  return (
    <nav className=" absolute   w-full py-2 ">
      <div className="flex  items-center container justify-between">
        <div>
          {mainLinks.map((l, i) => (
            <Link href={l.link} key={i}>
              <a className=" ml-10 text-white">{l.text}</a>
            </Link>
          ))}
        </div>
        <div className="relative  ">
          <Image src="/logo.jpeg" width={175} height={100} alt="logo" />
        </div>
        <ul className="flex gap-10">
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
