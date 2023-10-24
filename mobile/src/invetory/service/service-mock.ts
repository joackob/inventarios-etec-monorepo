import { ItemInventory, ItemInventoryProps } from "../models";
import uuid from "react-native-uuid";

export const getItemsMock = (): ItemInventory[] => {
  return [
    {
      id: "1",
      nombre: "Item 1",
      marca: "Description of Item 1",
      numero_de_serie: "fdfdfdfdfdfd",
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
  item: ItemInventory,
): { id: string; wasRemoved: boolean } => {
  return {
    id: item.id,
    wasRemoved: true,
  };
};
