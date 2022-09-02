import React from "react";
import { withRouter } from "react-router-dom"; //sirve para redireccionar a una pagina

const Terminos = (props) => {
  const final = () => {
    window.location.replace('/empezar');
  };

  return (
    <div>
      <h3 className="text-center">Trivia Biblica</h3>
      <br></br>
      <div className="text-center">
        <p className="lead">El juego trivia biblica se creo con el fin de aprender más de la Biblia y podes interiorizarse más en especial durante este mes de la Biblia.</p>
        <p className="lead">El juego consta de 4 niveles de dificultad, por cada preguntas con respuesta correcta se suman puntos de acuerdo al nivel.</p>
        <p className="lead">¡No es una competencia, pero podes compartir cuantos puntos vas haciendo!</p>
        <p className="bold">Al finalizar, no te olvides de presionar el boton verde de "Terminar y enviar puntaje", esto envio tu puntaje para luego ver cuanto hiciste.</p>
      </div>
      <div className="text-center">
        <button type="button" onClick={final} className="empezar py-1">
          Continuar
        </button>
      </div>
    </div>
  );
};

export default withRouter(Terminos);
