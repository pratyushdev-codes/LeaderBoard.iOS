import React from 'react';

function Partners() {
  return (
    <div className="container mt-4">
      <h2 className="text-center" style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
     
      }}>
        Authorized Partners
      </h2>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="./images/partners/SHRI ENTERPRISE LOGO FINAL 16-12-22.jpg" className="card-img-top" alt="Partner 1" />
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card">
            <img src="./images/partners/brain.jpeg" className="card-img-top" alt="Partner 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
