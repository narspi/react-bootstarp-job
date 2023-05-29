import { put, call, takeEvery } from "redux-saga/effects";
import {
    requestSetSearchPostsConst,
    setSearchPosts,
    clearSearchPosts,
    requestSetSearchCommentsConst,
    setPostComments,
    errorRequestPostComments
} from "../slices/searchSlice";
import { requestFooSearchTitle } from "../../api/requestFooPostsByTitle";
import { requestFooPostComments } from './../../api/requestFooPostComments';

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

function* getSearchCommentsWorker (params) {
  yield call(delay, 500);
  try {
    const data = yield call(requestFooPostComments, params.payload);
    yield put(setPostComments({id: params.payload, comments: data}));
  } catch (err) {
    console.log(err.message);
    yield put(errorRequestPostComments(params.payload));
  }
}

function* getSearchWatcher() {
  yield takeEvery(requestSetSearchPostsConst, getSearchPostsWorker);
  yield takeEvery(requestSetSearchCommentsConst,getSearchCommentsWorker)
}

export default getSearchWatcher;
