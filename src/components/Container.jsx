import styled from "styled-components";
import React from "react";
import IMG from "../../public/clinic-image2.jpeg";

export const Container = (props) => {
  const {
    title, //title　: Item name
    contents, //contents : Text part of the item
    image //, image : Img part of the item
    //ImageWidth,  ImageWidth : Change the width of the image as you like, but Using %.
    //ImageHeight ImageWidth : Change the height of the image as you like, but Using %.
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitle>{title}</STitle>
        <SContentsWrapeer>
          <SText>{contents}</SText>
          <SImage
            src={image}
            //width={`${ImageWidth}%`}
            //height={`${ImageHeight}%`}
            alt="No Image"
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
  margin: auto; /* サンプル用 中央寄せ */
  box-sizing: border-box; /* 罫線も含む長さ      */
  /* background: #fff; BOXの背景色         */
  width: 80vw; /* BOXの幅             */
  max-height: 500px; /* BOXの高さ           */

  /* ▼ FlexBoxの定義 */
  display: flex; /* FlexBox定義         */
  justify-content: space-around; /* 揃えの定義          */
  flex-wrap: wrap; /* 折り返し定義        */
`;

const SText = styled.p`
  box-sizing: border-box; /* 罫線も含む長さ      */
  /* background: #b0c4de; BOXの背景色         */
  width: 60%; /* サンプルBOXの幅     */ /* サンプルBOXの幅     */ /* サンプルBOXの間     */
  text-align: left; 
  /* margin: 20px; */
  /* overflow-wrap: break-word; */
  font-size: 25px; */
  /* white-space: pre-wrap; */
`;

const SImage = styled.img`
  /* margin-left: 70%; */
  box-sizing: border-box; /* 罫線も含む長さ      */
  /* background: #b0c4de; BOXの背景色         */
  width: 40%; /* サンプルBOXの幅     */
`;
