import React from "react";
import { withRouter } from "react-router-dom"; //sirve para redireccionar a una pagina
import estrella from "../historias/img/estrella.png";

const Felicitaciones = (props) => {
  const final = () => {
    window.location.replace('/empezar/3/');
  };

  return (
    <div>
      <h3 className="text-center">{props.nombre}, ¡Excelente! Ganaste 100 puntos</h3>
      <br></br>
      <div className="text-center">
        {" "}
        <img src={estrella} alt="Estrella" className="w-100"></img>
      </div>
      <div className="text-center">
        <p className="lead">Actualmente tienes {props.puntos} puntos.</p>
        <button type="button" onClick={final} className="empezar py-1">
          Seguir respondiendo
        </button>
      </div>
    </div>
  );
};

export default withRouter(Felicitaciones);
