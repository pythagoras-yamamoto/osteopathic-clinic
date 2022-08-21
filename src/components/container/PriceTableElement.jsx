import React from 'react';
import styled from 'styled-components';

export const PriceTableElement = (props) => {
  const { title, price, min, menu, text, titleColor, tag = 'span' } = props;
  return (
    <Pricecard>
      <Title titleColor={titleColor}>{title}</Title>
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
  flex: 0 0 25%;
  text-align: center;
  border: 1px solid #eee;
  padding-bottom: 1rem;
  box-sizing: border-box;
  margin: 0 auto 3em;
  /* min-width: 300px; */
  max-width: 600px;
  min-width: 280px;
  min-height: 800px;
  @media screen and (max-width: 768px) {
    min-height: 0;
  }
`;

const Title = styled.h3`
  background: ${(props) => (props.titleColor ? props.titleColor : '#a2bc10')};
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
  letter-spacing: 0.12em;
  min-height: 50px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Text = styled.p`
  padding: 20px 0;
  text-align: left;
  letter-spacing: 0.12em;
  font-family: 'Yomogi';

  @media screen and (max-width: 768px) {
    /* font-size: 18px; */
    font-size: 16px;
  }
`;

const Wrapper = styled.div`
  padding: 0 20px;
`;
