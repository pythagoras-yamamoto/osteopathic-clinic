import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { ContainerA } from "../components/ContainerA";
import { ContainerC } from "../components/ContainerC";
import { Footer } from "../components/Footer";
// import { Calendar } from "../components/Calendar";
import Image from "../../public/clinic-image.jpeg";

export const ResearvationPage = () => {
  return (
    <>
      <Navbar />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerA
        title={"料金メニュー"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <ContainerC
        title={"予約状況"}
        text={"こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"}
        image={Image}
        widthRatio={100}
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
