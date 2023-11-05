import { ItemInventory, ItemInventoryProps } from "../models";
import uuid from "react-native-uuid";

export const getItemsMock = (): ItemInventory[] => {
  return [
    {
      id: "1",
      nombre: "Entorno 101",
      piso: 1,
    },
    {
      id: "2",
      nombre: "Entorno 102",
      piso: 1,
    },
    {
      id: "3",
      nombre: "Entorno 103",
      piso: 1,
    },
    {
      id: "4",
      nombre: "Entorno 104",
      piso: 1,
    },
  ];
};

export const postItemMock = (item: ItemInventoryProps): ItemInventory => {
  return {
    ...item,
    id: uuid.v4().toString(),
  };
};

export const deleteItemMock = (
  item: ItemInventory
): { id: string; wasRemoved: boolean } => {
  return {
    id: item.id,
    wasRemoved: true,
  };
};
