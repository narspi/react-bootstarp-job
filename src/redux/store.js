import { configureStore } from "@reduxjs/toolkit";
import postsSliceReducer from "./slices/postsSlice";
export const store = configureStore({
  reducer : {
    posts: postsSliceReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})