import React from 'react';
import { Link } from 'react-router-dom';
import elevenImage from './eleven.jpg'; // Update this path according to your project structure
import './style.css';

const AccountDashboard = () => {

  const logout = () => {
    alert("You have been logged out.");
  };

  const deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Your account has been deleted.");
    }
  };

  const updateProfile = () => {
    alert("Redirecting to update profile page.");
  };

  return (
    <div className="wrapper">
      <header className="account-header">
        <img 
          src={elevenImage}
          alt="Profile Image"
          width="250"
          height="250"
          style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' }}
        />
        <h1>Welcome, Eleven</h1>

        <div className="nav-button">
          <div className="banner">
            <Link to='/'><button className="btn white-btn" onClick={logout}>Logout</button></Link>
          </div>
        </div>
      </header>

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
					<Link to='/'><button className="btn white-btn" onClick={logout}>Logout</button></Link>
        </div>
      </nav>
    </div>
  );
};

export default AccountDashboard;
