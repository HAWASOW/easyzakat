import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../../pages/Admin/AdminDashboard";

function AdminRoutes() {

  return (
    <Routes>

      <Route
        path="/"
        element={<AdminDashboard />} />
      

    </Routes>
  );
}

export default AdminRoutes;