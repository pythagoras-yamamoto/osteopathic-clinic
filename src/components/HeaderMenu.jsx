import styled from "styled-components";
import { Link } from "react-router-dom";

// import { HeaderMenuButton } from "./HeaderMenuButton";
// TODO Refactoring
export const HeaderMenu = () => {
  return (
    <SNavContainer>
      <ul>
        <SNavElement>
          <li className="nav-element">
            <Link to="/" className="nav-element-ja">
              ホーム
            </Link>
            <p className="nav-element-en">home</p>
          </li>
          <li className="nav-element">
            <Link to="/AboutUsPage" className="nav-element-ja">
              当院について
            </Link>
            <p className="nav-element-en">about us</p>
          </li>
          <li className="nav-element">
            <Link to="ResearvationPage" className="nav-element-ja">
              サービス・メニュー
            </Link>
            <p className="nav-element-en">service & menu</p>
          </li>
          <li className="nav-element">
            <Link to="InqueryPage" className="nav-element-ja">
              お問い合わせ
            </Link>
            <p className="nav-element-en">inquery</p>
          </li>
        </SNavElement>
      </ul>
    </SNavContainer>
  );
};

const SNavContainer = styled.div`
  background: white;
  height: 80px;
  z-index: 200;
  width: 100vw;
  position: fixed;
  opacity: 0.9;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const SNavElement = styled.div`
  list-style: none;
  padding: 18px;
  display: flex;
  justify-content: right;

  .nav-element {
    margin: 0 40px;
    font-size: 15px;
  }

  .nav-element-ja {
    text-decoration: none;
    color: black;
    transition: 0.2s;

    :hover {
      opacity: 0.5;
    }
  }

  .nav-element-en {
    font-size: 12px;
  }

  /*********** Responsive ***********/

  @media screen and (max-width: 780px) {
    display: none;
  }
`;
