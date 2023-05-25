import { useSelector, useDispatch } from "react-redux";
import { getPostsSelector } from "../../redux/slices/postsSlice";
import { useEffect } from "react";
import { requestSetPost } from "../../redux/slices/postsSlice";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "../../components/post/Post";
import { delay as delayFoo } from "../../utils/delay";
import PostPreloader from "../../components/post/Preloader";
import {default as PaginationBlock} from "../../components/pagination";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    delayFoo();
    dispatch(requestSetPost())
  }, []);
  
  const selectItems = useSelector(getPostsSelector);
  console.log(selectItems);

  return (
    <main>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Страница постов</h1>
          </Col>
        </Row>
        <Row className="g-4">
          {/* {selectItems.length > 0 ? (
            selectItems.map(({ id, title, body, userId }) => (
             
              <Post key={id} title={title} body={body} userId={userId} />
            ))
          ) : (
            <PostPreloader length={12} />
          )} */}
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
