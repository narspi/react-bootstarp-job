import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  page: 0,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const getPostsSelector = (state) => state.posts.items;

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
