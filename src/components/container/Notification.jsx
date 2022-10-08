import React, { Component } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { NotificationList } from '../container/ContentfulNotification';

export const Notification = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    adaptiveHeight: true,
    verticalSwiping: true,

    beforeChange: function (currentSlide, nextSlide) {
      console.log('before change', currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log('after change', currentSlide);
    }
  };

  return (
    <>
      <NotificationTitleWrapper>
        <NotificationTitle>News</NotificationTitle>
      </NotificationTitleWrapper>
      <SliderWrapper>
        {/* <Slider {...settings}> */}
        <NotificationList displayNumber={1} />
        {/* </Slider> */}
      </SliderWrapper>
    </>
  );
};

const NotificationTitle = styled.h2``;

const NotificationTitleWrapper = styled.div`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 700;
  font-family: "Yomogi";
  color: rgb(0, 116, 127);
  padding-bottom: 0.6rem;

  @media screen and (max-width: 600px) {
  font-size: .8rem;
`;

const SliderWrapper = styled.div`
  height: auto;
`;

// const NotificationWrapper = styled.ul`
//   object-fit: cover;
// `;

// const NotificationList = styled.li`
//   display: flex;
//   justify-content: left;
//   align-items: center;
//   text-align: left;
//   font-size: 0.8rem;
//   border-bottom: 1px solid #cfd8dc;
//   font-family: 'Yomogi';
//   line-height: 1.4rem;
//   padding-top: 0.8rem;
//   padding-bottom: 0.8rem;

//   :nth-child(1) {
//     border-top: 1px solid #cfd8dc;
//   }
// `;
