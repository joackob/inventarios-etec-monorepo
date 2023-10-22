import { Admin, AdminProps } from "../models";
import { v4 as uuid } from "uuid";

export const postAdminMock = (data: AdminProps): Promise<Admin> => {
  const res = {
    ...data,
    id: uuid(),
    url: "/",
  };
  return Promise.resolve(res);
};

export const getAdminsMock = (): Promise<Admin[]> => {
  const res = [
    {
      nombre: "Juan",
      apellido: "Perez",
      email: "jperez@gmail.com",
      id: uuid(),
      url: "/",
    },
    {
      nombre: "Pedro",
      apellido: "Gomez",
      email: "pgomez@gmail.com",
      id: uuid(),
      url: "/",
    },
  ];
  return Promise.resolve(res);
};
