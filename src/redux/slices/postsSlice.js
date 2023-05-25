import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  page: 1,
  isLoading: false
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.items = action.payload;
      state.isLoading = true;
    },
    setPage: (state,action) => {
      state.page = action.payload;
      state.isLoading = false;
    }
  },
});

export const getPostsSelector = (state) => state.posts.items;
export const getPageSelector = (state) => state.posts.page;
export const isLoadingSelector = (state) => state.posts.isLoading;


export const requestSetPostConst = 'posts/requestSetPost';
export const { setPosts,setPage } = postsSlice.actions;
export const requestSetPost = createAction(requestSetPostConst);

export default postsSlice.reducer;
