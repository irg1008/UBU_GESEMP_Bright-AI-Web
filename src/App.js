import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/others/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import TryUs from "./pages/TryUs";
import Error from "./pages/Error";

require("dotenv").config();

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
TODO: En try que la imagen se carge cuando arrastras y que no haya que dar al botón.
TODO: Si no se cumple el TODO de ariba poner bien la vista de la imágen en el dropzone.
TODO: Ver si creamos carrusel de imágenes en la linea de tiempo. De momento imágen fija.
TODO: Mejorar la API de la IA a inception V3, mejor entrenada, o con alguna de google cloud, para el futuro.
TODO: Reducir el tamaño de los archivos.
TODO: Formatear el envio de datos de formulario en html.
TODO: -> FIX: No funciona lo de las variables para las apis. -> Solo funciona en http, resolver esto para poder usar https, quizas otra api? Arriba marcada?
TODO: Hostinger redirije el route al 404 (usar htacces) -> He usado htacces + HashRouter en vez de BrowseRouter pero pone un molesto #.
*/
