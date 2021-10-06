import React from "react";

export default function ExternalIconLink({
  href,
  iconName,
}: {
  href: string;
  iconName: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <i className={`text-gray-400 hover:text-white ${iconName}`}></i>
    </a>
  );
}
