import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchPosts: (state, action) => {
      state.posts = action.payload;
      state.isLoading = true;
    },
    clearSearchPosts: (state) => {
      state.posts = [];
      state.isLoading = false;
    },
    setPostComments: (state, action) => {
      const currentPost = state.posts.find(
        (post) => post.id === action.payload.id
      );
      currentPost.comments = action.payload.comments;
      currentPost.isLoadingComments = true;
    },
    errorRequestPostComments: (state, action) => {
      const currentPost = state.posts.find(
        (post) => post.id === action.payload.id
      );
      currentPost.comments = [];
      currentPost.isLoadingComments = false;
    },
  },
});

export const isLoadingSearchPostsSelector = (state) => state.search.isLoading;
export const getSearchPostsSelector = (state) => state.search.posts;

export const isLoadingPostCommentsSelector = (id) => (state) =>
  state.search.posts.find((item) => item.id === id).isLoadingComments;

export const getPostCommentsSelector = (id) => (state) =>
  state.search.posts.find((item) => item.id === id).comments;

export const requestSetSearchPostsConst = "search/requestSetSearchPosts";
export const requestSetSearchPosts = createAction(requestSetSearchPostsConst);

export const requestSetSearchCommentsConst = "search/requestSetComments";
export const requestSetSearchComments = createAction(requestSetSearchCommentsConst);

export const { setSearchPosts,clearSearchPosts,setPostComments,errorRequestPostComments } = searchSlice.actions;

export default searchSlice.reducer;
