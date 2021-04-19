import React from "react";
import { Switch, Route } from "react-router-dom";
import { Clientes } from "./pages/clientes";
import { Home } from "./pages/home";
export const Routes = () => {
  return (
    <Switch>
      <Route path="/clientes">
        <Clientes />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
