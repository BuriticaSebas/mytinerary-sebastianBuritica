import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function MainLayout() {
  const rutaPrivada = localStorage.getItem("token");
  const location = useLocation();

  // Si hay token y la ruta es /login o /register, redirige a /
  if (rutaPrivada && (location.pathname === "/login" || location.pathname === "/register")) {
    return <Navigate to="/" />;
  }

  return (
    <>
    <Navbar></Navbar>
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;