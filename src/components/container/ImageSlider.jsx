import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from "../../public/LINE_ALBUM_clinic_220301_0_0.jpg";
import Img2 from "../../public/LINE_ALBUM_clinic_220301_1.jpg";
import Img3 from "../../public/LINE_ALBUM_clinic_220301_6.jpg";

export const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
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
      </Slider>
    </ImgWrapper>
  );
};

const SImage = styled.img`
  /* width: 90vw; */
  height: auto;
  max-height: 100vh;
  box-shadow: 0px 6px 10px rgb(0 0 0 / 15%);

  @media screen and (max-width: 600px) {
    width: 100vw;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
`;
