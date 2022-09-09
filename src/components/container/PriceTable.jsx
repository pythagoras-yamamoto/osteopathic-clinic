import React from 'react';
import styled from 'styled-components';
import { PriceTableElement } from './PriceTableElement';
import { Ownercomment } from './Ownercomment';

export const PriceTable = () => {
  return (
    <SPriceTable>
      <Ownercomment />
      <PriceTableElement
        title="コース A"
        titleColor="#33c9dc"
        price="7,000"
        min="/ 90min"
        menu="ボディリバランス"
        text="身体の疲れや慢性的なコリでお悩みの方にオススメです。優しいタッチで硬まった身体を緩めていきます。
        "
      />
      <PriceTableElement
        title="コース B"
        titleColor="#00bcd4"
        price="9,000"
        min="/ 90min"
        menu="フェイシャルトリートメント ＋ ヘッドリラクゼーション"
        text="不眠でお悩みの方や頭痛、肩こりがある方にオススメです。
        頭部の血行促進によりお顔の血行も良くなります。
        フェイシャルトリートメントではハーブなどの自然素材のナチュラルな
        香りでトリートメントさせていただきます。
        心身に溜まった疲れをハーブの香りと優しいタッチで癒していきます。        
        "
      />
      <PriceTableElement
        title="コース C"
        titleColor="#35baf6" //
        price="10,000"
        min="/ 120min"
        menu="ボディリバランス ＋ ヘッドリラクゼーション"
        text="優しいタッチで身体のバランスを整えていきます。
        心身に溜まった疲れやストレスを優しいタッチで緩めていきます。
        不眠でお悩みの方におススメです。
        "
      />
      <PriceTableElement
        title="コース D"
        titleColor="#03a9f4"
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
