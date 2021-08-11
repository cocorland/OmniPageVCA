import React from "react";

export default function Propiedades (props) {
  return(
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        {/* Aqui puedo meterle todos los tipos de elementos y objetos de JSX
        pero debo asignarles el valor en App.js */}
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? "soy orlando" : "falsete"}</li>
      </ul>
    </div>
  )
}

Propiedades.defaultProps = {
  /* Si yo necesito definir algunas
  propiedades por defecto, las puedo especificar */
  porDefecto: "Las Props",
};