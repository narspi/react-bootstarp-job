import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  page: 1,
  isLoading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.items = action.payload;
      state.isLoading = true;
    },
    setPage: (state, action) => {
      state.page = action.payload;
      state.isLoading = false;
    },
    errorRequest: (state) => {
      (state.items = []), (state.isLoading = false);
    },
    setPostComments: (state, action) => {
      const currentPost = state.items.find(
        (item) => item.id === action.payload.id
      );
      currentPost.comments = action.payload.comments;
      currentPost.isLoadingComments = true;
    },
    errorRequestPostComments: (state, action) => {
      const currentPost = state.items.find(
        (item) => item.id === action.payload.id
      );
      currentPost.comments = [];
      currentPost.isLoadingComments = false;
    },
  },
});

export const getPostsSelector = (state) => state.posts.items;
export const getPageSelector = (state) => state.posts.page;
export const isLoadingSelector = (state) => state.posts.isLoading;

export const isLoadingPostCommentsSelector = (id) => (state) =>
  state.posts.items.find((item) => item.id === id).isLoadingComments;

export const getPostCommentsSelector = (id) => (state) =>
  state.posts.items.find((item) => item.id === id).comments;

export const requestSetPostConst = "posts/requestSetPost";
export const requestSetPost = createAction(requestSetPostConst);

export const requestSetPostByTitleConst = "posts/requestSetPostByTitle";
export const requestSetPostByTitle = createAction(requestSetPostConst);

export const requestSetCommentsConst = "posts/requestSetComments";
export const requestSetComments = createAction(requestSetCommentsConst);

export const {
  setPosts,
  setPage,
  errorRequest,
  setPostComments,
  errorRequestPostComments,
} = postsSlice.actions;

export default postsSlice.reducer;
