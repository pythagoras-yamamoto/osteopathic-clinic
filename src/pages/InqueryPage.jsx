import styled from "styled-components";
import Iframe from "react-iframe";

import { HeaderMenu } from "../components/HeaderMenu.jsx";
import { ContainerA } from "../components/ContainerA";
import { FooterMenu } from "../components/FooterMenu.jsx";
import Image from "../../public/clinic-image.jpeg";

export const InqueryPage = () => {
  return (
    <>
      <HeaderMenu />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerA
        title={"お問い合わせ"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <Iframe
        id="page1"
        url="https://www.youtube.com/watch?v=RdoMq8SY8RM"
        position="absolute"
        width="80%"
        height="90%"
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
