import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token:null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload.others;
      state.token = action.payload.token
    },
    register(state, action) {
      state.user = action.payload.others;
      state.token = action.payload.token
    },
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.clear();
    },
    updateSuccess(state, action){
      state.user = action.payload
    }
  },
});

export const { login, register, logout, updateSuccess } = authSlice.actions;
export default authSlice.reducer;
