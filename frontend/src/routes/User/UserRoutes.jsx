import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Public/Home";
import CalculZakat from "../../pages/Public/CalculZakat";
// import Donation from "../../pages/public/Donation";
import AdminDashboard from "../../pages/Admin/AdminDashboard";


function UserRoutes() {
  return (
      <Routes>

        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Page Calcul de Zakat */}
        <Route path="/calculer-zakat" element={<CalculZakat />} />
        
        Page Admin Dashboard
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Page Donation */}
        {/* <Route path="/don" element={<Donation /> } /> */}


      </Routes>
  );
}

export default UserRoutes;