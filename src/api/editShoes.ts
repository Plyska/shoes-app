// @ts-nocheck
import { instance } from "../config/axios";
import { DrawerForm } from "../types";

export const editShoes = async (
  shoes: DrawerForm,
  shoesId: string
): Promise<any> => {
  delete shoes._id;
  await instance.put(`${shoesId}`, shoes)
};
