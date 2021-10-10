import React from "react";
import Form from "src/components/Form";
import HeroImage from "src/components/HeroImage";

export default function iletisim() {
  return (
    <div>
      <HeroImage
        src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80"
        text="İletişim"
      />
      <div className="container mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3198.2943133225517!2d37.12051010131836!3d36.715492248535156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152fce1b6092e35b%3A0x55f8a8ad272ab16a!2sKilis%20Kona%C4%9F%C4%B1%20Butik%20Otel!5e0!3m2!1sen!2str!4v1633854569872!5m2!1sen!2str"
          className="w-full h-[500px]"
          loading="lazy"
        ></iframe>
        <div>
          <div>
            <Form />
          </div>
          <div>
            <p>address</p>
          </div>
        </div>
      </div>
    </div>
  );
}