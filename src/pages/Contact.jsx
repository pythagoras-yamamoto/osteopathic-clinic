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
      <SImage>
        <Image src={Img} layout="fill" objectFit="cover" alt="" />
      </SImage>
      <ContactContainer title="Contact" />
      <Footer />
    </>
  );
}

const SImage = styled.div`
  position: relative;
  object-fit: cover;
  width: 100vw;
  height: 200px;

  @media screen and (max-width: 600px) {
    height: 130px;
  }
`;
