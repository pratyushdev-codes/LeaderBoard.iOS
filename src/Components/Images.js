import React from 'react';

const Images = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
     <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
      }}>Images</h2>
     <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
      }}>Take a moment to browse through our captivating collection of images at Academy.</p>
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#F4F1FD", flexWrap: 'wrap',borderTopRightRadius: "50px" ,borderBottomLeftRadius:"50px" }}>
        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/1.jpeg" className="card-img-top" alt="Image 1" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/2.jpeg" className="card-img-top" alt="Image 2" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/3.jpeg" className="card-img-top" alt="Image 3" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/4.jpeg" className="card-img-top" alt="Image 4" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/9.jpeg" className="card-img-top" alt="Image 5" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/6.jpeg" className="card-img-top" alt="Image 6" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/7.jpeg" className="card-img-top" alt="Image 7" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

        <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/ground images/8.jpeg" className="card-img-top" alt="Image 8" style={{ height: '300px', borderRadius: '20px' }} />
        </div>

       
      </div>
    </div>
  );
}

export default Images;
