import { Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
import { ProtectedRoute } from "./ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};
