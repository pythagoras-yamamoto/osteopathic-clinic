import styled from "styled-components";
import React from "react";
import IMG from "../../public/noun_Calendar_2567614-removebg-preview.png";

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

const SContainerWrapper = styled.div`
  margin: 100px 50px;
  padding: 100px 0;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const STitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${IMG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 150px;
  opacity: 0.4;
  /* background-image: url(${(props) =>
    props.titleImage ? props.titleImage : IMG}) */

`;

const STitle = styled.p`
  color: black;
  font-size: 30px;
`;

const SContentsWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 100px;
  width: 80vw;
`;

const SText = styled.div`
  text-align: left;
  font-size: 20px;
  overflow-wrap: break-word;
  white-space: pre-wrap;

  width: ${(props) => (props.width ? 90 - props.width : 50)}%;
`;

const SImage = styled.img`
  width: ${(props) => (props.width ? props.width : 40)}%;
  box-shadow: 15px -15px ${(props) => (props.shadowColor ? props.shadowColor : "#deb887")};
`;
