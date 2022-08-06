import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./goodsApi";


export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware)
});