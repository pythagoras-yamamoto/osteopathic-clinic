import React from "react";
import styled from "styled-components";

import IMG from "../../public/LINE_ALBUM_clinic_220301_0_1.jpg";
import { Calendar } from "./Calendar";
import { LinkContactButton } from "./LinkContactButton";

export const ContainerC = (props) => {
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
          <SCalendar>
            <Calendar />
          </SCalendar>
          <LinkContactButton textColor="ご予約はこちら" />
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

  @media screen and (max-width: 600px) {
    margin-right: 0;
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
  width: 100%;
`;

const SubTitle = styled.p`
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  color: rgb(0, 116, 127);
  background: rgba(255, 249, 238, 0.5);
  height: 150px;
  width: 300px;

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
