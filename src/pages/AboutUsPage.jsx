import styled from "styled-components";

import { Navbar } from "../components/Navbar";
import { ContainerA } from "../components/ContainerA";
import { Footer } from "../components/Footer";
import Image from "../../public/clinic-image.jpeg";

export const AboutUsPage = () => {
  return (
    <>
      <Navbar />
      <SImageWraper>
        <SImage src={Image} alt="" />
      </SImageWraper>
      <ContainerA
        title={"ご挨拶"}
        text={
          "こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちははこんにちはこんにちはこんにちはこんにちは"
        }
        image={Image}
        shadowColor={"#de8787"}
      />
      <ContainerA
        title={"施術実績"}
        text={"こんにちは\n根津です。こんにちはこんにちはこんにちはこんにちは"}
        image={Image}
        widthRatio={50}
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
