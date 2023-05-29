import { all } from "redux-saga/effects";
import getPostsWatcher from "./getPosts";
import getUserWatcher from "./getUser";
import getSearctPosts from './getSearctPosts';

function* rootSagas() {
  yield all([
    getPostsWatcher(),
    getUserWatcher(),
    getSearctPosts()
  ]);
}

export default rootSagas;
