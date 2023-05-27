import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import {
  isLoadingSelector,
  isLoadingPostsSelector,
  getUserInfoSelector,
  getUserPostsSelector,
  requestSetUser,
  requestSetUserPosts
} from "./../../redux/slices/userSlice";
import { useEffect } from "react";

const UserPage = () => {
  const { id } = useParams();

  const isLoading = useSelector(isLoadingSelector);
  const isLoadingPosts = useSelector(isLoadingPostsSelector);
  const userInfo = useSelector(getUserInfoSelector);
  const userPosts = useSelector(getUserPostsSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestSetUser(id));
  }, []);

  useEffect(()=>{
    if (isLoading) dispatch(requestSetUserPosts(id));
  },[isLoading])

  return (
    <main className="flex-grow-1">
      <Container>
        <Row>
          <Col className="py-4">
            {isLoading ? (
              <>
                <div>
                  <h1>
                    {userInfo.name}({userInfo.username})
                  </h1>
                </div>
                <div>
                  <span>Email: </span><a href={`malito:${userInfo.email}`}>{userInfo.email}</a>
                </div>
                <div>
                  <span>Phone: {userInfo.phone}</span>
                </div>
                <div>
                  <span>Website: </span><a href={userInfo.website}>{userInfo.website}</a>
                </div>
                <h2 className="mt-5 mb-3">Посты Юзера</h2>
                {isLoadingPosts? (
                  <>
                    {userPosts.map(post=>(
                      <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                      </div>
                    ))}
                  </>
                ): (
                  <div>
                    Загрузка постов .....
                  </div>
                )}
              </>
            ) : (
              <div>загрузка .....</div>
            )}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default UserPage;
