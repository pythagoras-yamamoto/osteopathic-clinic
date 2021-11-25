import styled from "styled-components";

import { HeaderMenu } from "../components/HeaderMenu.jsx";
import { ContainerA } from "../components/ContainerA";
import { FooterMenu } from "../components/FooterMenu.jsx";
import Image from "../../public/clinic-image.jpeg";

export const ResearvationPage = () => {
  return (
    <>
      <HeaderMenu />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerA
        title={"タイトル"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <ContainerA
        title={"ご案内"}
        text={"こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"}
        image={Image}
        widthRatio={50}
      />
      <FooterMenu />
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
