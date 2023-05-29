import { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { LinkContainer } from "react-router-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoadingPostCommentsSelector,
  requestSetComments,
  getPostCommentsSelector,
} from "../../redux/slices/postsSlice";

const Post = ({ id, title, body, userId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const isLoadingPostComments = useSelector(isLoadingPostCommentsSelector(id));

  const handleAccordionClick = () => {
    setOpen(!open);
    if (!isLoadingPostComments) dispatch(requestSetComments(id));
  };

  const comments = useSelector(getPostCommentsSelector(id));

  return (
    <Col lg={4} md={6}>
      <Card>
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
              <Accordion.Header onClick={handleAccordionClick}>
                Коментарии
              </Accordion.Header>
              <Accordion.Body>
                {isLoadingPostComments ? (
                  <ListGroup>
                    {comments.map((comment) => (
                      <ListGroup.Item key={comment.id}>
                        <span className="fw-bold">Email: {comment.email}</span>
                        <div style={{fontSize: '12px'}}>
                          {comment.body}
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                ) : (
                  <ListGroup>
                    <ListGroup.Item>
                      <div>Идёт загрузка</div>
                    </ListGroup.Item>
                  </ListGroup>
                )}
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
