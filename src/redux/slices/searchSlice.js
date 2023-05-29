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
      state.items = action.payload;
      state.isLoading = true;
    },
    errorSearchPosts: (state) => {
      state.items = [];
      state.isLoading = false;
    },
  },
});

export const isLoadingSearchPostsSelector = (state) => state.posts.isLoading;

export const requestSetSearchPostsConst = "search/requestSetSearchPosts";
export const requestSetSearchPosts = createAction(requestSetSearchPostsConst);

export const { setSearchPosts,errorSearchPosts } = searchSlice.actions;

export default searchSlice.reducer;
