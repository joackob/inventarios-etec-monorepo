import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEntornosMock } from "../service/service-mock";
import { getEntornos } from "../service/";
import { config } from "../../../config";

const setupEntornos = createAsyncThunk(
  "set/entornos",
  async () => await getEntornos(),
);

const setupMock = createAsyncThunk("set/entornos/mock", () =>
  getEntornosMock(),
);

export const setup =
  config["environment"] === "development" ? setupMock : setupEntornos;
