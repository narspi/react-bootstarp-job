import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#home">Главная</Nav.Link>
            <Nav.Link href="#features">Обо мне</Nav.Link>
            <Nav.Link href="#pricing">Услуги</Nav.Link>
          </Nav>
          <a href="tel:+798712628292">+798712628292</a>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
