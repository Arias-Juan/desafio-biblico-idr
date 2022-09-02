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
  const [opcion3, setOpcion3] = useState(false);


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

    
  const seleccionarOpcion3 = (e) => {
    if (e.target.value === "true") {
      setOpcion3(true);
    } else {
      setOpcion3(false);
    }
  };


  const handleSubmit = () => {
    if (opcion1 && opcion2 && opcion3) {
      console.log("final")
      final()
    }
    else{
     setError(true)
         // Restar puntos en localstore
    const puntos = localStorage.getItem("puntos");
    const resta = parseInt(puntos) - 50;
    localStorage.setItem("puntos", JSON.parse(resta)); 
    }
  }

  const final = () => {
    // Cargar puntos en localstore
    const puntos = localStorage.getItem("puntos");
    const suma = parseInt(puntos) + 300;
    localStorage.setItem("puntos", JSON.parse(suma));
    // Redirección
    window.location.replace('/empezar/3/felicitaciones');
  }

  return (
    <div>
      {error ? (
        <Alert variant="warning" className="text-center">¡Ups! Lee nuevamente el pasaje mencionado y contesta. -50 Puntos.</Alert>
      ) : null}

            <h1 className="text-center">Lee:</h1>
      <h2 className="text-center mb-3 display-4">Números 21:4-9</h2>
      <hr></hr>
      <div className="text-center">
        <h1>Vamos con unas preguntas:</h1>
        <Form>
          <Form.Group as={Row} id="opcion1">
            <Form.Label as="legend" column sm={12}>
            ¿Que hizo la gente al estar en el desierto?
            </Form.Label>
            <Col sm={12}>
              <Form.Check
                type="radio"
                label="Orar a Dios."
                name="opcion1"
                value="false"
                onChange={seleccionarOpcion1}
              />
              <Form.Check
                type="radio"
                label="Protestar contra Dios."
                name="opcion1"
                value="true"
                onChange={seleccionarOpcion1}
              />
              <Form.Check
                type="radio"
                label="Dar gracias a Dios."
                name="opcion1"
                value="false"
                onChange={seleccionarOpcion1}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={12}>
            ¿Que hizo Dios?
            </Form.Label>
            <Col sm={12}>
              <Form.Check
                type="radio"
                label="Mando agua."
                name="opcion2"
                value="false"
                onChange={seleccionarOpcion2}
              />
              <Form.Check
                type="radio"
                label="Mando serpientes venenosas."
                name="opcion2"
                value="true"
                onChange={seleccionarOpcion2}
              />
              <Form.Check
                type="radio"
                label="Mando animales salvajes."
                name="opcion2"
                value="false"
                onChange={seleccionarOpcion2}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={12}>
            ¿Que debia hacer el pueblo con la serpiente de bronce?
            </Form.Label>
            <Col sm={12}>
              <Form.Check
                type="radio"
                label="Acercarse."
                name="opcion3"
                value="false"
                onChange={seleccionarOpcion3}
              />
              <Form.Check
                type="radio"
                label="Tocarla."
                name="opcion3"
                value="false"
                onChange={seleccionarOpcion3}
              />
              <Form.Check
                type="radio"
                label="Mirarla."
                name="opcion3"
                value="true"
                onChange={seleccionarOpcion3}
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
