import React from 'react';

function Achievement() {
  return (
    <div  style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      // padding: '20px', // Added padding for better spacing
    }}>
      <h2 id="achievements"style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
      }}>Achievements</h2>

      <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
      }}>
        A journey from playing Local tournaments to International tournaments with International Cricket Clubs!
      </p>
      <br />
      <div className="d-flex flex-column flex-md-row flex-wrap justify-content-around align-items-center">
        <div className="card" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
          <img src="./images/achievement images/1.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title" style={{fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',}}>Enrollment</h5>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
          <img src="./images/achievement images/2.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title" style={{fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',}}>Coaching</h5>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
          <img src="./images/achievement images/3.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title"style={{fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',}}>Selection</h5>
          </div>
        </div>

        <div className="card" style={{ width: '18rem', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }}>
          <img src="./images/achievement images/4.jpeg" className="card-img-top" alt="..." style={{ height: '200px', borderRadius: '20px' }} />
          <div className="card-body">
            <h5 className="card-title"style={{fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',}}>South Africa Tour</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievement;
