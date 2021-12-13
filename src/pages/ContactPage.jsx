import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { Footer } from "../components/footer/Footer";
import { ContactForm } from "../components/container/ContactForm";
// import { EmbedTwitter } from "../components/EmbedTwiter";
import { ScrollReveal } from "../components/container/ScrollReveal";
import Image from "../public/clinic-image.jpeg";

export const ContactPage = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ScrollReveal move="top">
        <ContactForm />
        <ContainerA
          title={"お問い合わせ"}
          text={
            "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
          }
          image={Image}
          shadowColor={"#de8787"}
        />
        {/* <EmbedTwitter /> */}
      </ScrollReveal>
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
