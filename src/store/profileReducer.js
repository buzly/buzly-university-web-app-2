import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  name: "",
  id: "",
  isLoggedIn: false,
  isProfileCompelted: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    completeProfile: (state) => {
      state.isProfileCompelted = true;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setLogin: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
    setRegister: (state, action) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
    },
  },
});

export const { loginUser, completeProfile } = profileSlice.actions;

export default profileSlice.reducer;
