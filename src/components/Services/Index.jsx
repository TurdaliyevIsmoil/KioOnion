import React from "react";
import Container from "../ui/Container/Index";
import HouseIcon from "./../../svg/house";
import BuildingIcon from "./../../svg/building";
import ResidentalIcon from "./../../svg/residental";
import EmergencyIcon from "./../../svg/emergency";

const Services = () => {
  return (
    <div className="py-10 lg:py-20" id="services">
      <Container>
        <h1 className="text-[40px] mb-10 lg:mb-20 lg:text-[86px]">
          Our Services
        </h1>
      </Container>
      <div className="flex flex-col px-10 gap-6 lg:grid lg:grid-cols-4 lg:max-w-screen-2xl lg:mx-auto">
        <Service
          title={"GENERAL FREIGHT"}
          icon={<HouseIcon className={`text-orange w-16 lg:w-18`} />}
          paragraph="Company offers dry van truckload, refrigreated truckload, flatbed and high value shipments over 48 states."
        />
        <Service
          title={"CONSULTING"}
          icon={<BuildingIcon className="text-orange w-16 lg:w-18" />}
          paragraph="Business launching from scratch to pro level, Safety documentations and audit."
        />
        <Service
          title={"EQUIPMENT"}
          icon={<ResidentalIcon className="text-orange w-16 lg:w-18" />}
          paragraph="Help small businesses to find the best equipements with the wide inventory of modern trucks and trailers from dealaerships."
        />
        <Service
          title={"SERVICE"}
          icon={<EmergencyIcon className="text-orange w-16 lg:w-18" />}
          paragraph="Logistics app development, website and platforms."
        />
      </div>
    </div>
  );
};

export default Services;

function Service({ icon, title, paragraph }) {
  return (
    <div
      className="shadow rounded-md bg-white flex flex-col items-center gap-4 p-8 pb-12 lg:pb-16 hover:bg-orange text-textColor duration-300 hover:text-white child:hover:text-white child:duration-300 cursor-pointer hover:-translate-y-4"
      style={{
        boxShadow: "5.19577px 5.19577px 15.5873px rgba(186, 222, 255, 0.25)",
        border: "0.649471px solid #EDEDED",
      }}
    >
      {icon}
      <h2 className="font-bold text-[15px] lg:text-[20px]">{title}</h2>
      <p className="text-[12px] text-center lg:text-[15px]">{paragraph}</p>
    </div>
  );
}
