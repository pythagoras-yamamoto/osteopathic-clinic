import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <SNavItems>
      <SNavbarLogo>LOGO</SNavbarLogo>
      <div className="munu-icon"></div>
      <SNavMenu>
        <SNavLink>
          <Link to="/">Home</Link>
        </SNavLink>
        <SNavLink>
          <Link to="/AboutUsPage">About US</Link>
        </SNavLink>
        <SNavLink>
          <Link to="/ResearvationPage">Service & Menu</Link>
        </SNavLink>
        <SNavLink>
          <Link to="/ContactPage">Contact</Link>
        </SNavLink>
      </SNavMenu>
    </SNavItems>
  );
};
//  <SNavContainer>
//    <ul>
//   //     <SNavElement>
//   //       <li className="nav-element">
//   //         <Link to="/" className="nav-element-ja">
//   //           ホーム
//   //         </Link>
//   //         <p className="nav-element-en">home</p>
//   //       </li>
//   //       <li className="nav-element">
//   //         <Link to="/AboutUsPage" className="nav-element-ja">
//   //           当院について
//   //         </Link>
//   //         <p className="nav-element-en">about us</p>
//   //       </li>
//   //       <li className="nav-element">
//   //         <Link to="ResearvationPage" className="nav-element-ja">
//   //           サービス・メニュー
//   //         </Link>
//   //         <p className="nav-element-en">service & menu</p>
//   //       </li>
//   //       <li className="nav-element">
//   //         <Link to="ContactPage" className="nav-element-ja">
//   //           お問い合わせ
//   //         </Link>
//   //         <p className="nav-element-en">contact</p>
//   //       </li>
//   //     </SNavElement>
//   //   </ul>
//   //   <ul>
//   //     {NavbarItems.map((item, index) => {
//       return (
//         <li key={index}>
//           <a href="{item.url}" className="{item.cName}">
//             {item.title}
//           </a>
//         </li>
//       );
//     })}
//   </ul>
// </SNavContainer>
// );
// };

const SNavItems = styled.nav`
  background-color: white;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  width: 100vw;
  position: fixed;
  opacity: 0.9;
  box-shadow: 0px 2px 10px rgb(0 0 0 / 10%);
`;

const SNavbarLogo = styled.h1`
  color: black;
  justify-self: start;
  padding: 20px;
  cursor: pointer;
`;

const SNavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  text-align: center;
  justify-content: end;
  width: 70vw;
  list-style: none;
  padding-right: 2rem;
`;

const SNavLink = styled.li`
  text-decoration: none;
`;

const SNavContainer = styled.div`
  background: white;
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
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      opacity: 0.5;
    }
  }

  .nav-element-ja {
    text-decoration: none;
    color: black;
    transition: 0.2s;
  }

  .nav-element-en {
    font-size: 12px;
    color: black;
  }

  /*********** Responsive ***********/

  @media screen and (max-width: 780px) {
    display: none;
  }
`;
