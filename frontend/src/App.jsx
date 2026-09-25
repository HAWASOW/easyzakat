import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/User/UserRoutes";
import AuthRoutes from "./routes/Auth/AuthRoutes";
import AdminRoutes from "./routes/Admin/AdminRoutes";

function App() {
  return (
    <BrowserRouter>

      <UserRoutes/>
      <AdminRoutes/>
      <AuthRoutes/> 

    </BrowserRouter>   
  );
}

export default App;