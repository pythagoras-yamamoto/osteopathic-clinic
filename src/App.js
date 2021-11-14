// import { HeaderMenuButton } from "./components/HeaderMenuButton";
import { HeaderMenu } from "./components/HeaderMenu";

import "./styles.css";
import { FooterMenu } from "./components/FooterMenu";

export default function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
      <FooterMenu />
    </div>
  );
}
