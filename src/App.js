import { HeaderMenuButton } from "./components/HeaderMenuButton";
import { HeaderMenu } from "./components/HeaderMenu";

import "./styles.css";
import { FooterMenuButton } from "./components/FooterMenuButton";

export default function App() {
  return (
    <div className="App">
      <HeaderMenu></HeaderMenu>
      <FooterMenuButton />
    </div>
  );
}
