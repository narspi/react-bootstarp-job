import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./slices/postsSlice";
import createSagaMiddleware from 'redux-saga';
import getPostsWatcher from "./sagas/getPosts";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer : {
    posts: postsSliceReducer
  },
  devTools: true,
  middleware: [
    sagaMiddleware
  ]
});

sagaMiddleware.run(getPostsWatcher);