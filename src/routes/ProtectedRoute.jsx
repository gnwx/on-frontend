import { Navigate } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useAuthContext();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;