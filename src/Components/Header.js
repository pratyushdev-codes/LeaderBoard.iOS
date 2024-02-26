import React from 'react';
import { Link , Route , Routes } from 'react-router-dom'
function Header() {
  return (
    <div  id="home">
      <img src="./images/hello.png" alt="MSDCA Logo"  className="img-fluid"  />

      <div style={{
        width: "100%",
        height: "2rem",
        backgroundColor: "#FCD571",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add this line for box shadow
      }}>

       <Link to="/middleware">  <marquee>
          <p style={{
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#036EFD',
            textAlign: "left"
          }}>
            <span className="badge bg-danger">New</span>&nbsp;&nbsp;
            Registrations Open for School Premier League,Season - 2 ! Click here
          </p>
        </marquee></Link>
      </div>
    </div>
  );
}

export default Header;




   

