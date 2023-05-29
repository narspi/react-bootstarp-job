import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getPostsSelector,
  getPageSelector,
  isLoadingSelector,
  requestSetPost,
} from "../../redux/slices/postsSlice";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Post from "../../components/posts/Post";
import PostPreloader from "../../components/posts/Preloader";
import PaginationBlock from "../../components/pagination";

const MainPosts = () => {
  const dispatch = useDispatch();
  const selectItems = useSelector(getPostsSelector);
  const page = useSelector(getPageSelector);
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    if (!isLoading) dispatch(requestSetPost({ page: page, limit: 12 }));
  }, [page]);

  return (
    <>
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
    </>
  );
};

export default MainPosts;
