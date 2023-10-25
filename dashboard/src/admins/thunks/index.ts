import { createAsyncThunk } from "@reduxjs/toolkit";
import { AdminProps } from "../models";
import { getAdmins, postAdmin } from "../service";
import { getAdminsMock, postAdminMock } from "../service/mock";
import { config } from "../../config";

const addAdmin = createAsyncThunk(
  "admin/post",
  async (data: AdminProps) => await postAdmin(data),
);

const setAdmins = createAsyncThunk("admins/get", async () => await getAdmins());

const addMock = createAsyncThunk(
  "admin/post/mock",
  async (data: AdminProps) => await postAdminMock(data),
);

const setMocks = createAsyncThunk(
  "admins/get/mock",
  async () => await getAdminsMock(),
);

export const add = config.mode_env === "development" ? addMock : addAdmin;
export const set = config.mode_env === "development" ? setMocks : setAdmins;
