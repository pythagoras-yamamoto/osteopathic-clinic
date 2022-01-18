import React from "react";
import styled from "styled-components";
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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
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
