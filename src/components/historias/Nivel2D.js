import React, {useState} from "react";
import { withRouter } from "react-router-dom"; //sirve para redireccionar a una pagina
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert"

const Nivel1A = (props) => {
  const [error, setError] = useState(false);
  const [opcion1, setOpcion1] = useState(false);
  const [opcion2, setOpcion2] = useState(false);


  const seleccionarOpcion1 = (e) => {
    if (e.target.value === "true") {
      setOpcion1(true);
    } else {
      setOpcion1(false);
    }
  };
  
  const seleccionarOpcion2 = (e) => {
    if (e.target.value === "true") {
      setOpcion2(true);
    } else {
      setOpcion2(false);
    }
  };



  const handleSubmit = () => {
    if (opcion1 && opcion2) {
      console.log("final")
      final()
    }
    else{
     setError(true) 
    }
  }

  const final = () => {
    // Cargar puntos en localstore
    const puntos = localStorage.getItem("puntos");
    const suma = parseInt(puntos) + 100;
    localStorage.setItem("puntos", JSON.parse(suma));
    // Redirección
    window.location.replace('/empezar/2/felicitaciones');
  }

  return (
    <div>
      {error ? (
        <Alert variant="warning" className="text-center">¡Ups! Lee nuevamente el pasaje mencionado y contesta.</Alert>
      ) : null}

            <h1 className="text-center">Lee:</h1>
      <h2 className="text-center mb-3 display-4">Hechos 16:16-40</h2>
      <hr></hr>
      <div className="text-center">
        <h1>Vamos con unas preguntas:</h1>
        <Form>
          <Form.Group as={Row} id="opcion1">
            <Form.Label as="legend" column sm={12}>
              ¿Como fue que las puertas de la carcel se abrierón?
            </Form.Label>
            <Col sm={12}>
              <Form.Check
                type="radio"
                label="Pablo y Silas le pidierón a Dios que lo haga."
                name="opcion1"
                value="false"
                onChange={seleccionarOpcion1}
              />
              <Form.Check
                type="radio"
                label="Los discipulos le pidierón a Dios que lo haga."
                name="opcion1"
                value="false"
                onChange={seleccionarOpcion1}
              />
              <Form.Check
                type="radio"
                label="Pablo y Silas oraban y alababan a Dios."
                name="opcion1"
                value="true"
                onChange={seleccionarOpcion1}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={12}>
            ¿Como salierón de la carcel Pablo y Silas?
            </Form.Label>
            <Col sm={12}>
              <Form.Check
                type="radio"
                label="Los dejarón libres."
                name="opcion2"
                value="true"
                onChange={seleccionarOpcion2}
              />
              <Form.Check
                type="radio"
                label="El guardia los dejo huir."
                name="opcion2"
                value="false"
                onChange={seleccionarOpcion2}
              />
              <Form.Check
                type="radio"
                label="Se escaparón."
                name="opcion2"
                value="false"
                onChange={seleccionarOpcion2}
              />
            </Col>
          </Form.Group>
          <button type="button" onClick={handleSubmit} className="empezar py-1">
            Responder
          </button>
        </Form>
      </div>
    </div>
  );
};

export default withRouter(Nivel1A);
