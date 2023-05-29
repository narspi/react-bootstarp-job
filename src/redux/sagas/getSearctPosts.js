import { put, call, takeEvery } from "redux-saga/effects";
import {
    requestSetSearchPostsConst,
    setSearchPosts,
    errorSearchPosts
} from "../slices/searchSlice";
import { requestFooSearchTitle } from "../../api/requestFooPostsByTitle";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));


function* getSearchPostsWorker(params) {
  yield call(delay, 500);
  try {
    const data = yield call(requestFooSearchTitle, params.payload);
    yield put(setSearchPosts(data));
  } catch (err) {
    console.log(err.message);
    yield put(errorSearchPosts());
  }
}

function* getSearchWatcher() {
  yield takeEvery(requestSetSearchPostsConst, getSearchPostsWorker);
}

export default getSearchWatcher;
