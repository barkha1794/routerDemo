import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";
import { Login } from "./pages/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact_us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
