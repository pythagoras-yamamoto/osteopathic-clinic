import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { ContainerB } from "../components/container/ContainerB";
import { SwiperImageSlider } from "../components/container/ImageSlider";
import { ScrollReveal } from "../components/container/ScrollReveal";
import { Footer } from "../components/footer/Footer";

import Image from "../public/clinic-image.jpeg";

export const Home = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <STitleOnImage>Meme</STitleOnImage>
        <STextOnImage>
          <p>女性施術者による女性専用サロンです。</p>
          <p>
            それぞれのお身体,体調に合わせたオーダーメイドの鍼灸施術を行います
          </p>
        </STextOnImage>
        {/* <ImageSlider></ImageSlider> */}
        <SwiperImageSlider />
        {/* <SImage src={Image} alt="" /> */}
      </SImageWraper>
      <ScrollReveal move="top">
        <ContainerA
          title={"コンセプト"}
          text={
            "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにこんにちはこんにちはこんにちはこんにちは"
          }
          image={Image}
          shadowColor={"#de8787"}
        />
        <ContainerA
          title={"料金・メニュー"}
          text={
            "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちははこんにちはこんにちはこんにちはこんにちはこんにちはこんにちこんにちはこんにちは"
          }
          image={Image}
          widthRatio={60}
        />
        <ContainerB title={"アクセス"} image={Image} widthRatio={47} />
      </ScrollReveal>
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
  z-index: 10;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 600px) {
  }
`;

const STextOnImage = styled.div`
  position: absolute;
  top: 50%;
  color: white;
  z-index: 10;
  margin-left: 15%;
  text-align: left;
  font-size: 20px;
  width: 70%;
  overflow-wrap: keep-all;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
