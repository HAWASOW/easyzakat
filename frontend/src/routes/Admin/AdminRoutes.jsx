import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/DashboardPage";

function AdminRoutes() {

  return (
    <Routes>

      <Route
        path="/"
        element={<DashboardPage />} />
      

    </Routes>
  );
}

export default AdminRoutes;