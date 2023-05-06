import { useState, useCallback } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";

const useRegister = () => {
  const [registerMessage, setRegisterMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const register = useCallback(async (email, username, password) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(`${API_BASE_URL}/api/user/register`, {
        email,
        username,
        password,
      });
      if (response.data.success) {
        setRegisterMessage(data.message);
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

  return { register, loading, error, registerMessage };
};

export default useRegister;
