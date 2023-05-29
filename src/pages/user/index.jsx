import { useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import {
  isLoadingSelector,
  isLoadingPostsSelector,
  getUserInfoSelector,
  getUserPostsSelector,
  requestSetUser,
  requestSetUserPosts,
} from "./../../redux/slices/userSlice";
import { useEffect } from "react";

const UserPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isLoading = useSelector(isLoadingSelector);
  const isLoadingPosts = useSelector(isLoadingPostsSelector);
  const userInfo = useSelector(getUserInfoSelector);
  const userPosts = useSelector(getUserPostsSelector);

  const dispatch = useDispatch();

  const showUser = isLoading && userInfo.id === Number(id);

  useEffect(() => {
    if (!showUser) dispatch(requestSetUser(id));
  }, []);

  useEffect(() => {
    if (
      (isLoading && !isLoadingPosts) ||
      (isLoading && userInfo.id !== Number(id))
    )
      dispatch(requestSetUserPosts(id));
  }, [isLoading]);

  return (
    <main className="flex-grow-1">
      <Container>
        <Row>
          <Col className="py-4">
            {showUser ? (
              <>
                <div>
                  <h1>
                    {userInfo.name}({userInfo.username})
                  </h1>
                </div>
                <div>
                  <span>Email: </span>
                  <a href={`malito:${userInfo.email}`}>{userInfo.email}</a>
                </div>
                <div>
                  <span>Phone: {userInfo.phone}</span>
                </div>
                <div>
                  <span>Website: </span>
                  <a href={userInfo.website}>{userInfo.website}</a>
                </div>
                <h2 className="mt-5 mb-3">Посты Юзера</h2>
                {isLoadingPosts ? (
                  <>
                    {userPosts.map((post) => (
                      <div key={post.id} className="mt-5">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <h4>Комментарии к посту</h4>
                        <ListGroup>
                          {post.comments.map((comment) => (
                            <ListGroup.Item key={comment.id}>
                              <span className="fw-bold">
                                Email: {comment.email}
                              </span>
                              <div style={{ fontSize: "12px" }}>
                                {comment.body}
                              </div>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </div>
                    ))}
                  </>
                ) : (
                  <div>Загрузка постов .....</div>
                )}
              </>
            ) : (
              <div>загрузка .....</div>
            )}
            <Button variant="link" onClick={() => navigate(-1)}>
              Кнопка назад
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserPage;
