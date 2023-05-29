import { put, call, takeEvery } from "redux-saga/effects";
import {
    requestSetSearchPostsConst,
    setSearchPosts,
    clearSearchPosts
} from "../slices/searchSlice";
import { requestFooSearchTitle } from "../../api/requestFooPostsByTitle";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));


function* getSearchPostsWorker(params) {
  yield call(delay, 500);
  try {
    const data = yield call(requestFooSearchTitle, params.payload);
    const newData = data.map((item) => {
      const elem = {
        ...item,
        comments: [],
        isLoadingComments: false,
      };
      return elem;
    });
    yield put(setSearchPosts(newData));
  } catch (err) {
    console.log(err.message);
    yield put(clearSearchPosts());
  }
}

function* getSearchWatcher() {
  yield takeEvery(requestSetSearchPostsConst, getSearchPostsWorker);
}

export default getSearchWatcher;
