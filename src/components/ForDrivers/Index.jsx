import React, { useState } from "react";
import Container from "./../ui/Container/Index";
import image from "../../images/for-drivers.png";
import Button from "./../ui/Button/Index";
import Modal from "./Modal";

const ForDrivers = () => {
  const [modal, setmodal] = useState(false);
  return (
    <Container className={"mb-10"} id="fordrivers">
      <h1 className="text-[40px] mb-5 lg:text-[86px]">FOR DRIVERS</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col gap-12">
          <p className="text-base lg:text-xl">
            Your office is the open road. The views are breathtaking. The
            windows are open, and the wind is ruffling your hair. You're singing
            along to the music on the radio or listening to an excellent
            audiobook. What an adventure! And what a profession!
          </p>
          <Warning className={"hidden lg:block"} />
        </div>
        <img src={image} alt="Drivers" className="lg:-mt-20" />
        <Warning className={"lg:hidden"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-28">
        <Step
          count="01"
          title="MAKE GREAT MONEY DOING WHAT YOU LOVE!"
          desc="Truck driving is steady pay, long-term job security, and freedom to enjoy the independence that comes with it."
        />
        <Step
          count="02"
          title="THE NEED FOR TRUCK DRIVERS IS INCREASING"
          desc="especially with more consumers buying online. As long as consumers continue to purchase merchandise, there will be a requirement for qualified truck drivers to deliver it to its destination."
        />
        <Step
          count="03"
          title="TRAVELLING OPPORTUNITIES"
          desc="Truck driving is one of the few careers where you get to travel on a regular basis, seeing the countryside every day."
        />
      </div>
      <div className="flex w-full justify-center">
        <Button
          primary
          className={
            "rounded-[8px] lg:w-80 w-60 text-center hover:shadow-md hover:-translate-y-1 duration-300 mx-auto mt-12 lg:py-8 py-5 text-[20px] lg:text-[25px] ml-auto"
          }
          onClick={setmodal}
        >
          APPLY NOW
        </Button>
      </div>
      {modal && <Modal close={setmodal} />}
    </Container>
  );
};

export default ForDrivers;

function Warning({ className }) {
  return (
    <div
      className={
        "border border-orange rounded-md p-4 flex flex-col gap-3 " + className
      }
    >
      <h2 className="text-xl font-bold">BECOME A TRUCK DRIVER</h2>
      <p className="text-base lg:text-xl">
        Are you confined to an office, performing menial and repetitive tasks?
        Are you bored and want more variety? Consider truck driving as a career
        - no college degree required! Your Commercial Drivers License is all you
        need to get started (CDL).
      </p>
    </div>
  );
}

function Step({ count, title, desc }) {
  return (
    <div className="flex flex-col">
      <h1
        className="text-[150px] text-white "
        style={{
          "-webkit-text-stroke-width": "1px",
          "-webkit-text-stroke-color": "#FF7400",
        }}
      >
        {count}
      </h1>
      <h2 className="text-[25px] font-bold">{title}</h2>
      <p className="text-base mt-5">{desc}</p>
    </div>
  );
}
