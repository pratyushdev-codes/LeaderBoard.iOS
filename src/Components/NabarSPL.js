import React from 'react';
import Home from './Home';
import Middleware from './Middleware';
import Contact from './Contact';
import { Link , Route , Routes} from 'react-router-dom';


function NavbarSPL() {
  const handleClick = (id, event) => {
    event.preventDefault(); // Prevent default anchor tag behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  <Routes>
    <Route path = "/" element = {<Home />} />
    <Route path = "/Middleware" element = {<Middleware />} />
    <Route path="/Contact" element={<Contact/>}/>

  </Routes>

  return (
    <div>    
      <nav className="navbar navbar-expand-lg bg-body-dark" style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', position: "fixed", zIndex: "999", width: "100%" }}>
        <div className="container-fluid">
          <Link to="/" className="navbar-brand mx-2">
            <img src="./images/logo.png" style={{ height: "60px", width: "100px" }} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active mx-2" style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Home</Link>
              </li>
             
              <li className="nav-item">
                <Link to="/" className="nav-link active mx-2" style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active mx-2"  style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Our Achievements</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active mx-2"  style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Centers</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link active mx-2"  style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>Sponsorship Opportunities</Link>
              </li>
              <li className="nav-item">
                <Link to="/News">
                <a className="nav-link active mx-2" href="#" style={{ fontFamily: "PT sans", color: "#036EFD", fontSize: "22px"}}>News</a>
                </Link>
              </li>
            </ul>
            <div className="d-flex flex-column flex-lg-row">
              <Link to="/Middleware" >
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

export default NavbarSPL;