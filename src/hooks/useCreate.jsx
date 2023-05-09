import { useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";

const useCreate = () => {
  const [createMessage, setCreateMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const create = useCallback(async (title, category, body) => {
    try {
      setCreateMessage("");
      setLoading(true);
      setError(null);
      const response = await axios.post(
        `${API_BASE_URL}/api/stories/create`,
        {
          title,
          category,
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
      setError(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  }, []);

  return { create, loading, error, createMessage };
};

export default useCreate;
