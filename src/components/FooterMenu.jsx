import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FooterMenuButton } from "./FooterMenuButton";

export const FooterMenu = () => {
  return (
    <>
      <SFooter>
        <SFooterMenu>
          <li className="LinkName">
            <Link to="/" className="LinkChild">
              ホーム
            </Link>
          </li>
          <li className="LinkName">
            <Link to="/AboutUsPage" className="LinkChild">
              当院について
            </Link>
          </li>
          <li className="LinkName">
            <Link to="/ResearvationPage" className="LinkChild">
              予約・料金
            </Link>
          </li>
          <li className="LinkName">
            <Link to="/InqueryPage" className="LinkChild">
              お問い合わせ
            </Link>
          </li>
        </SFooterMenu>
        <SInfoWrapper>
          <STelinfo>電話番号</STelinfo>
          <SAdressinfo>住所</SAdressinfo>
        </SInfoWrapper>
      </SFooter>
      <SCopyright>© 2021 Netsu Osteopathic Clinic</SCopyright>
    </>
  );
};

const SFooter = styled.div`
  position: relative;
  background-color: #d3d3d3;
  height: 150px;
  width: 100%;
  @media screen and (max-width: 780px) {
  }
`;

const SFooterMenu = styled.div`
  display: flex;
  justify-content: center;

  .LinkName {
    list-style: none;
    float: left;
    margin: 20px;
  }
  .LinkChild {
    text-decoration: none;
    color: #ffffff;
  }
`;

const SInfoWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 35px;
  right: 30px;
`;

const STelinfo = styled.p`
  display: flex;
  justify-content: center;
  background-color: white;
  margin: 5px;
  padding: 10px 15px;
  border-radius: 8px;
`;

const SAdressinfo = styled(STelinfo)``;

const SCopyright = styled.div`
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 0.5em;
  padding-bottom: 10px;
`;
