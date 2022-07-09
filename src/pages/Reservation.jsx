import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { ContainerC } from "../components/container/ContainerC";
import { Footer } from "../components/footer/Footer";

import Img from "../public/LINE_ALBUM_clinic_220301_7.jpg";

export default function Reservation() {
  return (
    <>
      <SEO title={"SALON MEME Reservationページ"} />
      <Header />
      <SImageWrapper>
        <SImage>
          <Image src={Img} alt="" />
        </SImage>
      </SImageWrapper>
      <ContainerC
        title={"Reserve"}
        text={"こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"}
        image={Img}
        widthRatio={100}
      />
      <Footer />
    </>
  );
}

const SImageWrapper = styled.div`
  position: relative;
`;

const SImage = styled.div`
  object-fit: cover;
  width: 100vw;
  height: 200px;

  @media screen and (max-width: 600px) {
    height: 130px;
  }
`;