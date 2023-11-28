import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Entorno } from "../models";
import { setup } from "../thunks";

export enum StatusEntornosState {
  loading,
  online,
  offline,
  error,
  success,
  noevents,
}

export type EntornoState = {
  values: Entorno[];
  status: StatusEntornosState;
  message: string;
};

const initialState: EntornoState = {
  values: [],
  status: StatusEntornosState.loading,
  message: "",
};

const entornosSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    closeAlert: (state) => {
      return {
        ...state,
        status: StatusEntornosState.noevents,
      };
    },
  },
  extraReducers(builder) {
    builder.addCase(
      setup.fulfilled,
      (state, action: PayloadAction<Entorno[]>) => {
        const { payload: items } = action;
        return {
          ...state,
          values: items,
          status: StatusEntornosState.online,
        };
      },
    );
    builder.addCase(setup.rejected, (state) => {
      return {
        ...state,
        status: StatusEntornosState.offline,
      };
    });
    builder.addCase(setup.pending, (state) => {
      return {
        ...state,
        status: StatusEntornosState.loading,
      };
    });
  },
});

export const entornosReducer = entornosSlice.reducer;
export const { closeAlert } = entornosSlice.actions;
