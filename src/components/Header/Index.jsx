import React, { useEffect } from "react";
import Container from "../ui/Container/Index";
import backgroudImage from "../../images/header-banner.png";
import Navbar from "./../Navbar/Index";
import video from "../../video/video.mp4";

const Header = () => {
  useEffect(() => {
    document.getElementById("video").play();
  }, []);
  return (
    <div
      id="home"
      className="w-full md:min-h-screen overflow-hidden min-h-[600px] bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${backgroudImage})` }}
    >
      <div className="absolute w-full lg:h-full h-[600px] object-cover">
        <video
          className="w-full lg:h-full h-[600px] object-cover overflow-hidden"
          autoPlay={true}
          id="video"
          muted={true}
          poster={backgroudImage}
          preload="auto"
          loop={true}
          playsInline
        >
          <source src={video} poster={backgroudImage} type="video/mp4" />
        </video>
      </div>
      <div className="absolute w-full bg-[#000a]  lg:h-full h-[600px] object-cover"></div>
      <Navbar />
      <Container
        className={
          "grow flex text-white items-start lg:gap-14 gap-6 leading-relaxed flex-col justify-center relative pb-32 w-full"
        }
      >
        <h1 className="leading-tight text-[40px] lg:text-[86px] text-white">
          FOCUS <br /> ON EXCELLENCE
        </h1>
        <p className="lg:text-2xl text-[15px] max-w-md">
          We adapt to our customers' and the trucking industry's ever-changing
          needs.
        </p>
        <a
          href="#contact"
          className="rotate-90 hidden lg:block absolute left-1/2 bottom-12 cursor-pointer hover:bottom-14 duration-150"
        >
          SCROLL
        </a>
      </Container>
    </div>
  );
};

export default Header;
