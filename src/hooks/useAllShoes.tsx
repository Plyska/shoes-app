import { useState, useEffect } from "react";
import { getAllShoes } from "../api/getAllShoes";

export const useAllShoes = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const response = await getAllShoes();
      setData(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData()
  }, []);

  return { data, loading, error, fetchData };
};
