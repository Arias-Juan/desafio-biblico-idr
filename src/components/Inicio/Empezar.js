import React from "react";
import { withRouter } from "react-router-dom"; //sirve para redireccionar a una pagina
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

const Empezar = (props) => {
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDWpkuSm45ExNyDHzGZ4K1sUemJGwQktTA",
    authDomain: "idr-biblico.firebaseapp.com",
    projectId: "idr-biblico",
    storageBucket: "idr-biblico.appspot.com",
    messagingSenderId: "50183879758",
    appId: "1:50183879758:web:2e85163a204aebe033971f",
    measurementId: "G-9QF1WGZZ1P"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


  const terminarSesion = async () => {
    
    try {
      const docRef = await addDoc(collection(db, "desafio-2022"), {
        nombre: props.nombre,
        puntos: props.puntos
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    console.log(
      "Se enviaron resultados de " +
        props.nombre +
        " por " +
        props.puntos +
        " puntos."
    );

    await localStorage.clear();
    props.history.push("/empezar/felicitaciones");
  };

  const cerrarSesion = async () => {
    await localStorage.clear();
    props.history.push("/");
  };

  return (
    <div className="text-center">
      <h1 className="mb-4">¡Hola! {props.nombre}</h1>
      <h3 className="mb-4">Actualmente tienes: {props.puntos} puntos!</h3>
      <div className="d-flex flex-column">
        <a href="/empezar/1">
          <img src={process.env.PUBLIC_URL + "nivel1.png"} alt="Nivel 1"></img>
        </a>
        <a href="/empezar/2">
          {" "}
          <img src={process.env.PUBLIC_URL + "nivel2.png"} alt="Nivel 2"></img>
        </a>
        <a href="/empezar/3">
          {" "}
          <img src={process.env.PUBLIC_URL + "nivel3.png"} alt="Nivel 3"></img>
        </a>
        <a href="/empezar/4">
          {" "}
          <img src={process.env.PUBLIC_URL + "nivel4.png"} alt="Nivel 4"></img>
        </a>

        <button
          type="button"
          onClick={terminarSesion}
          className="envio mt-5 py-1"
        >
          Terminar y enviar puntaje
        </button>
        <button
          type="button"
          onClick={cerrarSesion}
          className="empezar mt-5 py-1"
        >
          Reiniciar puntaje y nombre
        </button>
      </div>
    </div>
  );
};

export default withRouter(Empezar);
