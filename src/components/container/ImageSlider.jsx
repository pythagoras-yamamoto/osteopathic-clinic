// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img from "../../public/clinic-image.jpeg";

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
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
      </Slider>
    </ImgWrapper>
  );
};

const SImage = styled.img`
  width: 90vw;
  height: auto;
  box-shadow: 0px 5px 0 rgb(0 0 0 / 15%);
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
          <SImage src={Img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <SImage src={Img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <SImage src={Img} alt="" />
        </SwiperSlide>
      </Swiper>
    </ImgWrapper>
  );
};
