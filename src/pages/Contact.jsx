import React from "react";
import styled from "styled-components";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ContactContainer } from "../components/container/ContactContainer";
import Image from "../public/LINE_ALBUM_clinic_220301_4.jpg";

export const Contact = () => {
  return (
    <>
      <SEO title={"SALON MEME Contactページ"} />
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContactContainer title="Contact" />
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
  height: 200px;

  @media screen and (max-width: 600px) {
    height: 130px;
  }
`;
