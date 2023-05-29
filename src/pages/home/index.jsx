import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import MainPosts from './../../components/posts/MainPosts';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Home = () => {
  const dispatch = useDispatch();

  const [isSearch, setIsSearch] = useState(false);


  const handlerSearchChange = (event) => {
    const value = event.target.value;
    if (value.length > 0) {
      setIsSearch(true);
      //dispatch(requestSetSearchPosts(value));
    } else {
      setIsSearch(false);
    }
  };

  console.log(isSearch)

  return (
    <main className="flex-grow-1">
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
                type="search"
              />
            </InputGroup>
          </Col>
        </Row>
        {!isSearch && <MainPosts />}
      </Container>
    </main>
  );
};

export default Home;
