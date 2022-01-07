import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

export const LinkContactButton = () => {
  return (
    <>
      <Wrapper>
        <Button
          className="contact-button"
          type="submit"
          color="primary"
          variant="outlined"
          size="large"
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
