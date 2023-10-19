export type ItemInventoryProps = {
  nombre: string;
  marca: string;
  numero_de_serie: string;
};

export type ItemInventory = ItemInventoryProps & {
  id: string;
};
