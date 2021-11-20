import styled from "styled-components";
import React from "react";
// import { FooterMenuButton } from "./FooterMenuButton";

// export const FooterMenu = () => {
//   return (
//     <SFooterMenu>
//       <FooterMenuButton />
//       <SFormList>
//         <ul>
//           <li className="form-list">
//             <p>電話番号</p>
//           </li>
//           <li className="form-list">
//             <p>住所</p>
//           </li>
//         </ul>
//       </SFormList>
//       <br></br>
//       <SHosName>根津整体院</SHosName>
//     </SFooterMenu>
//   );
// };

export const FooterMenu = () => {
  return (
    <SFooterMenu>
      <div>
        <SFooterMenuButton>
          <li className="LinkName">
            <a href="./pages/HomePage.jsx" className="LinkChild">
              ホーム
            </a>
          </li>
          <li className="LinkName">
            <a href="./pages/AboutUsPage.jsx" className="LinkChild">
              当院について
            </a>
          </li>
          <li className="LinkName">
            <a href="./pages/ReservationPage.jsx" className="LinkChild">
              料金・予約
            </a>
          </li>
          <li className="LinkName">
            <a href="./pages/InqueryPage.jsx" className="LinkChild">
              お問合せ
            </a>
          </li>
        </SFooterMenuButton>
      </div>
      <STelinfo>
        <p className="tel-child">電話番号</p>
      </STelinfo>
      <SAccessinfo>
        <p className="access-child">住所</p>
      </SAccessinfo>
      <SClinicName>
        <p className="clinic-name">根津整体院</p>
      </SClinicName>
    </SFooterMenu>
  );
};

// const SFooterMenu = styled.div`
//   width: 100%;
//   height: 120px;
//   background-color: #d3d3d3;
//   /* border-top: solid 5px #ffb6c1; */
//   /* border-bottom: solid 5px #ffb6c1; */
//   opacity: 0.8;
// `;

// const SHosName = styled.p`
//   text-align: center;
//   position: center;
// `;

const SFooterMenu = styled.div`
  width: 100%;
  background-color: #d3d3d3;

  .tel-info {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -40px;
  }
  .access-info {
    display: flex;
    justify-content: flex-end;
    position: relative;
    top: -30px;
  }
  @media screen and (max-width: 780px) {
  }
  /* position: relative; */
  /* top: 20px; */
  /* left: 40%; */
`;

const SFooterMenuButton = styled.ul`
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

const STelinfo = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -20px;
  .tel-child {
    border: solid 3px #000000;
  }
`;

const SAccessinfo = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -10px;
  /* top: -30px; */
  .access-child {
    border: solid 3px #000000;
  }
`;

const SClinicName = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
