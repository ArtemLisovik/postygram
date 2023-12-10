import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getReviews } from "./reviewsThunk";

export type Review = {
    message: string,
    name: string,
    avatar?: string
  }
  
  type initialStateType = {
    reviews: Review[]
    loading: boolean;
  }
  
  const initialState: initialStateType = {
    reviews: [],
    loading: false
  };
  
  
  const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
      builder 
        .addCase(getReviews.pending, state => {
          state.loading = true
        })
        .addCase(getReviews.fulfilled, (state, action) => {
          state.reviews = action.payload
          state.loading = false
        })
        .addCase(getReviews.rejected, (state) => {
          state.reviews = []
          state.loading = false
        })
    }
  })
  
  const { reducer, actions } = reviewsSlice;
  
  export default reducer;