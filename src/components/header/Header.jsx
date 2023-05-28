import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          <Button
            variant="outline-primary"
            onClick={handleShow}
            className="ms-2 lh-1"
          >
            <RxHamburgerMenu className="lh-1" />
          </Button>
          <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Body>
              <div className="d-flex">
                <img
                  className="img-fluid w-50"
                  src="/alexander.jpg"
                  alt="alexander"
                />
                <div className="ms-3">
                  <div>Александр Иванов</div>
                  <div>
                    <a href="tel:_79871268292">89871268292</a>
                  </div>
                  <div>
                    <a href="malito:ivanovmichurina@gmail.com">
                      ivanovmichurina@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <Nav variant="pills" className="mt-4 text-center">
                <LinkContainer to="/">
                  <Nav.Link onClick={handleClose}>Главная</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                  <Nav.Link onClick={handleClose}>Обо мне</Nav.Link>
                </LinkContainer>
              </Nav>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
