import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import Link from "next/link";

export const LinkContactButton = () => {
  return (
    <>
      <Wrapper>
        <Link href="/Contact">
          <Button
            style={{ fontFamily: "Yomogi" }}
            className="contact-button"
            type="submit"
            color="primary"
            variant="outlined"
            size="large"
            // component={Link}
            to="/Contact"
          >
            ご予約はこちら
          </Button>
        </Link>
      </Wrapper>
    </>
  );
};

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 50px;
`;

export const Space = styled.div`
  margin: 40px;
`;
