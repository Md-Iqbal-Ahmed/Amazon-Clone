import React, { useState } from "react";
import "./Login.css";
import image from "../images/amazon_logo.png";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const SignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const Register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={image} className="login_image" />
      </Link>
      <div className="login_info">
        <form className="login_form">
          <h1>Sign-in</h1>
          <h5>Email</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button onClick={SignIn} className="login_signin_button">
            Login
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Fake clone Conditions of Use and
          Privacy Notice.
        </p>
        <button onClick={Register} className="login_register_button">
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
