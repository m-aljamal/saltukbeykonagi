import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const formStyle = "block w-full border py-2 my-4 p-2 rounded-md   ";
export default function Form() {
  const [state, handleSubmit] = useForm("xdobaznw");
  if (state.succeeded) {
    return (
      <p className="text-center text-xl text-mainYello py-10 bg-mainBlack">
        istek gönderildi
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input name="Adınız" placeholder="adınız" />
      <Input name="TelefonNumaranız" placeholder="Telefon Numaranız" />
      <Input name="E-postaAdresiniz" placeholder="E-posta Adresiniz" />
      <textarea
        name="Mesajınız"
        placeholder="Mesajınız"
        className={formStyle}
      />
      <button className={`${formStyle} bg-mainYello text-white`}>Gönder</button>
    </form>
  );
}

const Input = ({ name, placeholder }: any) => {
  return <input className={formStyle} name={name} placeholder={placeholder} />;
};
