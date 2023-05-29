import { useState } from "react";
import debounce from "lodash.debounce";

import MainPosts from './../../components/posts/MainPosts';
import SearchPosts from "../../components/searchPosts";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [searchState, setSearchState] = useState({isSearch: false, value: ""});
  
  const handlerSearchChange = (event) => {
    const value = event.target.value;
    if (value.length > 0) {
      setSearchState(prev=>({isSearch: true,value: event.target.value}));
    } else {
      setSearchState(prev=>({isSearch: false,value: ''}));
    }
  };

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
        {!searchState.isSearch ? <MainPosts /> : <SearchPosts title={searchState.value}/>}
      </Container>
    </main>
  );
};

export default Home;
