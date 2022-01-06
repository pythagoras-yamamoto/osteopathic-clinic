import React from "react";
import styled from "styled-components";
import { PriceTableElement } from "./PriceTableElement";

export const PriceTable = () => {
  return (
    <SPriceTable>
      <PriceTableElement
        title="コース A"
        price="9,000"
        min="/ 90min"
        menu="フェイシャルトリートメント ＋ ヘッドリラクゼーション"
        text="ハーブなどの自然素材のナチュラルな香りと優しいタッチで固くなった頭部を緩めていきます。
        不眠でお悩みの方や頭痛、肩こりがある方におススメです。
        "
      />
      <PriceTableElement
        title="コース B"
        price="10,000"
        min="/ 120min"
        menu="ボディリバランス ＋ ヘッドリラクゼーション"
        text="優しいタッチで身体のバランスを整えていきます。
        心身に溜まった疲れやストレスを優しいタッチで緩めていきます。
        不眠でお悩みの方におススメです。
        "
      />
      <PriceTableElement
        title="コース C"
        price="12,000"
        min="/ 120min"
        menu="ボディリバランス ＋ フェイシャルトリートメント"
        text="優しいタッチで身体のバランスを整えていきます。
        フェイシャルトリートメントではハーブなどの自然素材のナチュラルな香りでトリートメントをさせていただきます。
        心身に溜まった疲れをハーブの香りと優しいタッチで癒していきます。
        "
      />
    </SPriceTable>
  );
};

const SPriceTable = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100vw;

  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;

  /* @media screen and (max-width: 600) {
    flex-direction: column;
    -webkit-flex-direction: column;
  } */
`;
