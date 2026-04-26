import { Children } from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const auth = false;
  return auth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
