import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TryUs from "./pages/TryUs";
import Error from "./pages/Error"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/pruebalo" component={TryUs} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;




/*
TODO: Poner los + en las tarjetas.
*/
