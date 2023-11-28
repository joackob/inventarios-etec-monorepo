import axios from "axios";
import { api } from "../api";
import { Entorno } from "../models";

export const getEntornos = async (): Promise<Entorno[]> => {
  const res = await axios.get(api.entornos);
  return res.data.entornos;
};
