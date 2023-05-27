import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./slices/postsSlice";
import userSliceReducer from "./slices/userSlice";
import createSagaMiddleware from 'redux-saga';
import rootSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer : {
    posts: postsSliceReducer,
    user: userSliceReducer
  },
  devTools: true,
  middleware: [
    sagaMiddleware
  ]
});

sagaMiddleware.run(rootSagas);