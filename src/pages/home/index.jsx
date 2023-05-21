import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { useEffect } from "react";
import { setPosts } from "../../redux/slices/postsSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=10&_limit=10")
      .then((response) => response.json())
      .then((json) => dispatch(setPosts(json)));
  }, []);
  const selectItems = useSelector(getPosts);

  console.log(selectItems);

  return (
    <main>
      <Container>
        <Row>
          {selectItems.map(({id,title,body}) => (
            <Col key={id} xl={3} lg={4} md={6}>
              <h3>{title}</h3>
              <p>{body}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

export default Home;
