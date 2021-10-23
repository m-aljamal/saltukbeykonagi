import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ReversationForm = () => {
  const [state, handleSubmit] = useForm("moqyzkge");
  if (state.succeeded) {
    return (
      <p className="text-center text-xl text-mainYello py-10 bg-mainBlack">
        istek gönderildi
      </p>
    );
  }
  return (
    <div className=" bg-mainBlack">
      <h2 className=" text-mainYello text-center pt-5 text-xl border-b w-[fit-content] mx-auto border-mainYello">
        Rezervasyon
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" flex container items-center gap-10 pt-5  pb-8 justify-center "
      >
        <div>
          <Input
            required
            type="date"
            text="Giriş tarihi *"
            name="Giriş-tarihi"
          />
          <Input
            required={false}
            type="text"
            text="Kişi sayısı:"
            name="Kişi-sayısı"
          />
        </div>

        <div>
          <Input
            required
            type="date"
            text="Çıkış tarihi *"
            name="Çıkış-tarihi"
          />
          <Input
            required={false}
            type="text"
            text="Oda sayısı:"
            name="oda-sayısı"
          />
        </div>

        <div>
          <Input required type="text" text="Adı: *" name="Adı" />
          <Input required type="text" text="Telefon no: *" name="telefon no" />
        </div>
        <button className=" mt-5 w-44  h-12 rounded-full bg-mainYello text-white">
          Gönder
        </button>
      </form>
    </div>
  );
};

export default ReversationForm;

const Input = ({
  text,
  name,
  type,
  required,
}: {
  text: string;
  name: string;
  type: string;
  required: boolean;
}) => {
  return (
    <div className="text-white">
      <p>{text}</p>
      <input
        required={required}
        type={type}
        name={name}
        className=" rounded-md bg-gray-200 text-gray-800 w-64"
      />
    </div>
  );
};
