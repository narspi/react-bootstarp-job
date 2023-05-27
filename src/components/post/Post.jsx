import { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

const Post = ({ id, title, body, userId }) => {
  const [show, setShow] = useState(false);

  const handleCommentsShow = () => {
    setShow(!show);
  };

  return (
    <Col xl={3} lg={4} md={6}>
      <Card className="h-100">
        <LinkContainer to={`user/${userId}`}>
          <Card.Link>
            <Card.Img variant="top" src="./placeholder.jpg" />
          </Card.Link>
        </LinkContainer>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Коментарии</Accordion.Header>
              <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item>
                    <span>Eliseo@gardner.biz</span>
                    <div>
                      laudantium enim quasi est quidem magnam voluptate ipsam
                      eos\ntempora quo necessitatibus\ndolor quam autem
                      quasi\nreiciendis et nam sapiente accusantium
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Eliseo@gardner.biz</span>
                    <div>
                      laudantium enim quasi est quidem magnam voluptate ipsam
                      eos\ntempora quo necessitatibus\ndolor quam autem
                      quasi\nreiciendis et nam sapiente accusantium
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Eliseo@gardner.biz</span>
                    <div>
                      laudantium enim quasi est quidem magnam voluptate ipsam
                      eos\ntempora quo necessitatibus\ndolor quam autem
                      quasi\nreiciendis et nam sapiente accusantium
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Eliseo@gardner.biz</span>
                    <div>
                      laudantium enim quasi est quidem magnam voluptate ipsam
                      eos\ntempora quo necessitatibus\ndolor quam autem
                      quasi\nreiciendis et nam sapiente accusantium
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <span>Eliseo@gardner.biz</span>
                    <div>
                      laudantium enim quasi est quidem magnam voluptate ipsam
                      eos\ntempora quo necessitatibus\ndolor quam autem
                      quasi\nreiciendis et nam sapiente accusantium
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
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
