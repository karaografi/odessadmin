import React, { useState } from "react";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./screens/NotFound";
import Passwords from "./screens/Passwords";
import Settings from "./screens/Settings";
import Dashboard from "./screens/Dashboard";
import DomainScreen from "./screens/DomainScreen";
import Courses from "./screens/Courses";
import Login from "./screens/Login";


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/auth/login" element={<Login />} />

        ... other routes without layout ...
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/password" element={<Passwords />} />
          <Route path="/domain" element={<DomainScreen />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/settings" element={<Settings />} />
          ... other routes with layout ...
        </Route>

        <Route path="*" element={<NotFound />} />
      
    </Routes>
  );
}





export default App;