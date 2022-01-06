import React from "react";
import styled from "styled-components";

export const PriceTableElement = (props) => {
  const { title, price, min, menu, text } = props;
  return (
    <Pricecard>
      <Title>{title}</Title>
      <Wrapper>
        <Price>
          <span>¥ </span>
          {price}
        </Price>
        <SubText>{min}</SubText>
        <SubText>{menu}</SubText>
        <Text>{text}</Text>
        {/* <a href="">申し込み</a> */}
      </Wrapper>
    </Pricecard>
  );
};

const Pricecard = styled.li`
  flex: 0 0 33%;
  text-align: center;
  border: 1px solid #eee;
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin: 0 auto 3em;
  min-width: 300px;
  max-width: 600px;
  min-height: 450px;
`;

const Title = styled.h3`
  background: #a2bc10;
  color: #fff;
  padding: 10px;
`;

const Price = styled.h4`
  font-size: 250%;
  margin: 0 auto;
  padding-top: 30px;

  span {
    font-size: 100%;
  }
`;

const SubText = styled.p`
  font-weight: 600;
  padding: 10px 0;
`;

const Text = styled.p`
  padding: 20px 0;
  text-align: left;
`;

const Wrapper = styled.div`
  padding: 0 20px;
`;
