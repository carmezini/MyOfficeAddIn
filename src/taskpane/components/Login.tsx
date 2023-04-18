/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { Image } from "@fluentui/react-components";

const veeries_logo = require("./assets/veeries_database_80x80.png");

type LoginProps = {
  onSignupClick: () => void;
};

const Login: React.FC<LoginProps> = ({ onSignupClick }) => {
  const handleSignupClick = () => {
    onSignupClick();
  };

  return (
    <div className="main-container">
      <div className="signin-image">
        <Image width={80} height={80} alt="veeries-database" src={veeries_logo}></Image>
      </div>
      <div className="message-instruction">
        <span>
          Receive dynamic agriculture data from our API with Veeries Agriculture Database and boost your market
          analyses.
        </span>
      </div>
      <div className="card-form">
        <div className="input-container">
          <label></label>
          <input className="input-box-signin" placeholder="Credential Access"></input>
        </div>
        <div className="input-container">
          <label></label>
          <input className="input-box-signin" placeholder="Password" type="password"></input>
        </div>
        <div className="container-button-signin">
          <button type="button" className="signin-button" onClick={handleSignupClick}>
            Sign Up
          </button>
        </div>
        <div className="container-button-signup">
          <span>Don&#39;t have an account yet?</span>
          <a onClick={handleSignupClick}> Contact Us</a>
        </div>
      </div>
      <div className="clickme-button">
        <span>Click</span>
        <a> here </a>
        <span>for more information</span>
      </div>
    </div>
  );
};

export default Login;
