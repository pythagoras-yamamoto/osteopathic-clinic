import styled from "styled-components";
import { HeaderMenuButton } from "./HeaderMenuButton";

export const HeaderMenu = () => {
  return (
    <SNav>
      <div className="nav">
        <ul>
          <SNavElement>
            <li>
              <a hlef="#">Home</a>
            </li>
          </SNavElement>
          <SNavElement>
            <li>
              <a hlef="#">当院について</a>
            </li>
          </SNavElement>
          <SNavElement>
            <li>
              <a hlef="#">予約状況・料金</a>
            </li>
          </SNavElement>
          <SNavElement>
            <li>
              <a hlef="#">お問い合わせ</a>
            </li>
          </SNavElement>
        </ul>
      </div>
    </SNav>
  );
};

const SNavElement = styled.li`
  list-style: none;
  font-size: 20px;
  padding: 10px 30px;
  float: left;
`;

const SNav = styled.nav``;
