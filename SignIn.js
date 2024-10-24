import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SignIn = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleToLogin = () => {
    setIsLogin(true);
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <p>STRANGER THINGS .</p>
        </div>

        <div className="nav-menu" id="navMenu">
          <ul>
            <li><a href="#" className="link active">Home</a></li>
            <li><a href="#" className="link">Cast</a></li>
            <li><a href="#" className="link">About</a></li>
            <li><a href="#" className="link">Contact</a></li>
          </ul>
        </div>

        <div className="nav-button">
          <Link to='/signup'><button className={`btn ${isLogin ? 'white-btn' : ''}`} onClick={toggleToLogin}>Sign Up</button></Link>
        </div>

        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={() => {
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('responsive');
          }}></i>
        </div>
      </nav>

      <div className="form-box">
        <div className="login-container" id="login">
          <div className="top">
            <header>Login</header>
          </div>

          <div className="input-box">
            <input type="text" className="input-field" placeholder="Username or Email" />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box">
            <Link to='/account'><input type="submit" className="submit" value="Sign In" /></Link>
          </div>

          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="login-check" />
              <label htmlFor="login-check"> Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#">Forgot password?</a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
