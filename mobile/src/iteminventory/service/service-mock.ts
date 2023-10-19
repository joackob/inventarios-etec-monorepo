import axios from "axios";
import { API_URI } from "../../api";
import { ItemInventory, ItemInventoryProps } from "../interface";

const num = Math.floor(Math.random() * 10) + 1;

export const api = {
  items: `${API_URI}/api/item/detalle/${num}`,
};

const header = {
  "Content-Type": "application/json",
};

export const getItems = (): ItemInventory[] => {
  return [
    {
      id: "1",
      nombre: "Item 1",
      marca: "Description of Item 1",
      numero_de_serie: "fdfdfdfdfdfd",
    },
  ];
};

export const postItem = async (
  item: ItemInventoryProps,
): Promise<ItemInventory> => {
  const res = await axios.post(api.items, item, {
    headers: header,
  });

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
