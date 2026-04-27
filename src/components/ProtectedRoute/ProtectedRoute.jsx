import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const auth = true; // ici utilisateur authentifié
  return auth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
