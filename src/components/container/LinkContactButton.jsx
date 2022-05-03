import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";

export const LinkContactButton = () => {
  return (
    <>
      <Wrapper>
        <Button
          style={{fontFamily: "Hannotate SC"}}
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

// export const Button = styled.button`
//   font-family: Hannotate SC;
// `