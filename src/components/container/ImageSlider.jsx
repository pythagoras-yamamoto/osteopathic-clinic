// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Mousewheel
} from "swiper";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../../public/roader1.jpg";
import Img2 from "../../public/roader2.jpg";
import Img3 from "../../public/roader4.jpg";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <ImgWrapper>
      <Slider {...settings}>
        <SImage src={Img1} alt="" />
        <SImage src={Img2} alt="" />
        <SImage src={Img3} alt="" />
        {/* <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" /> */}
      </Slider>
    </ImgWrapper>
  );
};

const SImage = styled.img`
  width: 90vw;
  height: auto;
  max-height: 100vh;
  box-shadow: 0px 6px 10px rgb(0 0 0 / 15%);

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`;

// slickの仕様で右側に余白ができる。それを解消するために使用したスタイリング。
const ImgWrapper = styled.div`
  overflow: hidden;
`;

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Mousewheel]);

export const SwiperImageSlider = () => {
  return (
    <ImgWrapper>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <SImage src={Img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <SImage src={Img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <SImage src={Img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </ImgWrapper>
  );
};
