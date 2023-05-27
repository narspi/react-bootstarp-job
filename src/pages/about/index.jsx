import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
  return (
    <main>
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <img
              src="./alexander.jpg"
              alt="alexander ivanov"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h1 className="">Обо Мне</h1>
            <p>
              Ищу работу в области Front-End разработки. К сожалению не имею
              опыта работы в веб студии и фронт разработки. Есть опыт работы на
              фрилансе в вёрстке. Wordpres как пассивный заработок.
            </p>
          </Col>
          <Col md={12}>
            <h2 className="mt-4">Мои кейсы комерческие</h2>
            <div className="mt-2">
              <h3>Мобиус</h3>
              <img src="./mobuiz.jpg" alt="mobuiz" className="img-fluid mb-4" />
              <a href="https://www.mobius-sklad.ru/">Сылка на сайт</a>
            </div>
          </Col>
          <Col md={12}>
            <h2 className="mt-4">Мои кейсы комерческие</h2>
            <div className="mt-2">
              <h3>Адвокат Шошмарин</h3>
              <img src="./quiz.jpg" alt="mobuiz" className="img-fluid mb-4" />
              <a href="https://228-advokat.hhos.ru">Сылка на сайт</a>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default About;
