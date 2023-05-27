import { put, call, takeEvery } from "redux-saga/effects";
import { setPosts, requestSetPostConst,errorRequest } from "../slices/postsSlice";
import { requestFooPosts } from "../../api/requestFooPosts";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* getPostsWorker(params) {
  yield call(delay, 500);
  try {
    const data = yield call(requestFooPosts, {
      page: params.payload.page,
      limit: params.payload.limit,
    });
    yield put(setPosts(data));
  } catch (err) {
    console.log(err.message);
    yield put(errorRequest());
  }
}

function* getPostsWatcher() {
  yield takeEvery(requestSetPostConst, getPostsWorker);
}

export default getPostsWatcher;
