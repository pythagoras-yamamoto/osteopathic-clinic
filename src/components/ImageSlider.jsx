import React from "react";
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    autoplay: true
  };

  return (
    <ImgWrapper>
      <Slider {...settings}>
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
        <SImage src={Img} alt="" />
      </Slider>
    </ImgWrapper>
  );
};

const SImage = styled.img`
  width: 100vw;
  height: auto;
  box-shadow: 0px 5px 0 rgb(0 0 0 / 15%);
`;

// slickの仕様で右側に余白ができる。それを解消するために使用したスタイリング。
const ImgWrapper = styled.div`
  overflow: hidden;
`;
