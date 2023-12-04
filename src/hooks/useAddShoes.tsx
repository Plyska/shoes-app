import { addNewShoes } from "../api/addNewShoes";

export const useAddShoes = (onDataUpdate: () => void) => {
  const addShoes = async (newItem: any) => {
    try {
      await addNewShoes(newItem);
      onDataUpdate();
    } catch (error) {
      console.error("An error occurred while adding the item.");
    }
  };

  return { addShoes };
};
