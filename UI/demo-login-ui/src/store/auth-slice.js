import { createSlice } from "@reduxjs/toolkit";
// import { authenticationHandler } from "@/pages/Authentication/SignIn/actions";

const userName = localStorage.getItem("userName")
  ? localStorage.getItem("userName")
  : null;

const initialState = {
  loading: false,
  userName,
  error: null,
  success: false,
  statusCode: -1,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(authenticationHandler.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    //   state.statusCode = -1;
    // });
    // builder.addCase(authenticationHandler.fulfilled, (state, { payload }) => {
    //   state.loading = false;
    //   state.userName = payload.userName;
    //   state.success = true;
    //   state.statusCode = 200;
    //   state.error = null;
    // });
    // builder.addCase(authenticationHandler.rejected, (state, { payload }) => {
    //   state.loading = false;
    //   state.success = false;
    //   state.userToken = null;
    //   state.error = payload.error;
    //   state.statusCode = payload ? parseInt(payload?.response?.status) : -1;
    // });
  },
});

export default authSlice;
