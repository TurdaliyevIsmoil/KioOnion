import React, { useEffect, useState } from "react";
import Container from "./../ui/Container/Index";
import logo from "../../images/logo.png";
import Link from "./Link";
import Button from "./../ui/Button/Index";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [fixed, setfixed] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setfixed(window.scrollY > 400 ? true : false);
      console.log(window.scrollY > 400);
    });
  }, []);
  return (
    <div
      className={`flex items-center justify-between w-full duration-300 ${
        fixed ? "fixed top-0 z-[99] bg-white shadow-md" : ""
      }`}
    >
      <Container
        className={`flex items-center justify-between py-6 duration-300 ${
          fixed ? "text-textColor lg:py-4" : ""
        }`}
      >
        <img src={logo} className={"lg:w-auto w-24 z-[101]"} />
        <menu
          className={`flex lg:flex-row items-center gap-12 text-white font-medium transition-height fixed left-0 top-0 w-screen h-screen flex-col justify-center items-center bg-[#000c] lg:bg-[#0000] lg:backdrop-blur-none lg:static lg:w-auto lg:h-auto z-[100] backdrop-blur-md duration-150 ${
            fixed ? "text-textColor" : ""
          } ${menu ? "top-0 text-[#fff]" : "-top-full h-0 overflow-hidden"} `}
          onClick={() => setmenu(false)}
        >
          <Link link={"#home"}>Home</Link>
          <Link link={"#about"}>About Us</Link>
          <Link link={"#features"}>Features</Link>
          <Link link={"#fordrivers"}>For Drivers</Link>
          <Link link={"#contact"}>Contact Us</Link>
        </menu>
        <a
          href="tel:+998993667639"
          className={`rounded border border-white px-8 py-4 text-base text-white font-bold cursor-pointer hover:bg-orange text-white hidden lg:flex z-[1] ${
            fixed ? "text-orange hover:text-[white]  border-[orange]" : ""
          }`}
        >
          +1 (877) 747-5533
        </a>
        <svg
          width="38"
          height="17"
          viewBox="0 0 38 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="lg:hidden z-[101]"
          onClick={() => setmenu(!menu)}
        >
          <rect width="38" height="3" rx="1.5" fill="#FF7400" />
          <rect y="7" width="38" height="3" rx="1.5" fill="#FF7400" />
          <rect y="14" width="38" height="3" rx="1.5" fill="#FF7400" />
        </svg>
      </Container>
    </div>
  );
};

export default Navbar;
