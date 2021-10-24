import React from "react";
import { contacts } from "src/data/contancts";
import FooterLogo from "./FooterLogo";
import SocialMedia from "./SocialMedia";
export default function Footer() {
  return (
    <div className="bg-mainBlack py-5">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row  justify-between flex-wrap">
          <div>
            <Title text="Adres" />
            <Content text={contacts.address} />
          </div>
          <div>
            <Title text="Sosyal Medya" />
            <SocialMedia style="flex" />
          </div>
          <div>
            <Title text="İletişim" />
            <Content text={contacts.phone} />
          </div>
          <div>
            <Title text="Email" />
            <Content text={contacts.email} />
          </div>
        </div>
        <FooterLogo />
        <p className=" text-white text-center ">
          All right reserved&#169;{new Date().getFullYear()} altukbeykonagi
        </p>
      </div>
    </div>
  );
}

const Title = ({ text }: { text: string }) => {
  return <h3 className=" text-gray-400  mb-2 ">{text}</h3>;
};

const Content = ({ text }: { text: string }) => {
  return <p className="text-white">{text}</p>;
};
