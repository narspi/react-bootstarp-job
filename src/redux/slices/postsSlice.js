import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.items = action.payload
    }
  },
});

export const { setPosts } = postsSlice.actions;

export const getPosts = state => state.posts.items;


export default postsSlice.reducer;