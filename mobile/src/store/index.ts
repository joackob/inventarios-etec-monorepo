import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "../inventario/state";
import { entornosReducer } from "../entornos/state";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    entornos: entornosReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
