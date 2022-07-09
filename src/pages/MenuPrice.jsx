import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { PriceTableContainer } from "../components/container/PriceTableContainer";
import { Footer } from "../components/footer/Footer";

import Img from "../public/Salon_scene.jpg";

export default function MenuPrice() {
  return (
    <>
      <SEO title={"SALON MEME Menu&Priceページ"} />
      <Header />
      <SImageWrapper>
        <SImage>
          <Image src={Img} height={250} objectFit="cover" alt="" />
        </SImage>
      </SImageWrapper>
      <PriceTableContainer title={"Menu & Price"} titleImage={Img} />
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
