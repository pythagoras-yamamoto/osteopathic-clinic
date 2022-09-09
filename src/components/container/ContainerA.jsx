import React from 'react';
import styled from 'styled-components';
import IMG from '../../public/LINE_ALBUM_clinic_220301_0_1.jpg';
import { LinkContactButton } from './LinkContactButton';

export const ContainerA = (props) => {
  const {
    title, //title : Item name
    text,
    image, //, image : Img part of the item
    widthRatio, //ImageWidth : Change the width of the image as you like, but Using %.
    shadowColor
  } = props;

  return (
    <>
      <SContainerWrapper>
        <STitleWrapper titleImage={IMG}>
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
        <LinkContactButton />
      </SContainerWrapper>
    </>
  );
};

export const SContainerWrapper = styled.div`
  letter-spacing: 0.2em;
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
  font-weight: 900;
  font-family: 'Yomogi';
  font-size: 1.8rem;
  color: rgb(0, 116, 127);
  background: rgba(255, 249, 238, 0.5);
  height: 100px;
  width: 300px;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
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
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 600px) {
    width: 90vw;
    margin: 25px;
  }
`;

const SText = styled.div`
  text-align: left;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Yomogi';
  overflow-wrap: break-word;
  white-space: pre-wrap;
  letter-spacing: 0.2em;
  line-height: 2;
  width: ${(props) => (props.width ? 95 - props.width : 55)}%;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    letter-spacing: 0.12em;
    width: 100%;
    margin-bottom: 100px;
  }
`;

const SImage = styled.img`
  width: ${(props) => (props.width ? props.width : 40)}%;
  box-shadow: 15px -15px ${(props) => (props.shadowColor ? props.shadowColor : '#FFF0F5')};
  max-width: 350px;
  max-height: 400px;
  height: auto;

  @media screen and (max-width: 768px) {
    max-width: initial;
    max-height: initial;
    height: auto;
    font-size: 18px;
    width: 100%;
  }
`;
