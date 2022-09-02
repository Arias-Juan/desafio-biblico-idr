import React from "react";
import { withRouter } from "react-router-dom"; //sirve para redireccionar a una pagina
import estrella from "../historias/img/estrella.png";

const Felicitaciones = (props) => {
  const final = () => {
    window.location.replace('/');
  };

  return (
    <div>
      <h3 className="text-center">{props.nombre}, ¡Felicitaciones!</h3>
      <br></br>
      <div className="text-center">
        {" "}
        <img src={estrella} alt="Estrella" className="w-100"></img>
      </div>
      <div className="text-center">
        <p className="lead">Lograste acumular: {props.puntos} puntos.</p>
        <button type="button" onClick={final} className="empezar py-1">
          Volver a Jugar
        </button>
      </div>
    </div>
  );
};

export default withRouter(Felicitaciones);
