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
    {
      id: "2",
      nombre: "Item 2",
      marca: "Description of Item 2",
      numero_de_serie: "fdfdfdfdfdfd",
    },  {
      id: "3",
      nombre: "Item 3",
      marca: "Description of Item  3",
      numero_de_serie: "fdfdfdfdfdfd",
    },  {
      id: "4",
      nombre: "Item 4",
      marca: "Description of Item 4",
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
