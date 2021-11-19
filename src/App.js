import "./styles.css";
//import { HeaderMenu } from "./components/HeaderMenu";
//import { FooterMenu } from "./components/FooterMenu";
//import { HomePage } from "./pages/HomePage";
import { Router } from "./router/Router";
import { BrowserRouter } from "react-router-dom";

// import Image from "./clinic-image.jpeg";

export default function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
