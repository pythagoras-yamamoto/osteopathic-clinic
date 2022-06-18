import React from "react";
import styled from "styled-components";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { PriceTableContainer } from "../components/container/PriceTableContainer";
import { Footer } from "../components/footer/Footer";
import Image from "../public/Salon_scene.jpg";

export const MenuPrice = () => {
  return (
    <>
      <SEO title={"SALON MEME Menu&Priceページ"} />
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <PriceTableContainer title={"Menu & Price"} titleImage={Image} />
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
