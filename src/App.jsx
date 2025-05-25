// App.js
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Home from "./components/Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  const handleAuthSuccess = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="/auth"
          element={<AuthPage onAuthSuccess={handleAuthSuccess} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
