import { put, call, takeEvery } from "redux-saga/effects";
import {
  requestSetUserConst,
  requestSetUserPostsConst,
  setUserInfo,
  errorRequestUser,
  setUserPosts,
  errorRequestUserPosts,
} from "../slices/userSlice";
import { requestFooUser } from "../../api/requestFooUser";
import { requestFooUserPosts } from './../../api/requestFooUserPosts';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export function* getUserInfoWorker(params) {
  yield call(delay, 500);
  try {
    const data = yield call(requestFooUser, params.payload);
    yield put(setUserInfo(data));
  } catch (err) {
    console.log(err.message);
    yield put(errorRequestUser());
  }
}


export function* getUserPostsWorker(params) {
    yield call(delay, 500);
    console.log('worker')
    try {
      const data = yield call(requestFooUserPosts, params.payload);
      yield put(setUserPosts(data));
    } catch (err) {
      console.log(err.message);
      yield put(requestFooUserPosts());
    }
  }

function* getUserWatcher() {
  yield takeEvery(requestSetUserConst, getUserInfoWorker);
  yield takeEvery(requestSetUserPostsConst, getUserPostsWorker);
}

export default getUserWatcher;
