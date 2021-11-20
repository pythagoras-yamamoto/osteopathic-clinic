import styled from "styled-components";
import { Link } from "react-router-dom";
// import { FooterMenuButton } from "./FooterMenuButton";

export const FooterMenu = () => {
  return (
    <SFooter>
      <div>
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
        <SCopyright>© 2021 Netsu Osteopathic Clinic</SCopyright>
      </div>
    </SFooter>
  );
};

const SFooter = styled.div`
  width: 100%;
  background-color: #d3d3d3;
  position: relative;

  @media screen and (max-width: 780px) {
  }
`;

const SFooterMenu = styled.ul`
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
  top: 0;
  right: 50px;
  /* display: inline-block; */
  /* background-color: white; */
`;

const STelinfo = styled.p`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: white;
  margin: 5px;
  padding: 10px;
  border-radius: 8px;
`;

const SAdressinfo = styled(STelinfo)``;

const SCopyright = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 0.5em;
  padding-bottom: 15px;
`;
