import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Главная</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>Обо мне</Nav.Link>
            </LinkContainer>
          </Nav>
          <a href="tel:+798712628292">+798712628292</a>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
