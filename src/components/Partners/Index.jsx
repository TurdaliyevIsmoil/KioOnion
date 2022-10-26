import React from "react";
import partnersImage from "../../images/partners.png";
import Container from "../ui/Container/Index";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Partners = () => {
  return (
    <div className="bg-lightGray px-0" id="partners">
      <Container className={" py-4 lg:py-0"}>
        <img
          src={partnersImage}
          className="min-w-full h-32 lg:h-auto object-cover hidden lg:block"
          alt=""
        />
        <div className="lg:hidden">
          <Splide
            className="flex items-center"
            options={{
              rewind: true,
              gap: "1rem",
              perPage: 3,
              autoplay: true,
              cover: false,
              speed: 1000,
              type: "loop",
              arrows: false,
              pagination: false,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <img
                src="/images/p1.png"
                className="h-full w-full"
                alt="Image 1"
              />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p2.png" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p3.png" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p4.png" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p5.png" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p6.png" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p7.png" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p8.png" alt="Image 1" />
            </SplideSlide>
            <SplideSlide>
              <img src="/images/p9.png" alt="Image 1" />
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
