import { createAsyncThunk } from "@reduxjs/toolkit";
import { ItemInventory, ItemInventoryProps } from "../models";
import {
  deleteItemMock,
  getItemsMock,
  postItemMock,
} from "../service/service-mock";
import { deleteItem, getItems, postItem } from "../service/";
import { config } from "../../../config";

const setupItems = createAsyncThunk("set/items", async () => await getItems());

const addOneItem = createAsyncThunk(
  "post/item",
  async (item: ItemInventoryProps) => await postItem(item),
);

const removeOneItem = createAsyncThunk(
  "delete/item",
  async (item: ItemInventory) => await deleteItem(item),
);

const setupMock = createAsyncThunk("set/items/mock", () => getItemsMock());

const addOneMock = createAsyncThunk(
  "post/item/mock",
  (item: ItemInventoryProps) => postItemMock(item),
);

const removeOneMock = createAsyncThunk(
  "delete/item/mock",
  (item: ItemInventory) => deleteItemMock(item),
);

export const setup =
  config["environment"] === "development" ? setupMock : setupItems;
export const addOne =
  config["environment"] === "development" ? addOneMock : addOneItem;
export const removeOne =
  config["environment"] === "development" ? removeOneMock : removeOneItem;
