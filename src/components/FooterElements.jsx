import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  padding: 80px 60px 10px 60px;
  background: #00747f;
  /* background: radial-gradient(
    circle,
    rgba(92, 39, 251, 1) 0%,
    rgba(112, 71, 247, 1) 100%
  ); */
  @media (max-width: 1000px) {
    padding: 70px 20px 10px 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;

  /* background: red; */
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  margin-bottom: 30px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled(LinkR)`
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
  color: white;

  &:hover {
    opacity: 0.8;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  margin: 40px 0 20px 0;
  /* font-family: "游ゴシック体"; */
`;

export const FooterItem = styled.p`
  font-size: 14px;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 20px;
`;
