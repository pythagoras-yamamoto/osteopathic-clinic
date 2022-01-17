import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { ContainerB } from "../components/container/ContainerB";
import { SwiperImageSlider } from "../components/container/ImageSlider";
// import { ScrollReveal } from "../components/container/ScrollReveal";
import { Footer } from "../components/footer/Footer";

import Image from "../public/concept.jpg";
import titleImage from "../public/calendar.jpeg";

export const Home = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <STitleOnImage>Meme</STitleOnImage>
        <STextOnImage>
          <p>女性施術者による女性専用サロンです。</p>
          <p>
            それぞれのお身体、体調に合わせたオーダーメイドの施術を行います。
          </p>
        </STextOnImage>
        {/* <ImageSlider></ImageSlider> */}
        <SwiperImageSlider />
        {/* <SImage src={Image} alt="" /> */}
      </SImageWraper>
      {/* <ScrollReveal move="top"> */}
      <ContainerA
        titleImage={titleImage}
        title={"Concept"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#FFFAFA"}
      />
      <ContainerA
        title={"Menu & Price"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちははこんにちはこんにちはこんにちはこんにちはこんにちはこんにちこんにちはこんにちは"
        }
        image={Image}
        // widthRatio={60}
      />
      <ContainerB title={"Access"} widthRatio={0} />
      {/* </ScrollReveal> */}
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
  font-family: "Satisfy";
  top: 20%;
  font-size: 120px;
  color: white;
  margin-left: 20%;
  z-index: 10;

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }

  @media screen and (max-width: 600px) {
  }
`;

const STextOnImage = styled.div`
  position: absolute;
  top: 50%;
  color: white;
  z-index: 10;
  margin-left: 20%;
  text-align: left;
  font-size: 20px;
  font-family: "Lato";
  font-weight: 700;
  width: 70%;
  overflow-wrap: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    font-weight: 500;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
