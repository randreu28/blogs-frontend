import axios from "axios";
import { useState } from "react";

const baseUrl = "http://localhost:3001/api";

export default function useAction() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  function sendPost<T>(endpoint: string, payload: T) {
    setIsLoading(true);

    const res = axios
      .post<T>(baseUrl + endpoint, payload, {
        validateStatus: (status) => status <= 400,
      })
      .then(({ data }) => data)
      .catch((e) => {
        setError(e as string);
        return null;
      });

    setIsLoading(false);

    return res;
  }

  function sendPut<T>(endpoint: string, payload: T) {
    setIsLoading(true);

    const res = axios
      .post<T>(baseUrl + endpoint, payload, {
        validateStatus: (status) => status <= 400,
      })
      .then(({ data }) => data)
      .catch((e) => {
        setError(e as string);
        return null;
      });

    setIsLoading(false);

    return res;
  }

  function sendDelete<T>(endpoint: string) {
    setIsLoading(true);

    axios.delete<T>(baseUrl + endpoint).catch((e) => {
      setError(e as string);
    });

    setIsLoading(false);
  }

  return {
    actions: {
      sendPost,
      sendPut,
      sendDelete,
    },
    isLoading,
    error,
  };
}
