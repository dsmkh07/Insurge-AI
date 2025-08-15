import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgentPage from "./AgentPage";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AgentPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
