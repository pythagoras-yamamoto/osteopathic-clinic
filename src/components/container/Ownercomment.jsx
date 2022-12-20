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
        がんばる女性の体と心をゆるふわに解放し「自分を愛し一生大切にできる様になれる」<br></br>
        <Star>
          Healing Body Balance Salon
        </Star>
      </p>
    </Box>
  );
};

const Star = styled.span`
  color: red;
  font-size:24px;
`;
