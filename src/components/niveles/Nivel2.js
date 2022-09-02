import React from 'react';

const Nivel2 = () => {
  const inicio = () => {
    window.location.replace('/empezar');
  };
  
    return (
        <div className="display-4 text-center">
        <h1>Nivel 2</h1>
        <h3>Preguntas sobre historias del Nuevo Testamento</h3>
      <ul>
        <div className="my-3"><a href="/empezar/2/a">Primera pregunta</a></div>
        <div className="my-3"><a href="/empezar/2/b">Segunda pregunta</a></div>
        <div className="my-3"><a href="/empezar/2/c">Tercer pregunta</a></div>
        <div className="my-3"><a href="/empezar/2/d">Cuarta pregunta</a></div>
        <div className="my-3"><a href="/empezar/2/e">Quinta pregunta</a></div>
      </ul>
      <div className="text-center">
        <button type="button" onClick={inicio} className="empezar py-1 mt-5">
          Volver a seleccionar nivel
        </button>
      </div>
        </div>
        
    );
};

export default Nivel2;