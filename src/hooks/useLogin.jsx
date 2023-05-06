import { useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (username, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${API_BASE_URL}/api/user/login`, {
        username,
        password,
      });
      if (response.data.success) {
        setLoading(false);
        setError(null);
        console.log(response);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { login, loading, error };
};

export default useLogin;
