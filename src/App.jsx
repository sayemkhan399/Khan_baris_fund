import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return <>{isLoggedIn ? <Home /> : <LoginPage onLogin={handleLogin} />}</>;
};

export default App;
