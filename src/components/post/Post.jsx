import { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Alert from "react-bootstrap/Alert";
import Button from 'react-bootstrap/Button';

const Post = ({ id, title, body, userId }) => {
  const [show, setShow] = useState(false);
  return (
    <Col key={id} xl={3} lg={4} md={6}>
      <Card className="h-100">
        <LinkContainer to={`user/${userId}`}>
          <Card.Link>
            <Card.Img variant="top" src="./placeholder.jpg" />
          </Card.Link>
        </LinkContainer>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Alert show={show} variant="success">
            <div>
              тут будут комментарии
            </div>
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>
          {!show && <Button onClick={() => setShow(true)}>Комментарии</Button>}
        </Card.Body>
        <Card.Footer>
          <LinkContainer to={`user/${userId}`}>
            <Card.Link>{`#User_id${userId}`}</Card.Link>
          </LinkContainer>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Post;
