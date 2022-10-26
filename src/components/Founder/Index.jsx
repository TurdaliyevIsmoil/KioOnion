import React from "react";
import Container from "../ui/Container/Index";
import image from "../../images/founder.png";

const Founder = () => {
  return (
    <div className="relative z-[3] max-w-screen">
      <Container className={"mb-10 relative z-[2]"}>
        <div
          className={
            "p-5 rounded-xl border border-orange pb-0 z-[2] lg:pt-24 lg:pl-12 bg-white lg:flex"
          }
        >
          <div className="flex flex-col lg:w-1/2">
            <p className="lg:text-2xl text-xl mb-3  w-48 lg:w-auto font-semibold">
              Founder and Chied Executive Officer
            </p>
            <h1 className="lg:text-[80px] text-black lg:whitespace-nowrap capitalize  text-[40px] leading-tight">
              Islambek Sultanbaev
            </h1>
            <p className="lg:text-xl text-[15px]] mt-8 lg:mt-14 text-[#585858]">
              We're building the self-driving infrastructure that will enable
              autonomous trucking through carefully curated strategic
              relationships.
              <br />
              <br />
              We can expand the reach of our network while providing
              game-changing logistical and operational advantages by
              prioritizing the needs of the companies we work with.
            </p>
            <p className="text-lg text-gray mt-4">
              To learn more, read our latest interview on {" "}
              <a
                target={"_blank"}
                className="font-bold text-[blue]"
                href="https://nyweekly.com/business/islambek-sultanbaev-on-launching-logistics-company-kio-union-and-helping-young-professionals-reach-great-heights-in-the-business-world/"
              >
                New York weekly
              </a>
            </p>
          </div>
          <img src={image} className="mt-10 lg:pl-10 lg:-mt-10" />
        </div>
      </Container>
      <div className="z-[1] w-[400px] h-[400px] lg:w-[1000px] lg:h-[1000px] lg:-left-[340px] lg:-bottom-96 bg-orange rounded-md rotate absolute -bottom-52 rotate-45 right-24"></div>
    </div>
  );
};

export default Founder;
