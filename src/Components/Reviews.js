import React from 'react';
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
function Reviews() {
  const googleMapsLink = 'https://www.google.com/maps/place/MS+DHONI+CRICKET+ACADEMY/@23.0405624,72.5328598,17z/data=!4m8!3m7!1s0x395e853621d55185:0xd21d507f311ca2ad!8m2!3d23.0405575!4d72.5354347!9m1!1b1!16s%2Fg%2F11mx96yvjb?entry=ttu';
  
  const HeadingStyle={
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.7)',

    textAlign: "center"
  }
  
  const contentstyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',

    textAlign: "left"
  }

  return (
    <div style={{ backgroundColor: "#F5F3F4", borderRadius: "30px 0 0 0", marginLeft: "20px" }}>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
        textAlign:"center"
      }}>Reviews</h2>
     <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"
      }}>What our students say!</p><br />

<Marquee
  fade={true}
  direction="left"
  reverse={false}
  pauseOnHover={false}
  className="" // pass class to change gap or speed
  innerClassName="" // pass class to change gap or speed
>
  <div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="card" style={{
              width: '18rem',
              height:"15rem",
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: "20px",
              backgroundColor: "#E8FAE8",
              textDecoration: 'none' // Remove underlines
            }}>
              <div className="card-body">
                <h5 className="card-title"style={HeadingStyle}>Jaitra Desai</h5>
                <p className="card-text" style={contentstyle}>Very good facilities and children learn very well under a good coach. Great academy with great expert and great opportunity</p>
              </div>
            </a>
  </div>

  <div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="card" style={{
              width: '18rem',
              height:"15rem",
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor: "#EFF2FF",
              borderRadius: "20px",
              textDecoration: 'none' // Remove underlines
            }}>
              <div className="card-body">
                <h5 className="card-title"  style={HeadingStyle}>Pratyush Birole</h5>
                <p className="card-text" style={contentstyle}>Best coaching with professional facilities.Fantastic infrastructure</p>
              </div>
            </a>
</div>








<div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="card" style={{
              width: '18rem',
              height:"15rem",
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: "20px",
              backgroundColor: "#E8FAE8",
              textDecoration: 'none' // Remove underlines
            }}>   
              <div className="card-body">
                <h5 className="card-title" style={HeadingStyle}>Munshi Zaki</h5>
                <p className="card-text" style={contentstyle}>Very good pitch and ground, and coaches are very experienced. The committee is also giving opportunities to come first</p>
              </div>
            </a>
            </div>

<div/>

<div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="card" style={{
              width: '18rem',
              height:"15rem",
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor: "#FFF7E3",
              borderRadius: "20px",
              textDecoration: 'none' // Remove underlines
            }}>
              <div className="card-body">
                <h5 className="card-title"  style={HeadingStyle}>Dr. Mehul Shah</h5>
                <p className="card-text" style={contentstyle}>Very good cricket ground with a good outcome, proper grass. The pitch is also good for night tournaments but needs improvement in lighting. Sitting area is available with drinking water facilities</p>
              </div>
            </a>
</div>

<div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="card" style={{
              width: '18rem',
              height:"15rem",
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor: "#EADFFE",
              borderRadius: "20px",
              textDecoration: 'none' // Remove underlines
            }}>
              <div className="card-body">
                <h5 className="card-title"  style={HeadingStyle}>Kaustubh Chaurey</h5>
                <p className="card-text" style={contentstyle}>Best place to learn cricket, best coaches, and facilities. If you want to learn and practice, it is a good place at affordable rates.</p>
              </div>
            </a>
            </div>




            <div>
            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="card" style={{
              width: '18rem',
              height:"15rem",
              marginRight: '1rem',
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: "20px",
              textDecoration: 'none' // Remove underlines
            }}>
              <div className="card-body">
                <h5 className="card-title"   style={HeadingStyle}>Nikhil Reddy</h5>
                <p className="card-text" style={contentstyle}>Top-of-the-line coaches with excellent infrastructure. The best academy in Ahmedabad by far.</p>
              </div>
            </a>
            </div>




            <div>

            <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="card" style={{
              width: '18rem',
              height:"15rem",
              whiteSpace: 'normal',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              backgroundColor: "#EFF2FF",
              borderRadius: "20px",
              textDecoration: 'none' // Remove underlines
            }}>
              <div className="card-body">
                <h5 className="card-title" style={HeadingStyle}>Anirudh Mathur</h5>
                <p className="card-text" style={contentstyle}>The best support one can ever dream of!</p>
              </div>
            </a>
            </div>

        






</Marquee>
      
      

      <br />
    </div>

  );
}

export default Reviews;
