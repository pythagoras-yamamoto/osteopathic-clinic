import React from "react";
import styled from "styled-components";
import Image from "next/image";

import { SEO } from "../components/container/SEO";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { ContactContainer } from "../components/container/ContactContainer";
import Img from "../public/LINE_ALBUM_clinic_220301_4.jpg";

export default function Contact() {
  return (
    <>
      <SEO title={"SALON MEME Contactページ"} />
      <Header />
      <SImageWrapper>
        <SImage>
          <Image src={Img} height={250} objectFit="cover" alt="" />
        </SImage>
      </SImageWrapper>
      <ContactContainer title="Contact" />
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
