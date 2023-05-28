import { put, call, takeEvery } from "redux-saga/effects";
import {
  setPosts,
  requestSetPostConst,
  errorRequest,
  requestSetCommentsConst,
  setPostComments,
  errorRequestPostComments
} from "../slices/postsSlice";
import { requestFooPosts } from "../../api/requestFooPosts";
import { requestFooPostComments } from "./../../api/requestFooPostComments";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* getPostsWorker(params) {
  yield call(delay, 500);
  try {
    const data = yield call(requestFooPosts, {
      page: params.payload.page,
      limit: params.payload.limit,
    });
    const newData = data.map((item) => {
      const elem = {
        ...item,
        comments: [],
        isLoadingComments: false,
      };
      return elem;
    });
    yield put(setPosts(newData));
  } catch (err) {
    console.log(err.message);
    yield put(errorRequest());
  }
}

function* getPostsCommentsWorker(params) {
  yield call(delay, 500);
  try {
    const data = yield call(requestFooPostComments, params.payload);
    yield put(setPostComments({id: params.payload, comments: data}));
  } catch (err) {
    console.log(err.message);
    yield put(errorRequestPostComments(params.payload));
  }
}

function* getPostsWatcher() {
  yield takeEvery(requestSetPostConst, getPostsWorker);
  yield takeEvery(requestSetCommentsConst, getPostsCommentsWorker);
}

export default getPostsWatcher;
