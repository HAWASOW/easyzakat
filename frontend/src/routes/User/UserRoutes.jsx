import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Public/Home";
import CalculZakat from "../../pages/Public/CalculZakat";
import DonationType from "../../pages/public/DonationType";
import AdminDashboard from "../../pages/Admin/AdminDashboard";
import Landing from "../../pages/Public/Landing";
import Cause from "../../pages/Public/Cause";



function UserRoutes() {
  return (
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Page d'accueil simplifiee */}
        <Route path="/home" element={<Home />} />

        {/* Page Calcul de Zakat */}
        <Route path="/calculer-zakat" element={<CalculZakat />} />
        
        Page Admin Dashboard
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Page Donation */}
        {/* <Route path="/don" element={<Donation /> } /> */}

                {/* Page Choisir une cause */}
        <Route path="/cause" element={<Cause />} />

                {/* Page Types de dons */}
        <Route path="/type" element={<DonationType />} />


      </Routes>
  );
}

export default UserRoutes;