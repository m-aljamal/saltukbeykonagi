import React from "react";
import { socialLinks } from "src/constant/socialLinks";
import ExternalIconLink from "../ExternalIconLink";

export default function SocialMedia() {
  return (
    <ul className="md:flex gap-10 hidden">
      {socialLinks.map((s) => (
        <li className="cursor-pointer" key={s.href}>
          <ExternalIconLink href={s.href} iconName={s.icon} />
        </li>
      ))}
    </ul>
  );
}
