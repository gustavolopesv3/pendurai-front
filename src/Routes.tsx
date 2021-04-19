import React from "react";
import { Switch, Route } from "react-router-dom";
import { Clientes } from "./pages/clientes";
import { Home } from "./pages/home";
import { Products } from "./pages/produtos";
import { Sales } from "./pages/vendas";
export const Routes = () => {
  return (
    <Switch>
      <Route path="/clientes">
        <Clientes />
      </Route>
      <Route path="/produtos">
        <Products />
      </Route>
      <Route path="/vendas">
        <Sales />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};
