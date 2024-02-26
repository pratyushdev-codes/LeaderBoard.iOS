import React from 'react';

function Ambassadors() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
      }}>Ambassadors</h2>
     
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ambassadors/1.jpeg" className="card-img-top" alt="..." style={{borderRadius:"20px"}}/>
          <div className="card-body">
            <h5 className="card-title" style={{fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'}}>Dishant Yagnik</h5>
            <p className="card-text" style={{fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'}}>Played IPL for Rajasthan Royal from 2011 to 2015. RR Coach in IPL. Played ICL for Delhi Giants from 2007 to 2009</p>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ambassadors/2.jpeg" className="card-img-top" alt="..." style={{borderRadius:"20px"}}/>
          <div className="card-body">
            <h5 className="card-title" style={{fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'}}>Sohail Rauf</h5>
            <p className="card-text" style={{fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.7)'}}>Former Ranji Player for Delhi. Certified Cricket Coach with 20 years of experience. Certified by BCCI and ECB.</p>
          </div>
        </div>
      </div>

      <style>
        {`
          @media screen and (max-width: 768px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Ambassadors;