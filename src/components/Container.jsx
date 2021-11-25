import styled from "styled-components";
import React from "react";
import IMG from "../../public/clinic-image2.jpeg";

export const Container = (props) => {
  const {
    title, //title　: Item name
    contents, //contents : Text part of the item
    image, //, image : Img part of the item
    widthRatio
    //ImageWidth,  ImageWidth : Change the width of the image as you like, but Using %.
    //ImageHeight ImageWidth : Change the height of the image as you like, but Using %.
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitle>{title}</STitle>
        <SContentsWrapeer>
          <SText width={widthRatio}>{contents}</SText>
          <SImage
            src={image}
            //width={`${ImageWidth}%`}
            //height={`${ImageHeight}%`}
            alt="No Image"
            width={CalWidthRatio(widthRatio)}
          />
        </SContentsWrapeer>
      </SContainerWrapper>
    </>
  );
};

const SContainerWrapper = styled.div`
  margin: 50px;
`;

const STitle = styled.p`
  height: 100px;
  margin: 0 auto;
  background-image: url(${IMG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 20px;
  font-size: 30px;
`;

const SContentsWrapeer = styled.div`
  margin: auto;
  box-sizing: border-box;
  width: 80vw;
  max-height: 500px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const SText = styled.div`
  box-sizing: border-box;
  width: ${(props) => (props.width ? props.width : 70)}%;
  text-align: left;
  font-size: 25px;
`;

const SImage = styled.img`
  width: ${(props) => (props.width ? props.width : 30)}%;
`;

const CalWidthRatio = (widthRatio) => {
  if (widthRatio === null) {
    return 70;
  } else {
    return 100 - widthRatio;
  }
};
