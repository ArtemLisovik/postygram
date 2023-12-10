import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "api";
import reviews from "containers/Reviews/store/reviewsSlice";

// import trusteeReducer from 'containers/TrusteeList/store/TrusteeSlice'

export const store = configureStore({
    reducer: { [baseApi.reducerPath]: baseApi.reducer, reviews },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
