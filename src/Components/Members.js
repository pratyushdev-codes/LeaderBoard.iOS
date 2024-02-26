import React from 'react';


function Members() {

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

    textAlign: "center"
  };




  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
      }}>Learn from the Experts</h2>

      <p style={{
        fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
      }}>Benefit from the expertise of highly skilled and trained coaches!</p>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <img src="./images/members/suresh.jpeg" style={{padding:"15px", borderRadius:"35px"}}className="card-img-top" alt="..." />
          <div className="card-body">
      <h5 class="card-title" style={HeadingStyle}>Suresh Raina</h5>
    <p class="card-text" style={ contentstyle}>Indian Batsman </p>
            
          </div>
        </div>
        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
          <div className="card-body" style={{  borderRadius: '20px' }}>
          <video src="./images/members/video.mp4" controls style={{ width: "100%", height: "70%" , borderRadius:"20px" , objectFit:"fill" }} />
          <br/><br/> <h5 class="card-title" style={HeadingStyle}>Daryll Cullinan
</h5>
    <p class="card-text" style={ contentstyle}>South African Cricketer
</p>
          </div>
        </div>
 

        <div className="card" style={{ width: '18rem', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
        <img src="./images/members/dishant.jpeg" style={{padding:"15px", borderRadius:"35px"}}className="card-img-top" alt="..." />
          <div className="card-body">
          <h5 class="card-title" style={HeadingStyle}>Dishant Yagnik</h5>
    <p class="card-text"style={ contentstyle}>Indian cricketer and coach of Rajasthan Royals IPL team
</p>
          </div>
        </div>

    
      </div>

      <style>
        {`
        @media screen and (max-width: 768px) {
          .card {
            width: 100%;
            margin: 0.5rem 0;  // Adjust margin for better spacing on smaller screens
          }
        }
      `}
      </style>
    </div>
  );
}

export default Members;
