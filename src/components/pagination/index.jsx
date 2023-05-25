import Pagination from "react-bootstrap/Pagination";

const PaginationBlock = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

export default PaginationBlock;
