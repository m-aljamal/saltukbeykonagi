import React from "react";
const formStyle = "block w-full border py-2 my-4 p-2 rounded-md   ";
export default function Form() {
  return (
    <form action="https://formspree.io/f/xknkgebk" method="POST">
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
