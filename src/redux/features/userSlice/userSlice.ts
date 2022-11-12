import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "./types";

const initialState: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: (previousUser) => ({
      ...initialState,
    }),
  },
});

export const userReducer = userSlice.reducer;

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = userSlice.actions;
