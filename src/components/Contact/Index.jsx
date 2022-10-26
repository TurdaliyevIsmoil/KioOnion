import React, { useState } from "react";
import Container from "../ui/Container/Index";
import facebook from "../../images/facebook.svg";
import instagram from "../../images/instagram.svg";
import linkedin from "../../images/linkedin.svg";
import twitter from "../../images/twitter.svg";
import Button from "../ui/Button/Index";
import SuccessModal from "../ForDrivers/success";

const Contact = () => {
  const [success, setsuccess] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    const { name, topic, email, message } = e.target;
    const data = `New User:%0A👤Name: ${name.value}%0A📧E-mail: ${email.value}%0A📞Topic: ${topic.value}%0A✍️Message: ${message.value}`;
    const token = "5610639712:AAGmMw4CldaWmMrZjz34v2wQnBGS-eliNUI";
    let url =
      "https://api.telegram.org/bot" +
      token +
      "/sendMessage?chat_id=1014474410&text=";
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + data, true);
    xhttp.send();

    setsuccess(true);
    setTimeout(() => {
      setsuccess(false);
    }, 1500);
  };
  return (
    <div
      id="contact"
      className="bg-white z-[7] relative mb-4 lg:pt-8 pb-12 lg:pb-10"
    >
      {success && <SuccessModal />}
      <Container className={"flex flex-col gap-14 pt-4 lg:flex-row"}>
        <div className="flex flex-col lg:w-1/2">
          <h1 className="text-[40px] lg:text-[80px]">CONTACT US</h1>
          <h2 className="text-[25px] font-bold mt-12 mb-4">Headquaters</h2>
          <p className="text-base">
            4030 MT Carmel Tobasco RD STE #127B Cincinnati, OH 45255 <br />
            <a href="tel:+1(650)303-6042" className="text-[orange] font-semibold">
              +1(650)303-6042
            </a>
            <br />
            kiounionsf@gmail.com <br />
            Dispatch@kiounion.com <br />
          </p>
          <h2 className="text-[25px] font-bold  mt-6 mb-4 focus:border-none outline-none">
            Social Networks
          </h2>
          <SocialMedia
            facebook={facebook}
            instagram={instagram}
            twitter={twitter}
            linkedin={linkedin}
          />
        </div>
        <form
          onSubmit={submitHandler}
          className="gap flex flex-col lg:w-1/2 lg:gap-4"
        >
          <div className="flex lg:gap-14 flex-col gap-4 lg:flex-row child:lg:w-1/2">
            <input
              type="text"
              className="py-5 border-b border-black focus:ring-0 outline-none placeholder:text-black"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              className="py-5 border-b border-black focus:ring-0 outline-none placeholder:text-black"
              placeholder="Topic"
              name="topic"
            />
          </div>
          <input
            type="email"
            className="py-5 border-b border-black focus:ring-0 outline-none placeholder:text-black"
            placeholder="Email"
            name="email"
          />
          <div className="flex flex-col gap-4 mt-4">
            <span>Message</span>
            <textarea
              rows={5}
              className="border rounded-md p-3 outline-none"
              name="message"
            ></textarea>
          </div>
          <Button
            primary
            type="submit"
            className={
              "rounded-[8px] lg:w-80 w-full text-center hover:shadow-md hover:-translate-y-1 duration-300 mt-4 lg:py-8 py-5 text-[20px] lg:text-[25px]"
            }
          >
            APPLY NOW
          </Button>
        </form>
      </Container>
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.6063838090608!2d69.24385845576028!3d41.30882558520772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b48f1155a7d%3A0xf905a18baf36eee0!2sMiracle%20Dream!5e0!3m2!1sen!2s!4v1664893812507!5m2!1sen!2s"
          className="w-full lg:aspect-[16/8] aspect-[16/16] h-auto mt-6 lg:mt-12 rounded-xl"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </div>
  );
};

export default Contact;

function SocialMedia({ facebook, instagram, twitter, linkedin }) {
  return (
    <div className="flex gap-4">
      <a className="w-14 block h-14 cursor-pointer rounded-full bg-orange flex items-center justify-center">
        <img src={facebook} alt="" />
      </a>
      <a className="w-14 block h-14 cursor-pointer rounded-full bg-orange flex items-center justify-center">
        <img src={instagram} alt="" />
      </a>
      <a className="w-14 block h-14 cursor-pointer rounded-full bg-orange flex items-center justify-center">
        <img src={twitter} alt="" />
      </a>
      <a className="w-14 block h-14 cursor-pointer rounded-full bg-orange flex items-center justify-center">
        <img src={linkedin} alt="" />
      </a>
    </div>
  );
}
