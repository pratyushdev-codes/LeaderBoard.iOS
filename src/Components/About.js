import React from 'react';

function About() {
  return (
    <div id="about" style={{ // Add the id attribute here
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px', // Added padding for better spacing
    }}>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
      }}>Who we are</h2>
      <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign: 'center' // Center alignment
      }}>
        MS Dhoni Cricket Academy started with the single thought of giving back to the aspiring sports community in our country. Mentored by MS Dhoni and expert team, MSDCA is redefining the standards for coaching and developing cricket globally. Equipped with advanced technology, premier coaching facilities and qualified coaches, MSDCA is spreading its wings to every corner of the globe.
      </p>
    </div>
  );
}

export default About;
