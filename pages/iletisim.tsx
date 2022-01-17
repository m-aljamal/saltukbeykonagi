import Head from "next/head";
import React from "react";
import Form from "src/components/Form";
import HeroImage from "src/components/HeroImage";
import { contacts } from "src/data/contancts";
import { useForm, ValidationError } from "@formspree/react";

export default function Iletisim() {
  const [state, handleSubmit] = useForm("xdobaznw");
  if (state.succeeded) {
    return (
      <p className="text-center text-xl text-mainYello py-10 bg-mainBlack">
        istek gönderildi
      </p>
    );
  }
  return (
    <div>
      <HeroImage src="/images/26.webp" />
      <div className="container my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.282230656617!2d37.118084215752226!3d36.7157824799661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fcf7cc9946851%3A0x7ba3fb408e5e6b16!2sSaltuk%20Bey%20Kona%C4%9F%C4%B1%20Butik%20Otel!5e0!3m2!1sen!2str!4v1634661388753!5m2!1sen!2str"
          className="w-full h-[500px]"
          loading="lazy"
        ></iframe>
        <div className="md:flex mt-8 gap-10">
          <div className="md:w-1/2">
            <Form />
          </div>
          <div className="md:w-1/2">
            <IconWithInfo
              text={contacts.address}
              icon="fas fa-map-marker-alt text-mainYello "
            />
            <IconWithInfo
              text={contacts.phone}
              icon="fas fa-phone text-mainYello "
            />
            <IconWithInfo
              text={contacts.phone2}
              icon="fas fa-phone text-mainYello "
            />

            <IconWithInfo
              text={contacts.email}
              icon="fas fa-envelope-open-text text-mainYello "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const IconWithInfo = ({ text, icon }: any) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <i className={icon}></i>
      <p>{text}</p>
    </div>
  );
};
