import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostsSelector,getPageSelector,isLoadingSelector,requestSetPost } from "../../redux/slices/postsSlice";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "../../components/post/Post";
import PostPreloader from "../../components/post/Preloader";
import PaginationBlock from "../../components/pagination";

const Home = () => {
  const dispatch = useDispatch();
  const selectItems = useSelector(getPostsSelector);
  const page = useSelector(getPageSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(requestSetPost({page: page,limit: 12}))
  }, [page]);
  

  return (
    <main>
      <Container className="mt-4">
        <Row>
          <Col>
            <h1>Страница постов</h1>
          </Col>
        </Row>
        <Row className="g-4">
          {isLoading ? (
            selectItems.map(({ id, title, body, userId }) => (
              <Post key={id} title={title} body={body} userId={userId} />
            ))
          ) : (
            <PostPreloader length={12} />
          )}
        </Row>
        <Row className="mt-4">
          <Col>
            <PaginationBlock/>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
