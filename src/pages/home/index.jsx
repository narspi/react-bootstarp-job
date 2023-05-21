import { useSelector, useDispatch } from "react-redux";
import { getPosts } from "../../redux/slices/postsSlice";
import { useEffect } from "react";
import { setPosts } from "../../redux/slices/postsSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Post from "../../components/post/post";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=12")
      .then((response) => response.json())
      .then((json) => dispatch(setPosts(json)));
  }, []);
  const selectItems = useSelector(getPosts);

  console.log(selectItems);

  let active = 2;
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <main>
      <Container className="mt-4">
        <Row className="g-4">
          {selectItems.map(({ id, title, body, userId }) => (
            <Post key={id} title={title} body={body} userId={userId} />
          ))}
        </Row>
        <Row className="mt-4">
          <Col>
            <Pagination>{items}</Pagination>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
