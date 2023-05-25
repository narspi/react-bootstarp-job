import { createSlice, createAction } from "@reduxjs/toolkit";

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


export const requestSetPostConst = 'posts/requestSetPost';
export const { setPosts } = postsSlice.actions;
export const requestSetPost = createAction(requestSetPostConst);

export default postsSlice.reducer;
