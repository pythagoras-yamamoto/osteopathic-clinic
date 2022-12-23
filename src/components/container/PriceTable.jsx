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
        price="9,000"
        min="/ 60min"
        menu="集中的にお疲れ部分を解消したい"
        text="お時間がなくても癒されたい方にオススメ。お疲れの部分を集中的にほぐしていきます。
              ちょっと珍しい『身体から伝わる心のメッセージリーディング』をしながら行うリラクゼーション
        "
      />
      <PriceTableElement
        title="コース B"
        titleColor="#00bcd4"
        price="15,000"
        min="/ 90min"
        menu="首・肩・背中・腰・手足・目の疲れを解消したい"
        text="血流が良くなり身体も温かくポカポカ。身体の緊張が抜け、ぐっすりと心地のよい睡眠へ。
              ちょっと珍しい『身体から伝わる心のメッセージリーディング』をしながら行うリラクゼーション
        "
      />
      <PriceTableElement
        title="コース C"
        titleColor="#35baf6" //
        price="21,000"
        min="/ 120min"
        menu="首・肩・背中・腰・手足・目をゆるふわ解放＋オイルで手先・足先まで"
        text="首・肩・背中・腰・手足・頭痛・目などのコリをほぐしていきます。またコリを起こしている原因を根本的に改善。
              筋膜リリースにプラス「手のひら、足裏を集中的」にオイルでほぐしていきます。より一層のすっきり感を味わえます。
              ちょっと珍しい『身体から伝わる心のメッセージリーディング』をしながら行うリラクゼーション
        "
      />
      {/* <PriceTableElement
        title="コース D"
        titleColor="#03a9f4"
        price="12,000"
        min="/ 120min"
        menu="ボディリバランス ＋ フェイシャルトリートメント"
        text="優しいタッチで身体のバランスを整えていきます。
        フェイシャルトリートメントではハーブなどの自然素材のナチュラルな香りでトリートメントをさせていただきます。
        心身に溜まった疲れをハーブの香りと優しいタッチで癒していきます。
        "
      /> */}
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
