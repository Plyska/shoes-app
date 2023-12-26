import { instance } from "../config/axios";

export const deleteShoes = async (shoesId: string): Promise<any> => {
  await instance.delete(`${shoesId}`);
};
