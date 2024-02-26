import React from 'react';
import { Link } from 'react-router-dom';
import NavbarSPL from './NabarSPL';
import './Middleware.css'; // Import the CSS file

function Middleware() {
  return (
    <div>
      <NavbarSPL />
      <br />
      <br />
      <br />
      <div className="middleware-container">
        <h2 className="register-title">
          Register for School Premier League
        </h2>
        <img
          src="./images/SPL Banner.png"
          className="card-img-top banner-image"
          alt="..."
        />

        <Link to="/Registration">
          <button
            type="button"
            className="btn btn-primary custom-btn"
          >
            Register as an Individual
          </button>
        </Link>

        <Link to="/TeamRegistration">
          <button
            type="button"
            className="btn btn-primary custom-btn"
          >
            Register as Team
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Middleware;