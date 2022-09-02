import React from "react";

const Nivel4 = () => {
  const inicio = () => {
    window.location.replace('/empezar');
  };
  
  return (
    <div className="display-4 text-center">
      <h1>Nivel 4</h1>
      <h3>Preguntas dificiles sobre...</h3>
      {/* <ul>
        <div className="my-3"><a href="/empezar/4/a">Primera pregunta</a></div>
        <div className="my-3"><a href="/empezar/4/b">Segunda pregunta</a></div>
        <div className="my-3"><a href="/empezar/4/c">Tercer pregunta</a></div>
        <div className="my-3"><a href="/empezar/4/d">Cuarta pregunta</a></div>
        <div className="my-3"><a href="/empezar/4/e">Quinta pregunta</a></div>
      </ul> */}
      Aun no disponible.
      <div className="text-center">
        <button type="button" onClick={inicio} className="empezar py-1 mt-5">
          Volver a seleccionar nivel
        </button>
      </div>
    </div>
  );
};

export default Nivel4;
