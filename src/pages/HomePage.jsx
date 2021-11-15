import styled from "styled-components";

import { HeaderMenu } from "../components/HeaderMenu.jsx";
import { FooterMenu } from "../components/FooterMenu.jsx";
import Image from "../../public/clinic-image.jpeg";

export const HomePage = () => {
  return (
    <>
      <HeaderMenu />
      <SClinicImage>
        <STitleOnClinicImage>根津整体院</STitleOnClinicImage>
        <img src={Image} alt="" height={900} width={1440} />
      </SClinicImage>
      <FooterMenu />
    </>
  );
};

const SClinicImage = styled.div`
  position: relative;
`;

const STitleOnClinicImage = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
/*
const STextOnClinicImage = styled.p`
  position: absolute;
  top: 60%;
  text-align: center;
  font-size: 20px;
  color: white;
`;*/
