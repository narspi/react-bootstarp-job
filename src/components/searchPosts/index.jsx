import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  isLoadingSearchPostsSelector,
  requestSetSearchPosts,
  getSearchPostsSelector,
  clearSearchPosts,
} from "./../../redux/slices/searchSlice";
import SearchPost from "../posts/SearchPost";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

const SearchPosts = ({ title }) => {
  const dispatch = useDispatch();
  const isLoadingSearchPosts = useSelector(isLoadingSearchPostsSelector);
  const searchPosts = useSelector(getSearchPostsSelector);

  useEffect(() => {
    dispatch(requestSetSearchPosts(title));
    return () => {
      dispatch(clearSearchPosts());
    };
  }, [title]);

  return (
    <>
      <Row>
        <Col>
          <Alert variant={'info'}>
            К сожалению не уверен сделал ли поиск который вы ожидаете увидеть. В апи есть поиск по тайтлу только по полному. Частичный совпадению по тексту только по всем полям. 3 вариант отфильтровать все посты на клиенте но это на мой взгляд не адекватное решение. Сделал по итогу первый вариант!
          </Alert>
        </Col>
      </Row>
      <Row className="mb-5">
        {isLoadingSearchPosts ? (
          <>
            {searchPosts.length > 0 ? (
              <>
                {searchPosts.map(({ id, title, body, userId }) => (
                  <SearchPost
                    key={id}
                    id={id}
                    title={title}
                    body={body}
                    userId={userId}
                  />
                ))}
              </>
            ) : (
              <div>Не найден ни один пост!</div>
            )}
          </>
        ) : (
          <div>Введётся поиск</div>
        )}
      </Row>
    </>
  );
};

export default SearchPosts;
