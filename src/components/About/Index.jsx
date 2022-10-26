import React from "react";
import Container from "./../ui/Container/Index";
import aboutImg from "../../images/about.png";

const About = () => {
  return (
    <Container
      className={"flex my-10 flex-col gap-8 lg:flex-row lg:gap-2"}
      id="about"
    >
      <div className="flex flex-col gap-9 lg:w-1/2">
        <h1 className="text-[40px] lg:text-[86px]">About us</h1>
        <p className="text-base lg:text-[20px] leading-normal">
          We provide dependable services, with a track record of on-time
          delivery, high safety standards, and exceptional customer service. We
          adapt to our customers' and the trucking industry's ever-changing
          needs. <br />
          <br /> We recognize the need for cost-effective services and are
          committed to providing products that outperform our competitors.
        </p>
      </div>
      <img src={aboutImg} className="max-w-full lg:w-1/2 pl-10" alt="" />
    </Container>
  );
};

export default About;
