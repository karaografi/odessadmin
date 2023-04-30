import React, { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./screens/NotFound";
import Passwords from "./screens/Passwords";
import Domain from "./screens/Domain";
import Settings from "./screens/Settings";
import Dashboard from "./screens/Dashboard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/auth/login" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={<NotFound />} />
        ... other routes without layout ...
        <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/password" element={<Passwords />} />
          <Route path="/domain" element={<Domain />} />
          <Route path="/settings" element={<Settings />} />
          ... other routes with layout ...
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;