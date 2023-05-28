import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPostsSelector,
  getPageSelector,
  isLoadingSelector,
  requestSetPost,
  requestSetPostByTitle,
} from "../../redux/slices/postsSlice";
import debounce from "lodash.debounce";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "../../components/post/Post";
import PostPreloader from "../../components/post/Preloader";
import PaginationBlock from "../../components/pagination";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Home = () => {
  const dispatch = useDispatch();
  const selectItems = useSelector(getPostsSelector);
  const page = useSelector(getPageSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (!isLoading) dispatch(requestSetPost({ page: page, limit: 12 }));
  }, [page]);

  const foo = () => {
    console.log("debounce");
  };

  const handlerSearchChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <main>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Страница постов</h1>
            <InputGroup
              className="mb-3"
              onChange={debounce(handlerSearchChange, 300)}
            >
              <Form.Control
                placeholder="Поиск по заголовку"
                aria-label="Поиск по заголовку"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="g-4">
          {isLoading ? (
            selectItems.map(({ id, title, body, userId }) => (
              <Post key={id} id={id} title={title} body={body} userId={userId} />
            ))
          ) : (
            <PostPreloader length={12} />
          )}
        </Row>
        <Row className="mt-4">
          <Col>
            <PaginationBlock />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
