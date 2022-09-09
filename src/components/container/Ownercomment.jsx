import React from 'react';
import { Box } from '@material-ui/core';
import styled from 'styled-components';

export const Ownercomment = () => {
  return (
    <Box
      border={2}
      borderColor="grey.400"
      borderRadius={12}
      padding={4}
      mb={4}
      width="100%"
      fontSize={18}
      textAlign="left"
    >
      <p>
        30種類以上の植物から植物オイルやエキスを丁寧に抽出し、調合したナチュラルな化粧品を使用しています。
        <br></br>クリアな植物の香りを楽しんでいただけます。<br></br>
        <Star>
          ☆フェイシャルトリートメントを受けてくださった方に初回限定でトリートメントのセルフケアチケットをプレゼントさせていただいております。
        </Star>
      </p>
    </Box>
  );
};

const Star = styled.span`
  color: red;
`;
