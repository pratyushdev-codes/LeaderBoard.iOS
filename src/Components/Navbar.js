import { useRef } from 'react';
import React from 'react';
import { Link , Route , Routes } from 'react-router-dom'

function Navbar() {
  const ref = useRef(null);

  const handleClick = (id, event) => {
    event.preventDefault(); // Prevent default anchor tag behavior 
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>    
      <nav className="navbar navbar-expand-lg bg-body-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', position: "fixed", zIndex: "999", width: "100%" }}>
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#"><img src="./images/logo.png" style={{ height: "60px", width: "100px" }} alt="Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#" onClick={(event) => handleClick('home', event)} style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#" onClick={(event) => handleClick('about', event)} style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#" onClick={(event) => handleClick('achievements', event)} style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Our Achievements</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#" onClick={(event) => handleClick('concepts', event)} style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Centers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active mx-2" href="#" onClick={(event) => handleClick('sponsorship', event)} style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Sponsorship Opportunities</a>
              </li>

              <li className="nav-item">
                <Link to="/News">
                <a className="nav-link active mx-2" href="#" style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>News</a>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row">
            <Link to="/Middleware">
            <button className="btn btn-glow mx-2" style={{ borderRadius:"20px", backgroundColor:"#FFC200"}}>School Premier League</button>
            </Link>
            <Link to="/Contact">
             <button className="btn btn-primary mx-2" style={{ borderRadius:"20px", backgroundColor:"#036EFD" }}>Contact Us</button> 
             </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;