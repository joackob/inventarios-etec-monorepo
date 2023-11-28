import { config } from "../../../config";

export const API_URI = config["api-uri"];
export const api = {
  entornos: `${API_URI}/api/entornos`,
};
