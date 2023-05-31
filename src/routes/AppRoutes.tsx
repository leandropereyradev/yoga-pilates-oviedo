import { Routes, Route } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="bg-slate-900 h-[200vh]"></div>}
      />
    </Routes>
  );
};
