import React from "react";
import Tarjeta from "../components/Card";
import objetos from "../images/objetos.jpeg";
import descripcion from "../images/descripcion.jpeg";
import distancia from "../images/distancia.jpeg";

export default function CardContaner() {
  return (
    <div className="card-container">
      <Tarjeta
        src={objetos}
        alt="objetos"
        title="Objetos"
        text="Somos capaces de detectar objetos individuales a tiempo real, entre más de 50000 tipos de objetos, aimales y en futuro, personas conocidas."
        addedClass="rounded-corner-bottom-left"
      />
      <Tarjeta
        src={descripcion}
        alt="descripcion"
        title="Descripción"
        text="Sabemos determinar la esencia de un entorno en pocas palabras, y dar contexto al conjunto de objetos y no a los individuales. Podemos extraer la realidad a través del aprendizaje profundo."
      />
      <Tarjeta
        src={distancia}
        alt="distancia"
        title="Distancia"
        text="Tan importante es saber lo que tienes delante como saber a la distancia a la que está ese objeto. Juntamos ambas lecturas para situar a la persona de la manera más fiel en una escena."
        addedClass="rounded-corner-top-right"
      />
    </div>
  );
}
