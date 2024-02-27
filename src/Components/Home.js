import React, { useEffect, useState } from 'react';

function Home() {
  const componentStyle = {
    fontFamily: 'PT Sans, sans-serif',
    color: '#65A0FB',
    fontSize: '50x',
  };

  const teamNameList = ["trtrt", "Download Weathery Nowww!!!", "PAPA JIII", "Team 1"]; //TEAM NAMES ACCORDING TO REGISTRATION, MANUALLY UPDATED
  const [teamScores, setTeamScores] = useState({});
  const [sortedObject, setSortedObject] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = {};
      for (let index = 0; index < teamNameList.length; index++) {
        const teamName = teamNameList[index];
        await fetch("https://api.counterapi.dev/v1/round1_GameFlix20/" + teamName)
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
            if(res.code == 400){
              data[teamName] = 0;
             } 
            else{
              data[teamName] = res.count;
            }
          })
          .catch(() => {
            data[teamName] = 0; // Set score to 0 if there's an error
          });
      }

      setTeamScores(data);
    };

    fetchData();

    const timer = setInterval(() => {
      fetchData();
    }, 30000); // refresh every 30 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const sortedArray = Object.entries(teamScores).sort((a, b) => b[1] - a[1]);
    const sortedObject = Object.fromEntries(sortedArray);
    setSortedObject(sortedObject);
  }, [teamScores]);

  return (
    <div style={componentStyle}>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ background: 'linear-gradient(to right, rgba(101, 160, 251), rgba(62, 125, 255))', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div className="container">
          <a href="/" className="navbar-brand" style={{ color: "white" }}>
            <img src='./images/clublogo.png' style={{ height: "40px", width: "170px" }} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight: "bold", color: "white" }}>iOS Club Website</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight: "bold", color: "white" }}>About</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight: "bold", color: "white" }}>Contact</a></li>
              <li className="nav-item mx-3"><a className="nav-link" style={{ fontWeight: "bold", color: "white" }}>Support</a></li>
            </ul>
            <div className="ms-auto">
              <button type="button" className="btn btn-primary" style={{ borderRadius: "20px", backgroundColor: "#65A0FB", color: "white" }}>Leader Board</button>
            </div>
          </div>
        </div>
      </nav>
      <div style={{ position: 'relative', boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
        <img src="images/hero-shape-1.svg" alt="" style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', objectFit: 'cover' }} />
        <img src="images/hero-shape-2.svg" alt="" style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', objectFit: 'cover' }} />
        <br />

        <h4 style={{ fontWeight: "bold", color: "white", marginBottom: '40px' }}>Check your position on LeaderBoard</h4>
        {Object.entries(sortedObject).map(([teamName, score], index) => (
          <div className="card mx-auto text-center" key={teamName} style={{ width: '18rem', borderRadius: "20px", boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
            <div className="card-body" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <a href="#" className="btn btn-primary" style={{ borderRadius: "20px", fontFamily: 'PT Sans, sans-serif', margin: '10px', marginBottom: '20px' }}>
                Position: {index + 1}
              </a>
              <h5 className="card-title" style={{ color: '#65A0FB', fontWeight: "bold" }}>{teamName}</h5>
              <p className="card-text" style={{ fontFamily: 'PT Sans, sans-serif', fontWeight: "bold", marginBottom: '10px' }}>Score:{score}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;