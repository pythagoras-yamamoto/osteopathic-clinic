import styled from "styled-components";
import React from "react";
import IMG from "../../public/clinic-image2.jpeg";

export const Container = (props) => {
  const {
    title, //title　: Item name
    contents, //contents : Text part of the item
    image, //image : Img part of the item
    ImageWidth, //ImageWidth : Change the width of the image as you like, but Using %.
    ImageHeight //ImageWidth : Change the height of the image as you like, but Using %.
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitle>{title}</STitle>
        <SContent>{contents}</SContent>
        <SImage
          src={image}
          width={`${ImageWidth}%`}
          height={`${ImageHeight}%`}
          alt="No Image"
        ></SImage>
      </SContainerWrapper>
    </>
  );
};

const SContainerWrapper = styled.div`
  margin: 100px;
`;

const STitle = styled.div`
  width: 120px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-image: url(${IMG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 20px;
  font-size: 28px;
`;

const SContent = styled.p`
  width: 60%;
  text-align: left;
  margin: 20px;
  overflow-wrap: break-word;
  font-size: 24px;
  white-space: pre-wrap;
`;

const SImage = styled.img`
  margin-left: 70%;
`;
