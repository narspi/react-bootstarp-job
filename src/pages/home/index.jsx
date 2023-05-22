import { useSelector, useDispatch } from "react-redux";
import { getPostsSelector } from "../../redux/slices/postsSlice";
import { useEffect } from "react";
import { setPosts } from "../../redux/slices/postsSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "react-bootstrap/Pagination";
import Post from "../../components/post/post";
import { delay as delayFoo } from "../../utils/delay";
import PostPreloader from "../../components/post/preloader";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    delayFoo();
    fetch("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=12")
      .then((response) => response.json())
      .then((json) => dispatch(setPosts(json)));
  }, []);
  const selectItems = useSelector(getPostsSelector);

  console.log(selectItems);

  let active = 1;
  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <main>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Страница постов</h1>
          </Col>
        </Row>
        <Row className="g-4">
          {selectItems.length > 0 ? (
            selectItems.map(({ id, title, body, userId }) => (
              <Post key={id} title={title} body={body} userId={userId} />
            ))
          ) : (
            <PostPreloader length={12} />
          )}
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
