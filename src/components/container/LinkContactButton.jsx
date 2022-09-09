import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const LinkContactButton = () => {
  return (
    <>
      <Wrapper>
        <Button
          style={{ fontFamily: 'Yomogi' }}
          className="contact-button"
          type="submit"
          color="primary"
          variant="outlined"
          size="large"
          component={Link}
          to="/Contact"
        >
          ご予約はこちら
        </Button>
      </Wrapper>
    </>
  );
};

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 50px;
`;
