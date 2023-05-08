import { useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";

const useBody = (type, id) => {
  const [createMessage, setCreateMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBody = useCallback(async (body) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.patch(
        `${API_BASE_URL}/api/stories/${type}/${id}`,
        {
          body,
        },
        { withCredentials: true }
      );
      if (response.data.success) {
        setCreateMessage(response.data.message);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }, []);

  return { createBody, loading, error, createMessage };
};

export default useBody;
