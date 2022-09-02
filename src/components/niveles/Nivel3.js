import React from 'react';

const Nivel3 = () => {
  const inicio = () => {
    window.location.replace('/empezar');
  };
  
    return (
        <div className="display-4 text-center">
        <h1>Nivel 3</h1>
        <h3>Preguntas sobre historias del Antiguo Testamento</h3>
      <ul>
        <div className="my-3"><a href="/empezar/3/a">Primera pregunta</a></div>
        <div className="my-3"><a href="/empezar/3/b">Segunda pregunta</a></div>
        <div className="my-3"><a href="/empezar/3/c">Tercer pregunta</a></div>
        <div className="my-3"><a href="/empezar/3/d">Cuarta pregunta</a></div>
        <div className="my-3"><a href="/empezar/3/e">Quinta pregunta</a></div>
      </ul>
      <div className="text-center">
        <button type="button" onClick={inicio} className="empezar py-1 mt-5">
          Volver a seleccionar nivel
        </button>
      </div>
        </div>
    );
};

export default Nivel3;