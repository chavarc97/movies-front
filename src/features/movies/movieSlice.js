import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieService from "./movieService";

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

// load movies
export const loadMovies = createAsyncThunk(
  "movies/get",
  async (_, thunkAPI) => {
    try {
      return await movieService.getMovies();
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create movie
export const createMovie = createAsyncThunk(
  "movies/create",
  async (movie, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await movieService.createMovie(movie, token);
    } catch (error) {
      const message =
        error.response?.data?.message || error.message || error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// create Slice
export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMovies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies = action.payload.movies;
      })
      .addCase(loadMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createMovie.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.movies.push(action.payload);
      })
      .addCase(createMovie.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = movieSlice.actions;
export default movieSlice.reducer;
