import React from 'react';
import { Link } from 'react-router-dom';
import bossImage from './boss.jpg';
import './style.css';

const AdminDashboard = () => {
  const logout = () => {
    alert("You have been logged out.");
  };

  const deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete this account? This action cannot be undone.")) {
      alert("The account has been deleted.");
    }
  };

  const updateProfile = () => {
    alert("Redirecting to update profile page.");
  };

  return (
    <div className="wrapper">
      <header className="account-header">
        <img
          src={bossImage}
          alt="Profile Image"
          width="250"
          height="250"
          style={{ borderRadius: '50%', objectFit: 'cover', border: '2px solid #fff' }}
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop in case fallback image fails to load
            e.target.src = 'https://via.placeholder.com/250'; // Placeholder image URL
          }}
        />
        <h1>Welcome, Admin!</h1>

        <div className="nav-button">
          <div className="banner">
						<Link to="/"><button className="btn white-btn" onClick={logout}>Logout</button></Link>
            <button className="btn" onClick={deleteAccount}>Delete</button>
            <button className="btn" onClick={updateProfile}>Update</button>
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
          <button className="btn" onClick={deleteAccount}>Delete</button>
          <button className="btn" onClick={updateProfile}>Update</button>
        </div>
      </nav>

      <section className="account-list">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2 style={{ color: 'white' }}>Manage Accounts</h2>
        </div>
        <table>
          <thead>
            <tr style={{ backgroundColor: 'grey' }}>
              <th>Name</th>
              <th>Email</th>
              <th>Username</th>
              <th>Password</th>
              <th>Birthday</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ backgroundColor: 'lightgrey' }}>
              <td>Eleven Hopper</td>
              <td>eleven@example.com</td>
              <td>eleven123</td>
              <td>TwentyTwentyFour2024</td>
              <td>2004-02-19</td>
              <td>
                <button className="btn" onClick={updateProfile}>Update</button>
                <button className="btn" onClick={deleteAccount}>Delete</button>
              </td>
            </tr>
            <tr style={{ backgroundColor: 'lightgrey' }}>
              <td>Mike Wheeler</td>
              <td>mike@example.com</td>
              <td>mike987</td>
              <td>Dawn12234</td>
              <td>2003-04-07</td>
              <td>
                <button className="btn" onClick={updateProfile}>Update</button>
                <button className="btn" onClick={deleteAccount}>Delete</button>
              </td>
            </tr>
            <tr style={{ backgroundColor: 'lightgrey' }}>
              <td>Mike Wheeler</td>
              <td>mike@example.com</td>
              <td>mike987</td>
              <td>Heather123</td>
              <td>2003-04-07</td>
              <td>
                <button className="btn" onClick={updateProfile}>Update</button>
                <button className="btn" onClick={deleteAccount}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
