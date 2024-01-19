import { Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
import { ProtectedRoute } from "./ProtectedRoute";
import History from "../components/History";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="history" element={<History />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};
