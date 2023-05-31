import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Contacto } from "../pages/Contact";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
};
