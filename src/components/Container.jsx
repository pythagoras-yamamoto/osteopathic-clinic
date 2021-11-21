import styled from "styled-components";
import React from "react";
import IMG from "../../public/clinic-image2.jpeg";

export const Container = (props) => {
  const { title, contents, image } = props;
  return (
    <>
      <STitle>{title}</STitle>
      <div>
        <SContent>{contents}</SContent>
        <SImage src={image} alt=""></SImage>
      </div>
    </>
  );
};

const STitle = styled.div`
  width: 120px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  background-image: url(${IMG});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 20px;
  font-size: 28px;
`;

const SContent = styled.p`
  width: 60%;
  text-align: left;
  margin: 20px;
  overflow-wrap: break-word;
  font-size: 24px;
  white-space: pre-wrap;
`;

const SImage = styled.img`
  width: 20vw;
  margin-left: 70%;
`;
