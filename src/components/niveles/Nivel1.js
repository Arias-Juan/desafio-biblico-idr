import React from "react";

const Nivel1 = () => {
  const inicio = () => {
    window.location.replace('/empezar');
  };


  return (
    <div className="text-center display-4">
        <h1>Nivel 1</h1>
        <h3>Preguntas simples de la Biblia</h3>
      <ul>
        <div className="my-3"><a href="/empezar/1/a">Primera pregunta</a></div>
        <div className="my-3"><a href="/empezar/1/b">Segunda pregunta</a></div>
        <div className="my-3"><a href="/empezar/1/c">Tercer pregunta</a></div>
        <div className="my-3"><a href="/empezar/1/d">Cuarta pregunta</a></div>
        <div className="my-3"><a href="/empezar/1/e">Quinta pregunta</a></div>
        <div className="my-3"><a href="/empezar/1/f">Sexta pregunta</a></div>
      </ul>
      <div className="text-center">
        <button type="button" onClick={inicio} className="empezar py-1 mt-5">
          Volver a seleccionar nivel
        </button>
      </div>
    </div>
  );
};

export default Nivel1;
