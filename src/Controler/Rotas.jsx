import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "../Calculator/Main/Main";
import Home from "../Components/Home";
import Sobre from "../Components/Sobre";


export default function Rotas() {
  return (
    <Switch>
      

      <Route path="/sobre">
        <Sobre/>        
      </Route>
      <Route path="/calculadora">
        <Main/>
      </Route>

      <Route path="/">
        <Home/>        
      </Route>

    

    </Switch>
  );
}
