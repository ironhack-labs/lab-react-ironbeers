import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(apiUrl) {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleFetch();
  }, [apiUrl]);

  const handleFetch = () => {
    axios
      .get(apiUrl)
      .then((resp) => setResponse(resp.data))
      .catch((err) => setError(err));
  };
  return { response, error };
}
