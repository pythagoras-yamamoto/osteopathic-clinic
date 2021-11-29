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
        <SCopyright>
          &copy; {new Date().getFullYear()} Netsu Osteopathic Clinic
        </SCopyright>
      </SFooter>
    </>
  );
};

const SFooter = styled.div`
  position: relative;
  background-color: #d3d3d3;
  height: 140px;
  width: 100%;
  box-shadow: 2px -2px 4px rgb(0 0 0 / 10%);
`;

const SFooterMenu = styled.div`
  display: flex;
  justify-content: center;

  .LinkName {
    list-style: none;
    margin: 20px;
    padding-top: 40px;
    padding-bottom: 20px;
  }
  .LinkChild {
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
  }
`;

const SInfoWrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: 25px;
  right: 30px;
`;

const STelinfo = styled.p`
  display: flex;
  justify-content: center;
  background-color: white;
  margin-right: 20px;
  margin-bottom: 10px;
  padding: 10px 100px;
  border-radius: 10px;
`;

const SAdressinfo = styled(STelinfo)``;

const SCopyright = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  background-color: #d3d3d3;
  font-size: 0.5em;
  padding-bottom: 10px;
  font-family: "Times New Roman";
`;
