import axios from "axios";
import { ItemInventory, ItemInventoryProps } from "../models";
import { api } from "../api";

export const getItems = async (): Promise<ItemInventory[]> => {
  const res = await axios.get(api.items);
  return res.data["items"];
};

export const postItem = async (
  item: ItemInventoryProps,
): Promise<ItemInventory> => {
  const res = await axios.post(api.items, item);
  return {
    ...item,
    id: res.data.id,
  };
};

export const deleteItem = async (
  item: ItemInventory,
): Promise<{ id: string; wasRemoved: boolean }> => {
  const res = await axios.delete(`${api.items}/${item.id}`);
  return {
    id: item.id,
    wasRemoved: res.status === 204,
  };
};
