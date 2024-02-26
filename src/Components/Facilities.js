import React from 'react';

function Facilities() {

  const imageStyle = {
    width: "35rem",
    height: "18rem",
    borderRadius: "20px"
  };

  return (
    <div>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
        textAlign:"center"
      }}>Facilities</h2>

      <style>
        {`
          .container {
            display: flex;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch; /* Enables momentum scrolling in iOS Safari */
          }

          .child {
            flex: 0 0 auto;
            scroll-snap-align: start;
            margin-right: 10px; /* Adjust as needed */
          }

          .center-align {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
      
      <div className="center-align">
        <p style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          color: 'rgba(0, 0, 0, 0.7)',
          margin: '0 10px',
          textAlign: "left"
        }}>
          • Cricket ground with center turf pitches and Flood Lights.<br />
          • Separate practice area for Senior and Junior Group.<br />
          • Full-size Turf Pitches and & Cemented pitch for Junior Students.<br />
          • Astro Synthetic Turf Pitches & Cemented pitch for Junior Students.<br />
        </p>
      </div>

      <br />

      <div className="container m-10">
        <div className="child"><img src="./images/facilities/3.jpeg" alt="Facility 1" style={imageStyle} /></div>
        <div className="child"><img src="./images/facilities/4.jpeg" alt="Facility 2" style={imageStyle} /></div>
        <div className="child"><img src="./images/facilities/1.png" alt="Facility 3" style={imageStyle} /></div>
        <div className="child"><img src="./images/facilities/2.jpeg" alt="Facility 4" style={imageStyle} /></div>
      </div>

      <br />

    </div>
  );
}

export default Facilities;
