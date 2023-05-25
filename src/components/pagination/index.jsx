import Pagination from "react-bootstrap/Pagination";
import { useSelector,useDispatch } from "react-redux";
import { getPageSelector,setPage } from "../../redux/slices/postsSlice";

const PaginationBlock = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPageSelector)
  let active = page;
  let items = [];
  for (let number = 1; number <= 9; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>dispatch(setPage(number))}>
        {number}
      </Pagination.Item>
    );
  }

  return <Pagination>{items}</Pagination>;
};

export default PaginationBlock;
