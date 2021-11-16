import styled from "styled-components";

import { HeaderMenu } from "../components/HeaderMenu.jsx";
import { FooterMenu } from "../components/FooterMenu.jsx";
import Image from "../../public/clinic-image.jpeg";

export const HomePage = () => {
  return (
    <>
      <HeaderMenu />
      <SContainer>
        <STitleOnClinicImage>根津整体院</STitleOnClinicImage>
        <SImage src={Image} alt="" />
      </SContainer>
      <FooterMenu />
    </>
  );
};

const SContainer = styled.div`
  position: relative;
`;

const STitleOnClinicImage = styled.p`
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 80px;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const SImage = styled.img`
  width: 100vw;
  height: auto;
`;

/*
const STextOnClinicImage = styled.p`
  position: absolute;
  top: 60%;
  text-align: center;
  font-size: 20px;
  color: white;
`;*/
