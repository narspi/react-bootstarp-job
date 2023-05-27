import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  info: {},
  isLoading: false,
  userPosts: [],
  isLoadingPosts: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.info = action.payload;
      state.isLoading = true;
    },
    errorRequestUser: (state) => {
      (state.info = {}), (state.isLoading = false);
    },
    setUserPosts: (state, action) => {
      (state.userPosts = action.payload), (state.isLoadingPosts = true);
    },
    errorRequestUserPosts: (state) => {
      (state.posts = {}), (state.isLoadingPosts = false);
    },
  },
});

export const getUserInfoSelector = (state) => state.user.info;
export const isLoadingSelector = (state) => state.user.isLoading;
export const isLoadingPostsSelector = (state) => state.user.isLoadingPosts;
export const getUserPostsSelector = (state) => state.user.userPosts;

export const requestSetUserConst = "user/requestSetUser";
export const requestSetUser = createAction(requestSetUserConst);

export const requestSetUserPostsConst = "user/requestSetUserPosts";
export const requestSetUserPosts = createAction(requestSetUserPostsConst);

export const {
  setUserInfo,
  errorRequestUser,
  setUserPosts,
  errorRequestUserPosts,
} = userSlice.actions;

export default userSlice.reducer;
