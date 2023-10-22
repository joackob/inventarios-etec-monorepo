import axios from "axios";
import { api } from "./api";
import { AdminProps } from "../models";

export const postAdmin = async (data: AdminProps) => {
  const res = await axios.post(api.admins, data);
  return {
    ...data,
    id: res.data.id,
    url: res.data.url,
  };
};

export const getAdmins = async () => {
  const res = await axios.get(api.admins);
  return res.data;
};
