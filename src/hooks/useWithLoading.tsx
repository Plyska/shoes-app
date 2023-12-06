import { useContext, useCallback } from "react";
import { Store } from "../App";

export const useWithLoading = <T,>(apiCall: T) => {
  const { setLoading } = useContext(Store);
  const load = useCallback(
    (args: unknown) => {
      setLoading(true);
      return (apiCall as Function)(args)
        .then((res: unknown) => {
          setLoading(false);
          return res;
        })
        .catch((err: unknown) => {
          setLoading(false);
          console.error(err);
        });
    },
    [apiCall, setLoading]
  );

  return load as typeof apiCall;
};
