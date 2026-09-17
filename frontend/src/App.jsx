import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserRoutes from "./routes/User/UserRoutes";


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