import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";

export default configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
