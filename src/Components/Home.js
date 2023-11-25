import React from 'react';

function Home() {
  const componentStyle = {
    fontFamily: 'PT Sans, sans-serif',
    color: '#65A0FB',
    fontSize: '50x',
  };

  return (
    <div style={componentStyle}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(to right, rgba(101, 160, 251), rgba(62, 125, 255))', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
        <div className="container">
          <a href="/" className="navbar-brand" style={{ color: "white" }}>
            <img src='./images/clublogo.png' style={{ height:"40px", width: "170px" }} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight:"bold", color: "white" }}>iOS Club Website</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight:"bold",color: "white" }}>About</a></li> 
              
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight:"bold",color: "white" }}>Contact</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight:"bold",color: "white" }}>Support</a></li>
            
            </ul>
            <div className="ms-auto">
              <button type="button" className="btn btn" style={{ backgroundColor: "#65A0FB", borderRadius: "20px", color: "white" }}>Leader Board</button>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <img src="images/hero-shape-1.svg" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', objectFit: 'cover' }} />
        <img src="images/hero-shape-2.svg" alt="" style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', objectFit: 'cover' }} />
        <br/>
        <br/>
        <h1 style={{fontWeight:"bold"}}>Welcome to iOS Club's XXX event</h1>
        <h4 style={{fontWeight:"bold",color:"grey"}}>Check your position on LeaderBoard</h4>
        <br/>
        <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Home;
