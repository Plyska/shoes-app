import { useContext, useCallback } from "react";
import { Store } from "../App";


export const useWithLoading = <T,>(apiCall: T) => {
  const { setLoading, setAlert } = useContext(Store);
  const load = useCallback(
    (args: unknown) => {
      setLoading(true);
      return (apiCall as Function)(args)
        .then((res: unknown) => {
          setLoading(false);
          setAlert({
            show: true,
            message: "Success!",
            status: "success"
          })
          return res;
        })
        .catch((err: unknown) => {
          setLoading(false);
          setAlert({
            show: true,
            message: "Something went wrong!",
            status: "error"
          })
          console.error(err);
        });
    },
    [apiCall, setAlert, setLoading]
  );

  return load as typeof apiCall;
};
