import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../inventario/state";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
