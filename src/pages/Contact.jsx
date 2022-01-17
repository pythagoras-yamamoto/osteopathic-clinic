import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ContactContainer } from "../components/container/ContactContainer";
// import { EmbedTwitter } from "../components/EmbedTwiter";
// import { ScrollReveal } from "../components/container/ScrollReveal";
import Image from "../public/roader2.jpg";

export const Contact = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      {/* <ScrollReveal move="top"> */}
      <ContactContainer title="お問い合わせ" />
      {/* <EmbedTwitter /> */}
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
