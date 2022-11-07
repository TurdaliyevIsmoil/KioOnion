import React, { useState } from "react";
import Button from "./../ui/Button/Index";
import SuccessModal from "./success";

const Modal = ({ close }) => {
  const [success, setsuccess] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const { name, experience, email, message, phone } = e.target;
    const data = `New Driver:%0A👤Name: ${name.value}%0A📧E-mail: ${email.value}%0A👨‍⚕️Experience CDL: ${experience.value}%0A📞Phone Number: ${phone.value}%0A✍️Message: ${message.value}`;
    const token = "5610639712:AAGmMw4CldaWmMrZjz34v2wQnBGS-eliNUI";
    let url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=-867448364&text=";
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + data, true);
    xhttp.send();

    setsuccess(true);
    setTimeout(() => {
      setsuccess(false);
      close();
    }, 1500);
  };
  return (
    <div className="flex fixed items-center overflow-auto py-10 justify-center inset-0 z-[999] bg-[#000a] backdrop-blur-md px-5">
      {success && <SuccessModal />}
      <form
        onSubmit={submitHandler}
        className="gap flex flex-col lg:w-1/2 lg:gap-4 bg-[#ffffffd2] lg:p-10 p-6 w-full rounded-md"
      >
        <div className="flex justify-between items-center">
          <h1 className="lg:text-[60px] text-[32px]">Send message</h1>
          <img
            src="https://img.icons8.com/ios/100/000000/delete-sign--v1.png"
            className="lg:w-10 w-6 lg:-mt-16 -mt-5  hover:rotate-90 duration-300 cursor-pointer"
            onClick={() => close(false)}
          />
        </div>
        <div className="flex lg:gap-14 flex-col gap-4 lg:flex-row child:lg:w-1/2">
          <input
            type="text"
            className="py-5 border-b border-black focus:ring-0 outline-none placeholder:text-black bg-transparent"
            placeholder="Full Name"
            name="name"
          />
          <input
            type="text"
            name="experience"
            className="py-5 border-b border-black focus:ring-0 outline-none placeholder:text-black bg-transparent"
            placeholder="Years of CDL experience"
          />
        </div>
        <input
          type="tel"
          className="py-5 border-b border-black focus:ring-0 outline-none placeholder:text-black bg-transparent mt-6 lg:mt-0"
          placeholder="Phone number"
          name="phone"
        />
        <input
          type="email"
          name="email"
          className="py-5 border-b border-black focus:ring-0 outline-none placeholder:text-black bg-transparent mt-6 lg:mt-0"
          placeholder="Email"
        />
        <div className="flex flex-col gap-4 mt-4">
          <span>Message</span>
          <textarea
            rows={5}
            name="message"
            className="border rounded-md p-3 outline-none bg-transparent"
          ></textarea>
        </div>
        <Button
          type="submit"
          primary
          className={
            "rounded-[8px] outline-none border-none lg:w-80 w-full text-center hover:shadow-md hover:-translate-y-1 duration-300 mt-4 lg:py-8 py-5 text-[20px] lg:text-[25px]"
          }
        >
          APPLY NOW
        </Button>
      </form>
    </div>
  );
};

export default Modal;
