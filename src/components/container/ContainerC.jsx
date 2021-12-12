import React from "react";
import styled from "styled-components";

import IMG from "../../public/title-back-image.png";
import { Calendar } from "./Calendar";

export const ContainerC = (props) => {
  const {
    title, //title　: Item name
    titleImage,
    image, //, image : Img part of the item
    widthRatio, //ImageWidth : Change the width of the image as you like, but Using %.
    shadowColor
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitleWrapper titleImage={titleImage}>
          <STitle>{title}</STitle>
        </STitleWrapper>
        <SContentsWrapeer>
          <SCalendar width={widthRatio}>
            <Calendar />
          </SCalendar>
          <SImage
            shadowColor={shadowColor}
            src={image}
            width={widthRatio}
            alt=""
          ></SImage>
        </SContentsWrapeer>
      </SContainerWrapper>
    </>
  );
};

export const SContainerWrapper = styled.div`
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 90vw;
  padding: 50px 0;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    padding: 50px 0;
  }
`;

export const STitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${IMG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
  margin-right: 5%;
`;

const STitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: rgb(0, 116, 127);
  background: rgba(255, 255, 255, 0.5);
  height: 100px;
  width: 300px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const SContentsWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 100px;
  width: 80vw;
`;

const SCalendar = styled.div`
  width: ${(props) => (props.width ? 95 - props.width : 55)}%;
`;

const SImage = styled.img`
  width: ${(props) => (props.width ? props.width : 40)}%;
  /* box-shadow: 15px -15px ${(props) =>
    props.shadowColor ? props.shadowColor : "#deb887"}; */
`;

const SubTitle = styled.p`
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: rgb(0, 116, 127);
  background: rgba(255, 255, 255, 0.5);
  height: 150px;
  width: 300px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;