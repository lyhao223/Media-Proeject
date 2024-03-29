import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function useThunk(thunk) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(null);

  const dispatch = useDispatch();

  const handleThunk = useCallback(
    (arg) => {
      setLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [dispatch, thunk]
  );
  return [handleThunk, isLoading, isError];
}
