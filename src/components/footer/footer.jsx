import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer className="bg-dark py-4">
      <Container>
        <Row>
          <Col className="d-flex justify-content-between">
            <a href="malito:ivanovmichurina@gmail.com">
              ivanovmichurina@gmail.com
            </a>
            <a href="tel:+798712628292">+798712628292</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
