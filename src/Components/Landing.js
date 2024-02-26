import React from 'react'
// import './Landing.css'


const Landing = () => {
    return (


        <div className='landing '>
            <img src='/Images/Stadium.jpg' alt="" class='bg-img' style={{maxWidth:'100%', maxHeight:'auto', backgroundColor: "rgba(255, 0, 0, 0.1)"}} />
            <div class='img-fluid text-center card-img-overlay  ' style={{top:'50%', color:'white'}}>
                <h1>M S Dhoni Cricket Academy</h1>

                SCHOOL PREMIER LEAGUE – SEASON 2
                <br/>
                T-20 FORMAT
                <br/>
                <br/>

                *A tournament for school cricketers from ages 15yrs to 19yrs

<br/>
<br/>
                <button type="button" class="btn btn-light  btn-outline-secondary">Register Now</button>
            </div>

        </div>

    )
}

export default Landing
