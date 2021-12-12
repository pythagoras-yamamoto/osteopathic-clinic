import React from "react";
import styled from "styled-components";

import { Header } from "../components/header/Header";
import { ContainerA } from "../components/container/ContainerA";
import { Footer } from "../components/footer/Footer";
// import { Calendar } from "../components/Calendar";
import Image from "../public/clinic-image.jpeg";

export const MenuPricePage = () => {
  return (
    <>
      <Header />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerA
        title={"メニュー"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
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
