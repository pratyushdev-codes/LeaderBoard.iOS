import React from 'react';

function Features() {
  const introStyle = {
    fontFamily: 'PT sans',
    color: '#65A0FB',
    fontSize: '80px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: '28px'
  };
  const contentStyle = {
    flex: 1,
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign:"center"
  };

  return (
    <div>
      <style>
        {`
        .animated-card {
          display: flex;
          height: 300px;
          width: 10px;
          background: "linear-gradient(to right, #0052d4, #4364f7, #6fb1fc)";
          border-radius: 10px;
          box-shadow: -1rem 0 3rem #0003;
          margin-left: -50px;
          transition: 0.4s ease-out;
          position: relative;
          left: 0px;
        }
        
        .animated-card:hover {
          transform: translateY(-20px);
          transition: 0.4s ease-out;
        }
        
        .animated-card:hover ~ .animated-card {
          position: relative;
          left: 50px;
          transition: 0.4s ease-out;
        }
        
        .animated-card-inner {
          display: flex;
          height: 100%;
          width: 100%;
          border-radius: 20px;
          border-color: grey;
          border-style: solid;
          border-width: 1px;
        }
        `}
      </style>
      <br />
      
      <div style={{ backgroundColor: "#EFF2FF", height: "320px", display: "flex", justifyContent: "center", marginRight:"20px",borderRadius: "0 0 50px 0", alignItems: "center" }}>
      
        <div className="card animated-card" style={{ width: '15rem', borderRadius: "20px", height:"15rem",borderColor: "white" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', textAlign:"center", fontSize: "40px", marginTop: "30%" }}>20+</h5>
            <p className="card-text" style={contentStyle}>
              Number of Academies.
            </p>
          </div>
        </div>

        <div className="card animated-card" style={{ width: '15rem',height:"15rem", borderRadius: "20px", borderColor: "white" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', textAlign:"center",fontSize: "40px", marginTop: "30%" }}>10K+</h5>
            <p className="card-text" style={contentStyle}>
              Academy Students.
            </p>
          </div>
        </div>
{/* 
        <div className="card animated-card" style={{ width: '15rem', borderRadius: "20px", borderColor: "white" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: "60px", marginTop: "50px" }}>10K +</h5>
            <p className="card-text" style={contentStyle}>
              Online Students
            </p>
          </div>
        </div>

        <div className="card animated-card" style={{ width: '15rem', borderRadius: "20px", borderColor: "white" }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontFamily: 'PT sans', color: '#65A0FB', fontSize: "60px", marginTop: "50px" }}>650</h5>
            <p className="card-text" style={contentStyle}>
              Online Certifications.
            </p>
          </div>
        </div> */}
        
      
       
      </div>
    </div>
  );
}

export default Features;
