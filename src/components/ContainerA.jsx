import styled from "styled-components";
import React from "react";
import IMG from "../../public/clinic-image.jpeg";

export const ContainerA = (props) => {
  const {
    title, //title　: Item name
    contents, //contents : Text part of the item
    image, //, image : Img part of the item
    widthRatio //ImageWidth : Change the width of the image as you like, but Using %.
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitleWrapper>
          <STitle>{title}</STitle>
        </STitleWrapper>
        <SContentsWrapeer>
          <SText>{contents}</SText>
          <SImage src={image} alt="No Image" width={widthRatio} />
        </SContentsWrapeer>
      </SContainerWrapper>
    </>
  );
};

const SContainerWrapper = styled.div`
  margin: 50px;
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
`;

const STitle = styled.p`
  /* margin-top: 20px; */
  font-size: 30px;
`;

const SContentsWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 50px;
  width: 80vw;
`;

const SText = styled.div`
  text-align: left;
  font-size: 25px;
`;

const SImage = styled.img`
  width: ${(props) => (props.width ? props.width : 30)}%;
`;
