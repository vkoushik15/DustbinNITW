import { useContext } from "react";
import { AuthContext } from "../authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
   
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
