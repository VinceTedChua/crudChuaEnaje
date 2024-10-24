import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const SignUp = () => {
  const [isLogin, setIsLogin] = useState(false);

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
          <Link to='/'><button className={`btn ${!isLogin ? 'white-btn' : ''}`}>Sign In</button></Link>
        </div>

        <div className="nav-menu-btn">
          <i className="bx bx-menu" onClick={() => {
            const menu = document.getElementById('navMenu');
            menu.classList.toggle('responsive');
          }}></i>
        </div>
      </nav>

      <div className="form-box">
        <div className="login-container" id="register">
          <div className="top">
            <header>Sign Up</header>
          </div>

          <div className="input-box">
            <label htmlFor="profile-image" className="upload-label">Upload Profile Image</label>
            <input type="file" className="input-field" id="profile-image" accept="image/*" />
          </div>

          <div className="input-box">
            <input type="text" className="input-field" placeholder="Firstname" />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box">
            <input type="text" className="input-field" placeholder="Lastname" />
            <i className="bx bx-user"></i>
          </div>

          <div className="input-box">
            <input type="text" className="input-field" placeholder="Username" />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input type="text" className="input-field" placeholder="Email" />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input type="text" className="input-field" placeholder="Confirm Email" />
            <i className="bx bx-envelope"></i>
          </div>

          <div className="input-box">
            <input type="password" className="input-field" placeholder="Password" />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box">
            <input type="password" className="input-field" placeholder="Confirm Password" />
            <i className="bx bx-lock-alt"></i>
          </div>

          <div className="input-box">
            <Link to='/'><input type="submit" className="submit" value="Register" /></Link>
          </div>

          <div className="two-col">
            <div className="one">
              <input type="checkbox" id="register-check" />
              <label htmlFor="register-check"> Remember Me</label>
            </div>
            <div className="two">
              <label><a href="#">Terms & conditions</a></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
