import React from 'react';
import {currentID} from './PaymentGateway'


function Registered({ paymentId }) {

    const textStyle = {
        textAlign: "center",
        fontSize: "15px",
        fontWeight: "bold",
        color: 'rgba(0, 0, 0, 0.5)',
    };

    return (
        <div>
            <div style={{
                width: "100%",
                height: "2rem",
                backgroundColor: "#FCD571",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add this line for box shadow
            }}>
                <marquee>
                    <p style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#036EFD',
                        textAlign: "left"
                    }}>
                        <span className="badge bg-danger">Congrats</span>&nbsp;&nbsp;
                        Successfully Registered School Premier League, Season - 2
                    </p>
                 
                </marquee>
                <br/> 
               
            </div>
            <div className="container" style={{ textAlign: 'center', paddingTop: '20px', height: '100vh' }}>
                <div className="card" style={{ maxWidth: '24rem', margin: 'auto', borderColor: 'transparent' }}>
                <p style={{ textAlign: "center",
        fontSize: "18px",
       marginBottom:"30px",
        fontWeight: "bold",
        color: 'rgba(0, 0, 0, 0.5)',}}>You ticket is generated for SPL Season - 2</p>
                    
                    <img
                        src="./images/SPL Banner.png"
                        style={{ borderRadius: '20px', width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body">
                        <a href="#" className="btn btn-primary" style={{ borderRadius: '20px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
                            You have been Registered!
                        </a>
                        <br />
                        <br />
                        <p style={textStyle}>Your Payment Id: {currentID}</p>
                        <p style={textStyle}>Save this Payment ID for future purposes.</p>
                 
                        <p className="card-text" style={textStyle}>
                            For further queries, contact our customer support. Event details will be shared with you in the meantime.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registered;
