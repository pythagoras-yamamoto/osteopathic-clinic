import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { Footer } from "../components/footer/Footer";
import Image from "../public/clinic-image.jpeg";
import { ScrollReveal } from "../components/container/ScrollReveal";

export const AboutUs = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ScrollReveal move="top">
        <ContainerA
          title={"ご挨拶"}
          text={
            "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちははこんにちはこんにちはこんにちはこんにちは"
          }
          image={Image}
          shadowColor={"#de8787"}
        />
        <ContainerA
          title={"施術実績"}
          text={
            "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"
          }
          image={Image}
          widthRatio={50}
        />
      </ScrollReveal>
      <Footer />
    </>
  );
};

const SImageWraper = styled.div`
  position: relative;
`;

const SImage = styled.img`
  object-fit: cover;
  width: 100vw;
  height: 300px;
`;
