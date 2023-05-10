import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api";
const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/user/auth`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
      })
      .catch((err) => console.log(err));
  }, []);

  const values = { user, setUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export { AuthContext, AuthContextProvider };
