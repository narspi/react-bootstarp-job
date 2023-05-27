import { all } from "redux-saga/effects";
import getPostsWatcher from "./getPosts";
import getUserWatcher from "./getUser";

function* rootSagas() {
  yield all([
    getPostsWatcher(),
    getUserWatcher()
  ]);
}

export default rootSagas;
