import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { AboutUsPage } from "..//pages/AboutUsPage";
import { ContactPage } from "..//pages/ContactPage";
import { ResearvationPage } from "../pages/ResearvationPage";
import { Page404 } from "../pages/Page404";

export const Router = () => {
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
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
