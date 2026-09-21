import { Routes, Route } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";

function AuthRoutes() {
  return (
    <Routes>
      {/* Page de connexion */}
      <Route path="/login" element={<Login />} />

      {/* Page de création de compte */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AuthRoutes;
