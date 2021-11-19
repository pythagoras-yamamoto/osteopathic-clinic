import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

import "./styles.css";
//import { HeaderMenu } from "./components/HeaderMenu";
//import { FooterMenu } from "./components/FooterMenu";
//import { HomePage } from "./pages/HomePage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
