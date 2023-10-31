export type ItemInventoryProps = {
  nombre: string;
  marca: string;
  numero_serie: string;
};

export type ItemInventory = ItemInventoryProps & {
  id: number;
};
