import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faGooglePlus
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./login.new.css";
import { useState } from "react";
import cx from "classnames";

export const Login = () => {
  const [isLoginActive, setIsLoginActive] = useState(false);

  const handleSubmit = (e) => e.preventDefault();
  return (
    <div className="page">
      <div
        className={cx("container", { "right-panel-active": !isLoginActive })}
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className="social-container">
              <Link to="/login" className="social">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/login" className="social">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="/login" className="social">
                <FontAwesomeIcon icon={faGooglePlus} />
              </Link>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1>Sign in</h1>
            <div className="social-container">
              <Link to="/login" className="social">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link to="/login" className="social">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link to="/login" className="social">
                <FontAwesomeIcon icon={faGooglePlus} />
              </Link>
            </div>
            <span>or use your account </span>

            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <Link to="/login">Forgot Your Password?</Link>
            <button>Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button onClick={() => setIsLoginActive(true)} className="ghost">
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className="ghost" onClick={() => setIsLoginActive(false)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
