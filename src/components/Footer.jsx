import React from "react";
import logo from "../images/logo.png";
import Container from "./ui/Container/Index";

const Footer = () => {
  return (
    <Container
      className={
        "flex flex-col items-center gap-5 mb-14 lg:flex-row lg:justify-between lg:mb-32"
      }
    >
      <img src={logo} alt="" className="lg:order-2" />
      <p className="text-xl lg:order-1">Privacy Policy</p>
      <p className="text-xl lg:order-3">© 2022 — KIOUNION Inc</p>
    </Container>
  );
};

export default Footer;
