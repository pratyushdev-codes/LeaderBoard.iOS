import React from 'react'

import NavbarSPL from './NabarSPL';
const HeadingStyle={
    fontFamily: 'PT sans',
    color: '#65A0FB',
    fontSize: '1.7rem',
    fontWeight: 'bold',
  }

  const contentstyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgba(0, 0, 0, 0.5)',

    textAlign: "center"
  };
function News() {
  return (
    <div>
        <NavbarSPL/>
        <br/>
        <br/>
        <br/>
        
<div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
  

  <h2 style={{
     fontFamily: 'PT sans',
     color: '#65A0FB',
     fontSize: '2.5rem',
     fontWeight: 'bold',
 
   }}>News</h2>
  <p style={{
     fontSize: '1rem',
     fontWeight: 'bold',
     color: 'rgba(0, 0, 0, 0.7)',

   }}>A glimpse of School Premier League - Season 1</p>





{/* Telugu News */}
   <div className="card" style={{ width: '100%', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <div className="card-body" style={{  borderRadius: '20px' }}>
       <video src="./images/News/6.mp4" controls style={{ width: "100%", height: "70%" , borderRadius:"20px" , objectFit:"fill" }} />
    
       </div>
     </div>
     <br/>
  
   <h2 style={HeadingStyle}>Featured in : </h2>

<p style={{
     fontSize: '1rem',
     fontWeight: 'bold',
     color: 'rgba(0, 0, 0, 0.7)',
     textAlign:'center'
   }}
   >
    Telugu Media:
    Andhra Jyothi,
   Sakshi,
   Namasthe Telangana,
   Velugu,
   Nava Telangana ,
   Andhra Prabha
   <br/>
   English Media:
   Deccan Chronicle ,
HansIndia
Times of India,
Telangana today,
<br/>
Digital Media:
Hindusthan Times,
Abp,
HashTag
<br/>
Electronic Media:
Ntv,
Abn,
Tv5,
V6,
Sakshi tv






    </p>
    <br/>


   <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#F4F1FD", flexWrap: 'wrap',borderTopRightRadius: "50px" ,borderBottomLeftRadius:"50px" }}>
     <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <img src="./images/News/1.jpeg" className="card-img-top" alt="Image 1" style={{ height: '300px', borderRadius: '20px' }} />
     </div>

     <div className="card" style={{ width: '26rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <img src="./images/News/2.jpeg" className="card-img-top" alt="Image 2" style={{ height: '300px', borderRadius: '20px' }} />
     </div>

     <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <img src="./images/News/8.jpeg" className="card-img-top" alt="Image 3" style={{ height: '300px', borderRadius: '20px' }} />
     </div>

     <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <img src="./images/News/9.jpeg" className="card-img-top" alt="Image 4" style={{ height: '300px', borderRadius: '20px' }} />
     </div>

     <div className="card" style={{ width: '30rem',height:"25rem", margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <img src="./images/News/5.jpeg" className="card-img-top" alt="Image 6" style={{ height: '370px',width:"500px", borderRadius: '20px' }} />
     </div>
     
     <div className="card" style={{ width: '18rem', height:"25rem",margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <img src="./images/News/3.jpeg" className="card-img-top" alt="Image 5" style={{ height: '400px', borderRadius: '20px' }} />
     </div>

 
     <div className="card" style={{ width: '32rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <img src="./images/News/11.jpeg" className="card-img-top" alt="Image 7" style={{ height: '300px',marginTop:"40px", borderRadius: '20px' }} />
     </div>
     
{/* Video 2 */}
    
   </div>

   <div className="card" style={{ width: '100%', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
       <div className="card-body" style={{  borderRadius: '20px' }}>
       <video src="./images/News/6.mp4" controls style={{ width: "100%", height: "70%" , borderRadius:"20px" , objectFit:"fill" }} />
    
       </div>
     </div>

{/* English News */}

<div className="card" style={{ width: '100%', margin: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
  <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: "#F4F1FD", flexWrap: 'wrap', borderTopRightRadius: "50px", borderBottomLeftRadius: "50px" }}>
    <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
      <img src="./images/News/14.jpeg" className="card-img-top" alt="Image 1" style={{ height: '300px', borderRadius: '20px' }} />
    </div>

    <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
      <img src="./images/News/15.jpeg" className="card-img-top" alt="Image 1" style={{ height: '300px', borderRadius: '20px' }} />
    </div>

    <div className="card" style={{ width: '18rem', margin: '0.25rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: "20px" }}>
      <img src="./images/News/18.jpeg" className="card-img-top" alt="Image 1" style={{ height: '300px', borderRadius: '20px' }} />
    </div>
  </div>
</div>

</div>
</div>
);
}

export default News;

