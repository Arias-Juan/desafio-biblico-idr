import React from "react";
import { withRouter } from "react-router-dom"; //sirve para redireccionar a una pagina

const Inicio = (props) => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(document.getElementById("nombre").value);
    const nombre = document.getElementById("nombre").value;
    const puntos = 0;
    await localStorage.clear();
    await localStorage.setItem("nombre", JSON.stringify(nombre));
    await localStorage.setItem("puntos", JSON.parse(puntos));
    window.setTimeout(() => {
      props.history.push("/terminos");
    }, 0);
  };

  return (
    <div className="text-center container">
      <div>
        <img
          src={process.env.PUBLIC_URL + "logo-idr.jpg"}
          alt="logo de idr"
          className="w-75 mb-4"
        ></img>
      </div>
      <div>
        <img
          src={process.env.PUBLIC_URL + "logo-ebn.jpeg"}
          alt="logo de la escuela biblica de niños"
          className="w-25"
        ></img>
      </div>
      <form className="d-flex flex-column" onSubmit={handleSubmit}>
        <input
          className="my-3 py-3 w-100 text-center"
          placeholder="INGRESA TU NOMBRE..."
          id="nombre"
        ></input>
        <button type="submit" className="empezar py-3">
          EMPEZAR
        </button>
      </form>
    </div>
  );
};

export default withRouter(Inicio);
