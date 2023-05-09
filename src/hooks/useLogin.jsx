import { useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";

const useLogin = () => {
  const [loginMessage, setLoginMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (username, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        `${API_BASE_URL}/api/user/login`,
        {
          username,
          password,
        },
        { withCredentials: true }
      );
      if (response.data.success) {
        setLoginMessage(response.data);
        setLoading(false);
        setError(null);
        console.log(response);
      }
    } catch (error) {
      setError(error.response.data.errors);
    } finally {
      setLoading(false);
    }
  }, []);

  return { login, loginMessage, loading, error };
};

export default useLogin;
