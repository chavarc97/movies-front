import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// obtain user data from local storage
const user = JSON.parse(localStorage.getItem("user"));

// define initial state
const initialState = {
  user: user ? user : {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// register a new user
export const registerUser = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
    } catch (error) {
      // refactor according to TL
      const message =
        error.response?.data?.message || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// define auth slice

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
    // register user 
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
        })
    // login user
        
  }
});

// export actions
export const { reset } = authSlice.actions;

// export reducer
export default authSlice.reducer;
