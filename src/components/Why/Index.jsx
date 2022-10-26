import React from "react";
import Container from "../ui/Container/Index";
import map from "../../images/map.svg";
import CarIcon from "../../svg/car";
import ClockIcon from "./../../svg/clock";
import StarIcon from "./../../svg/star";

const Why = () => {
  return (
    <div className="relative">
      <Container className={"lg:mb-16 mb-12"}>
        <h1 className="text-[40px] mb-10 lg:text-[86px] lg:mb-24">
          WHY KIO UNION?
        </h1>
        <div className="flex flex-col gap-7 pr-10 lg:grid lg:grid-cols-2 lg:gap-12">
          <Reason
            title={"ON-SITE WAREHOUSES."}
            paragraph="At five major facilities, which allows us to offer regional deliveries."
            count={"01"}
            className="lg:order-1"
          />
          <Reason
            title={"TRAINED DRIVERS."}
            paragraph="Our drivers are highly experienced and trained and we provide them with the means and assistance to get the shipments delivered in a safe and timely fashion"
            count={"02"}
            className="lg:order-3"
          />
          <Reason
            title={"EXCEPTIONAL DISPATCHING."}
            paragraph="Our dispatchers are available any time you need them."
            count={"03"}
            className="lg:order-5"
          />
          <Reason
            title={"QUALITY EQUIPMENT."}
            paragraph="Most of our trucks and equipment are less than 2 years old, with none older than 4 years. This ensures reliable transportation and reduced risk for breakdowns."
            count={"04"}
            className="lg:order-2"
          />
          <Reason
            title={"DRIVER SAFETY."}
            paragraph="All drivers must comply with the Electronic Logging Device (ELD) policies to ensure roads are safe for them and all other drivers."
            count={"05"}
            className="lg:order-4"
          />
        </div>
        <img src={map} alt="" />
        <div className="grid grid-cols-1 lg:gap-10 gap-5 lg:grid-cols-3 lg:-mt-40">
          <WhyItem
            count="90%"
            title="on-time </br>delivery rate"
            icon={<CarIcon className="flex-[0_0_70px]" />}
          />
          <WhyItem
            count="24"
            title="service 24 hours </br> available"
            icon={<ClockIcon className="flex-[0_0_70px]" />}
          />
          <WhyItem
            count="14"
            title="type of services"
            icon={<StarIcon className="flex-[0_0_70px]" />}
          />
        </div>
      </Container>
      <div className="w-48 h-48 rounded bg-orange rotate-45 absolute bottom-[960px] -right-32 lg:-right-[500px] lg:bottom-[600px] lg:w-[600px] lg:h-[600px] lg:rounded-xl"></div>
    </div>
  );
};

export default Why;

function Count({ title }) {
  return (
    <div
      className="w-10 h-10 flex items-center justify-center rounded-full text-white font-bold lg:w-24 lg:h-24 lg:flex-[0_0_96px] lg:text-[50px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 116, 0, 0.2) 0%, rgba(255, 255, 255, 0.2) 54.69%, rgba(255, 0, 0, 0.2) 100%), #FF7400",
      }}
    >
      {title}
    </div>
  );
}

function Reason({ title, paragraph, count, className }) {
  return (
    <div className={"flex flex-col gap-3 lg:flex-row lg:gap-10 " + className}>
      <Count title={count} />
      <div className="flex flex-col gap-3 lg:gap-5">
        <h3 className="text-xl font-bold lg:text-[24px]">{title}</h3>
        <p className="text-[15px] lg:text-xl">{paragraph}</p>
      </div>
    </div>
  );
}

function WhyItem({ icon, count, title }) {
  return (
    <div
      className="flex why-item flex-col gap-2 text-orange p-8 bg-white rounded-md hover:bg-orange duration-300 hover:-translate-y-5 hover:text-white hover:child:text-white child:duration-300 cursor-pointer"
      style={{
        border: "0.666905px solid #EDEDED",
        boxShadow: "5.33524px 5.33524px 16.0057px rgba(186, 222, 255, 0.25)",
      }}
    >
      <h2 className="text-[50px] font-bold">{count}</h2>
      <div className="flex justify-between gap-4">
        <p
          className="text-[20px] lg:text-[25px] duration-300 text-textColor"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {icon}
      </div>
    </div>
  );
}
