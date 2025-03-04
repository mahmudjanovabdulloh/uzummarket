import "./App.css";
import NavbarMain from "./Components/Navbar/NavbarMain";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import HomePage from "./Pages/HomePage/HomePage";
import Kirish from "./Pages/Kirish/Kirish";
import Saralangan from "./Pages/Saralangan/Saralangan";
import Savat from "./Pages/Savat/Savat";
import DataSingleRoute from "./Pages/DataSingleRoute/DataSingleRoute";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Kirish sahifasi alohida render bo‘lishi kerak */}
      {location.pathname === "/Kirish" ? (
        <Kirish />
      ) : (
        <>
          <NavbarMain />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Kirish" element={<Kirish />} />
            <Route path="/Saralangan" element={<Saralangan />} />
            <Route path="/Savat" element={<Savat />} />
            <Route path="/products/:id" element={<DataSingleRoute />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Products komponenti faqat asosiy sahifada */}
          {location.pathname === "/" && <Products />}

          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
