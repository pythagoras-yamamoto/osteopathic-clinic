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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <SImage src={Img} alt="" />
      <SImage src={Img} alt="" />
      <SImage src={Img} alt="" />
    </Slider>
  );
};

const SImage = styled.img`
  width: 100vw;
  height: auto;
`;

// import "swiper/swiper.min.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore, { Navigation } from "swiper";
// //import "swiper/components/navigation/navigation.min.css";

// SwiperCore.use([Navigation]);

// export const ImageSwiper = () => {
//   return (
//     <>
//       <Swiper
//         spaceBetween={50}
//         slidesPerView={1}
//         // initialSlide={publi}
//         loop={true}
//         navigation={{
//           pevEl: ".button_prev",
//           nextEl: ".button_next"
//         }}
//       >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//       </Swiper>
//     </>
//   );
// };
