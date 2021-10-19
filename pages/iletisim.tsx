import React from "react";
import Form from "src/components/Form";
import HeroImage from "src/components/HeroImage";
import { contacts } from "src/data/contancts";

export default function iletisim() {
  return (
    <div>
      <HeroImage src="/images/26.webp" text="İletişim" />
      <div className="container my-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3198.2943133225517!2d37.12051010131836!3d36.715492248535156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fce1b6092e35b%3A0x55f8a8ad272ab16a!2sKilis%20Kona%C4%9F%C4%B1%20Butik%20Otel!5e0!3m2!1sen!2str!4v1633854569872!5m2!1sen!2str"
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
