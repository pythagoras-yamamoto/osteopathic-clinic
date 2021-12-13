import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
// import SlideRoutes from "react-slide-routes";

import { HomePage } from "../pages/HomePage";
import { AboutUsPage } from "..//pages/AboutUsPage";
import { ContactPage } from "..//pages/ContactPage";
import { ResearvationPage } from "../pages/ResearvationPage";
import { MenuPricePage } from "../pages/MenuPricePage";
import { Page404 } from "../pages/Page404";

export const Router = () => {
  // const location = useLocation();

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/AboutUsPage">
        <AboutUsPage />
      </Route>
      <Route path="/ContactPage">
        <ContactPage />
      </Route>
      <Route path="/ResearvationPage">
        <ResearvationPage />
      </Route>
      <Route path="/MenuPricePage">
        <MenuPricePage />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
