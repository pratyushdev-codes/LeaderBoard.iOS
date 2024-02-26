import React from 'react';

function Why() {
  const contentstyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.6)',

    textAlign: "left"
  };

  return (
    <div>
      <style>
        {`
          .zoom-image-container {
            overflow: hidden;
          }

          .zoom-image-container img {
            transition: transform 0.3s;
            width: 100%;
          }

          .zoom-image-container:hover img {
            transform: scale(1.1);
          }

          @media screen and (max-width: 768px) {
            .card {
              width: 100%;  // Make cards take full width on smaller screens
              margin-bottom: 1rem;  // Add some margin for better spacing
            }

            .card-body {
              padding: 1rem;  // Add padding to card body on smaller screens
            }
          }
        `}
      </style>

      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
        textAlign:"center"
      }}>Why Partner with us?</h2>

      <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"
      }}>
        Leveraging our years of extensive experience in emerging digital technologies.
      </p>
      <br />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="card zoom-image-container" style={{ width: '16rem', margin: '0.5rem', borderColor: "white", borderRadius: "20px" }}>
          <img src="./images/why/1.png" className="card-img-top" alt="Card 1" />
          <div className="card-body">
            <p className="card-text" style={contentstyle}>MSDCA aims to lead in cultivating a new generation of cricket players and professionals, fully equipped to excel in all formats, guided by the core values of our mentor, MS Dhoni.</p>
          </div>
        </div>

        <div className="card zoom-image-container" style={{ width: '16rem', margin: '0.5rem', borderColor: "white", borderRadius: "20px" }}>
          <img src="./images/why/2.png" className="card-img-top" alt="Card 2" />
          <div className="card-body">
            <p className="card-text" style={contentstyle}>MSDCA follows a consistent training approach led by expert coaches for comprehensive cricket skill development. Besides coaching, the academy frequently arranges cricket tours for exposure to varied playing conditions.</p>
          </div>
        </div>

        <div className="card zoom-image-container" style={{ width: '16rem', margin: '0.5rem', borderColor: "white", borderRadius: "20px" }}>
          <img src="./images/why/3.png" className="card-img-top" alt="Card 3" />
          <div className="card-body">
            <p className="card-text" style={contentstyle}>For surviving in today’s tough competition in cricket & coming out of the ordinary, MS Dhoni realizes the importance of high-class coaching facility and coaches to produce talent that will match no other.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
