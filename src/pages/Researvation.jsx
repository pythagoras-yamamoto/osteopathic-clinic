import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerC } from "../components/container/ContainerC";
import { Footer } from "../components/footer/Footer";
// import { ScrollReveal } from "../components/container/ScrollReveal";
// import { Calendar } from "../components/Calendar";
import Image from "../public/roader2.jpg";

export const Researvation = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      {/* <ScrollReveal move="top"> */}
      <ContainerC
        title={"Reserve"}
        text={"こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"}
        image={Image}
        widthRatio={100}
      />
      {/* </ScrollReveal> */}
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
