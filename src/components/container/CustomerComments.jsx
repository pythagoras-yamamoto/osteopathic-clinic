import React from "react";
import styled from "styled-components";

import { CustomerComment } from "./CustomerComment";

import IMG from "../../public/LINE_ALBUM_clinic_220301_0_1.jpg";

export const CustomerComments = (props) => {
  const {
    title, //title　: Item name
    titleImage,
    widthRatio, //ImageWidth : Change the width of the image as you like, but Using %.
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitleWrapper titleImage={titleImage}>
          <STitle>{title}</STitle>
        </STitleWrapper>
        <SContentsWrapeer>
          <SCustomerComment width={widthRatio}>
            <CustomerComment age={"20代"} comment={ "身体のハリがとれ身体が軽くなりました。身体の状態を説明していただけて自分の身体の様子を知ることが出来ました。" }/>
            <CustomerComment age={"40代"} comment={ "目のあたりがスッキリし、モヤが晴れました。" }/>
            <CustomerComment age={"50代"} comment={ "身体の緊張感が抜けた感じがし、施術後は眠くなり夜はよく眠れました。次の日は目がスッキリし身体も軽くなりました。" }/>
          </SCustomerComment>
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
  border-radius: 50px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
    padding: 50px 0;
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    margin-top: 0;
    margin-bottom: 0;
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
  background: rgba(255, 249, 238, 0.5);
  height: 100px;
  width: 300px;
  font-family: "Yomogi";

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const SContentsWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 60px;
  width: 80vw;
`;

const SCustomerComment = styled.div`
  /* width: ${(props) => (props.width ? 95 - props.width : 55)}%; */
  width: 100%;

  @media screen and (max-width: 768px) {
    /* width: 100%; */
  }
`;
