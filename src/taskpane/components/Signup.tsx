import React from "react";

type SignupProps = {
  onLoginClick: () => void;
};

const Signup: React.FC<SignupProps> = ({ onLoginClick }) => {
  const handleLoginClick = () => {
    onLoginClick();
  };

  return (
    <div>
      <h1>Signup</h1>
      <button type="button" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default Signup;
