import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";

const App: React.FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  const handleSignupClick = () => {
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div>{showLogin ? <Login onSignupClick={handleSignupClick} /> : <Signup onLoginClick={handleLoginClick} />}</div>
  );
};

export default App;
