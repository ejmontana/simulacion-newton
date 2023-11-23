// Importando useState de React para manejar el estado
import { useState } from "react";

// Importando componentes de react-bootstrap para la interfaz de usuario
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

// Definición del componente funcional App
function App() {
  // Estados para almacenar temperatura inicial, temperatura ambiente, tiempo, constante k, y valor final
  const [initialTemp, setInitialTemp] = useState(0); // Estado para la temperatura inicial
  const [ambientTemp, setAmbientTemp] = useState(0); // Estado para la temperatura ambiente
  const [time, setTime] = useState(0); // Estado para el tiempo
  const [k, setK] = useState(0); // Estado para la constante de proporcionalidad k
  const [valorFinal, setValorFinal] = useState(0); // Estado para almacenar el resultado del cálculo

  // Función para calcular la temperatura final
  const calculateTemperature = () => {
    // Fórmula de cálculo de la nueva temperatura
    const resultado1 = ambientTemp + (initialTemp - ambientTemp) * Math.exp(-k * time);
    setValorFinal(resultado1.toFixed(2)); // Estableciendo el resultado en el estado valorFinal
    // Cálculo alternativo y registro en la consola
    const C = initialTemp - ambientTemp;
    const resultado2 = C * Math.exp(-k * time) + ambientTemp;
    console.log(resultado1, resultado2);
  };

  // Renderizado del componente
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <Container style={{ width: "60%" }}>
        <Row>
          {/* Imagen y detalles del curso */}
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
        {/* Título de la aplicación */}
        <h1>
          Demo calculadora de cambio de la temperatura de un servidor{" "}
        </h1>{" "}
        <br />
        {/* Tarjeta para la interfaz de entrada y salida de datos */}
        <Card>
          <Card.Body>
            {/* Formulario para entrada de datos */}
            <Row>
              <Col>
                {/* Campo para la temperatura inicial */}
                <Form.Label>Temperatura Inicial:</Form.Label>
                <Form.Control
                  type="number"
                  value={initialTemp}
                  onChange={(e) => setInitialTemp(Number(e.target.value))}
                />
              </Col>
              {/* Campo para la temperatura ambiente */}
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
              {/* Campo para el tiempo */}
              <Col>
                <Form.Label>Tiempo (en horas): </Form.Label>
                <Form.Control
                  type="number"
                  value={time}
                  onChange={(e) => setTime(Number(e.target.value))}
                />
              </Col>
              {/* Campo para la constante k */}
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
              {/* Botón para calcular la temperatura */}
              <Col xs={3}>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => calculateTemperature(e)}
                >
                  Calcular Temperatura
                </Button>
              </Col>
              {/* Mostrando tiempo y temperatura calculada */}
              <Col xs={3}>
                Tiempo: <b>{time}</b> <br />
                Temperatura: <b>{valorFinal}°C</b>
              </Col>
              {/* Mensaje condicional basado en el resultado */}
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
        {/* Pie de página con créditos */}
        Desarrollado por: Enderson Montaña y Alejandro Cinfuente
      </Container>
    </div>
  );
}

// Exportando el componente App
export default App;
