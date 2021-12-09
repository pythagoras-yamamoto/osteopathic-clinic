import React from "react";
import styled from "styled-components";

import { Header } from "../components/Header";
import { ContainerA } from "../components/ContainerA";
import { ContainerB } from "../components/ContainerB";
import { Footer } from "../components/Footer";
// import { ImageSlider, SwiperImageSlider } from "../components/ImageSlider";

import Image from "../public/clinic-image.jpeg";

export const HomePage = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <STitleOnImage>根津整体院</STitleOnImage>
        <STextOnImage>
          <p>女性施術者による女性専用サロンです。</p>
          <p>
            それぞれのお身体,体調に合わせたオーダーメイドの鍼灸施術を行います
          </p>
        </STextOnImage>
        {/* <ImageSlider></ImageSlider> */}
        {/* <SwiperImageSlider /> */}
        {/* <SImage src={Image} alt="" /> */}
      </SImageWraper>
      <ContainerA
        title={"CONCEPT"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <ContainerA
        title={"PRICE & MENU"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちははこんにちはこんにちはこんにちはこんにちはこんにちはこんにちこんにちはこんにちは"
        }
        image={Image}
        widthRatio={60}
      />
      <ContainerB title={"ACCESS"} image={Image} widthRatio={47} />
      <Footer />
    </>
  );
};

const SImageWraper = styled.div`
  position: relative;
  width: 100vw;
  height: auto;
`;

const STitleOnImage = styled.h1`
  position: absolute;
  top: 30%;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-left: 15%;
  z-index: 100;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const STextOnImage = styled.p`
  position: absolute;
  top: 60%;
  color: white;
  z-index: 100;
  margin-left: 15%;
  text-align: left;
  font-size: 20px;
  width: 70%;
  overflow-wrap: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
