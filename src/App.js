import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/others/Navbar";
import Footer from "./components/footer/Footer"
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
      <Footer />
    </>
  );
}

export default App;




/*
TODO: Poner los + en las tarjetas.
TODO: Ver sii creamos carrusel de imágenes en la linea de tiempo. De momento imágen fija.
TODO: Mejorar la API de la IA a inception V3, mejor entrenada.
TODO: Reducir el tamaño de los archivos.
TODO -> FIX: Cuando los dominios apuntes, cambiar lo del correo y el php para que funcione. Intentar pronto, que hay muchas cosas mas.
*/
