import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import ProtectedRoute from "./ProtectedRoute";
import Home from "../screens/Home";
import Login from "../screens/Login";
import NotFound from "../screens/NotFound";

export default function AdminRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<Home />} />
        </Route>

        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
