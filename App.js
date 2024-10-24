import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";
import SignIn from './SignIn';  // This is for SignIn Page
import SignUp from './SignUp';  // This is for SignUp Page
import AccountDashboard from './Account'; // This is for Account Page
import AdminDashboard from "./Admin"; // This is for Admin Page


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              {/* Adding links for easy navigation */}
            </ul>
          </nav>
        </header>

        {/* Adding the Routes to handle navigation */}
        <Routes>
          <Route path="/" element={<SignIn />} />
          {/* <Route path="/signin" element={<SignIn />} /> // no need to add route to signin, index is already sign in page  */}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/account" element={<AccountDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
