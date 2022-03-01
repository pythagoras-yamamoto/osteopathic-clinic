import React from "react";
import styled from "styled-components";
import IMG from "../../public/LINE_ALBUM_clinic_220301_0_1.jpg";
import { PriceTable } from "./PriceTable";
import { LinkContactButton } from "./LinkContactButton";

export const PriceTableContainer = (props) => {
  const {
    title, //title　: Item name
    titleImage
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitleWrapper titleImage={titleImage}>
          <STitle>{title}</STitle>
        </STitleWrapper>
        <SContentsWrapeer>
          <PriceTable />
          <LinkContactButton />
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
  padding-top: 50px;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);

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
  background: rgba(255, 255, 255, 0.5);
  height: 100px;
  width: 300px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const SContentsWrapeer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 80px;
  width: 80vw;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;
