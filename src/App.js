import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Inicio from "./components/Inicio/Inicio";
import Empezar from "./components/Inicio/Empezar";
import Felicitaciones from "./components/Inicio/Felicitaciones";
import Felicitaciones2 from "./components/Inicio/Felicitaciones2";
import Felicitaciones3 from "./components/Inicio/Felicitaciones3";
import FelicitacionesFinal from "./components/Inicio/FelicitacionesFinal";
import Terminos from "./components/Inicio/Terminos";
import Nivel1 from "./components/niveles/Nivel1";
import Nivel2 from "./components/niveles/Nivel2";
import Nivel3 from "./components/niveles/Nivel3";
import Nivel4 from "./components/niveles/Nivel4";
import Nivel1A from "./components/historias/Nivel1A";
import Nivel1B from "./components/historias/Nivel1B";
import Nivel1C from "./components/historias/Nivel1C";
import Nivel1D from "./components/historias/Nivel1D";
import Nivel1E from "./components/historias/Nivel1E";
import Nivel1F from "./components/historias/Nivel1F";
import Nivel2A from "./components/historias/Nivel2A";
import Nivel2B from "./components/historias/Nivel2B";
import Nivel2C from "./components/historias/Nivel2C";
import Nivel2D from "./components/historias/Nivel2D";
import Nivel2E from "./components/historias/Nivel2E";
import Nivel3A from "./components/historias/Nivel3A";
import Nivel3B from "./components/historias/Nivel3B";
import Nivel3C from "./components/historias/Nivel3C";
import Nivel3D from "./components/historias/Nivel3D";
import Nivel3E from "./components/historias/Nivel3E";

function App() {
  const nombre = JSON.parse(localStorage.getItem("nombre"));
  const puntos = JSON.parse(localStorage.getItem("puntos"));

  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/empezar">
          <Empezar nombre={nombre} puntos={puntos}></Empezar>
        </Route>
        <Route exact path="/terminos">
          <Terminos></Terminos>
        </Route>
        <Route exact path="/empezar/1/felicitaciones">
          <Felicitaciones nombre={nombre} puntos={puntos}></Felicitaciones>
        </Route>
        <Route exact path="/empezar/2/felicitaciones">
          <Felicitaciones2 nombre={nombre} puntos={puntos}></Felicitaciones2>
        </Route>
        <Route exact path="/empezar/3/felicitaciones">
          <Felicitaciones3 nombre={nombre} puntos={puntos}></Felicitaciones3>
        </Route>
        <Route exact path="/empezar/felicitaciones">
          <FelicitacionesFinal nombre={nombre} puntos={puntos}></FelicitacionesFinal>
        </Route>
        {/* Niveles */}
        <Route exact path="/empezar/1">
          <Nivel1></Nivel1>
        </Route>
        <Route exact path="/empezar/2">
          <Nivel2></Nivel2>
        </Route>
        <Route exact path="/empezar/3">
          <Nivel3></Nivel3>
        </Route>
        <Route exact path="/empezar/4">
          <Nivel4></Nivel4>
        </Route>
        {/* Preguntas Nivel 1 */}
        <Route exact path="/empezar/1/a">
          <Nivel1A></Nivel1A>
        </Route>
        <Route exact path="/empezar/1/b">
          <Nivel1B></Nivel1B>
        </Route>
        <Route exact path="/empezar/1/c">
          <Nivel1C></Nivel1C>
        </Route>
        <Route exact path="/empezar/1/e">
          <Nivel1D></Nivel1D>
        </Route>
        <Route exact path="/empezar/1/d">
          <Nivel1E></Nivel1E>
        </Route>
        <Route exact path="/empezar/1/f">
          <Nivel1F></Nivel1F>
        </Route>
        {/* Preguntas Nivel 2 */}
        <Route exact path="/empezar/2/a">
          <Nivel2A></Nivel2A>
        </Route>
        <Route exact path="/empezar/2/b">
          <Nivel2B></Nivel2B>
        </Route>
        <Route exact path="/empezar/2/c">
          <Nivel2C></Nivel2C>
        </Route>
        <Route exact path="/empezar/2/d">
          <Nivel2D></Nivel2D>
        </Route>
        <Route exact path="/empezar/2/e">
          <Nivel2E></Nivel2E>
        </Route>
        {/* Preguntas Nivel 3 */}
        <Route exact path="/empezar/3/a">
          <Nivel3A></Nivel3A>
        </Route>
        <Route exact path="/empezar/3/b">
          <Nivel3B></Nivel3B>
        </Route>
        <Route exact path="/empezar/3/c">
          <Nivel3C></Nivel3C>
        </Route>
        <Route exact path="/empezar/3/d">
          <Nivel3D></Nivel3D>
        </Route>
        <Route exact path="/empezar/3/e">
          <Nivel3E></Nivel3E>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
