import { useState } from "react";

import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function App() {
  const [initialTemp, setInitialTemp] = useState(0); // Temperatura inicial del objeto
  const [ambientTemp, setAmbientTemp] = useState(0); // Temperatura ambiente
  const [time, setTime] = useState(0); // Tiempo
  const [k, setK] = useState(0); // Constante de proporcionalidad
  const [valorFinal, setValorFinal] = useState(0); // Constante de proporcionalidad

  const calculateTemperature = () => {
    const resultado1 =
      ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * time);
    setValorFinal(resultado1.toFixed(2));
    const C = initialTemp - ambientTemp;
    const resultado2 = C * Math.exp(-k * time) + ambientTemp;
    console.log(resultado1, resultado2);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container style={{ width: "60%" }}>
        <Row>
          <Col xs={3}>
            <img src="Imagen1.png" style={{ width: "50%" }} />
          </Col>
          <Col xs={6}>
            <p>
              Universidad Alejandro de Humboldt.<br/>
               Carrera de Ingeniería en nformática <br/>
              Curso: Matemáticas III <br/>
              Sección: BQN0302II
            </p>
          </Col>
        </Row>
        <h1>
          Demo calculadora de cambio de la temperatura de un servidor{" "}
        </h1>{" "}
        <br />
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <Form.Label>Temperatura Inicial:</Form.Label>
                <Form.Control
                  type="number"
                  value={initialTemp}
                  onChange={(e) => setInitialTemp(Number(e.target.value))}
                />
              </Col>
              <Col>
                <Form.Label>Temperatura Ambiente:</Form.Label>

                <Form.Control
                  type="number"
                  value={ambientTemp}
                  onChange={(e) => setAmbientTemp(Number(e.target.value))}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Label>Tiempo (en horas): </Form.Label>
                <Form.Control
                  type="number"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                />
              </Col>
              <Col>
                <Form.Label>Constante k:</Form.Label>

                <Form.Control
                  type="number"
                  step="0.01"
                  value={k}
                  onChange={(e) => setK(Number(e.target.value))}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={3}>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => calculateTemperature(e)}
                >
                  Calcular Temperatura
                </Button>
              </Col>
              <Col xs={3}>
                Tiempo: <b>{time}</b> <br />
                Temperatura: <b>{valorFinal}°C</b>
              </Col>
              <Col>
                {valorFinal ? (
                  <p>
                    {" "}
                    Si nos encontramos a una temperatura ambiente de:{" "}
                    <b>{ambientTemp}°C</b> y una temperatura inicial de:{" "}
                    <b>{initialTemp}°C</b> podemos determinar que la temperatura
                    del servidor después de un tiempo de: <b>{time}</b> horas
                    será <b>{valorFinal}°C</b>{" "}
                  </p>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
        Desarrollado por: Enderson Montaña y Alejandro Cinfuente
      </Container>
    </div>
  );
}
export default App;
