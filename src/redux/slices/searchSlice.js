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
      state.items = [];
      state.isLoading = false;
    },
  },
});

export const isLoadingSearchPostsSelector = (state) => state.search.isLoading;
export const getSearchPostsSelector = (state) => state.search.posts;

export const requestSetSearchPostsConst = "search/requestSetSearchPosts";
export const requestSetSearchPosts = createAction(requestSetSearchPostsConst);

export const { setSearchPosts,clearSearchPosts } = searchSlice.actions;

export default searchSlice.reducer;
