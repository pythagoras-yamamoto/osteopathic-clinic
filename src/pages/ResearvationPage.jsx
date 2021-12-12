import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerC } from "../components/container/ContainerC";
import { Footer } from "../components/footer/Footer";
// import { Calendar } from "../components/Calendar";
import Image from "../public/clinic-image.jpeg";

export const ResearvationPage = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerC
        title={"予約状況"}
        text={"こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"}
        image={Image}
        widthRatio={100}
      />
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
