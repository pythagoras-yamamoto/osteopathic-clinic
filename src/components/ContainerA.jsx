import styled from "styled-components";
import React from "react";
import IMG from "../../public/title-back-image.png";

export const ContainerA = (props) => {
  const {
    title, //title　: Item name
    titleImage,
    text, //contents : Text part of the item
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
          <SText width={widthRatio}>{text}</SText>
          <SImage
            shadowColor={shadowColor}
            src={image}
            width={widthRatio}
            alt="No Image"
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
    font-size: 20px;
  }
`;

const SContentsWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 80px;
  width: 80vw;
  margin-right: 5%;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const SText = styled.div`
  text-align: left;
  font-size: 1rem;
  overflow-wrap: break-word;
  white-space: pre-wrap;

  width: ${(props) => (props.width ? 95 - props.width : 55)}%;

  @media screen and (max-width: 768px) {
    /* font-size: 18px; */
    width: 100%;
    margin-bottom: 100px;
  }
`;

const SImage = styled.img`
  width: ${(props) => (props.width ? props.width : 40)}%;
  box-shadow: 15px -15px ${(props) => (props.shadowColor ? props.shadowColor : "#deb887")};

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 95%;
  }
`;
