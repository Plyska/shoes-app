import { instance } from "../config/axios";
import { DrawerForm } from "../types";

export const addNewShoes = async (shoes: DrawerForm): Promise<any> => {
  await instance.post("", shoes)
};
