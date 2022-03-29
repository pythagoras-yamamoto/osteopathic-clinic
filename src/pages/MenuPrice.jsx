import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { PriceTableContainer } from "../components/container/PriceTableContainer";
import { Footer } from "../components/footer/Footer";
// import { Calendar } from "../components/Calendar";
// import { ScrollReveal } from "../components/container/ScrollReveal";
import Image from "../public/LINE_ALBUM_clinic_220301_0.jpg";

export const MenuPrice = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      {/* <ScrollReveal move="top"> */}
      <PriceTableContainer title={"Menu & Price"} titleImage={Image} />
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
