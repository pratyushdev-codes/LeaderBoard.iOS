import React from 'react';
import './Contact.css'; // Import CSS file for styling
import NavbarSPL from './NabarSPL';


const Contact = () => {
    return (

        <div>
            <NavbarSPL/>
          
            <br/>
            <br/>
            <br/>
            <br/>
            <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
       textAlign:"center"
      }}>Contact Info</h2>
              <div style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <div className="card" style={{ width: "32rem", borderRadius: "20px" }}>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"}}>Gujarat State Enquiries</h5>
                        <p className="card-text">9327692740, 6358588888, 9773496641</p><br/>
                        <a href='https://wa.me/+919327692740?text=urlencodedtext' className="btn btn-primary" style={{ display: "inline-flex", borderRadius: "20px", width: "20rem", alignItems: "center" }}>
                            <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
                                <img src="./images/whatsapplogo.png" style={{ borderRadius: "50%", width: "2rem", height: "2rem" }} alt="WhatsApp Logo" />
                            </div>
                    Chat with us
                        </a>
                    </div>
                </div>
            </div>
        </div>

    <br/>
    <br/>
    <div style={{ justifyContent: "center", display: "flex", textAlign: "center" }}>
            <div className="card" style={{ width: "32rem", borderRadius: "20px" }}>
                <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1rem',
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',
        margin: '0 10px',
        textAlign:"center"}}>Telangana, Andhra Pradesh & Karnataka State Enquiries</h5>
                        <p className="card-text">9327692740, 6358588888, 9773496641</p><br/>
                        <a href='https://wa.me/+918867533686?text=urlencodedtext' className="btn btn-primary" style={{ display: "inline-flex", borderRadius: "20px", width: "20rem", alignItems: "center" }}>
                            <div style={{ flex: "0 0 auto", marginRight: "10px" }}>
                                <img src="./images/whatsapplogo.png" style={{ borderRadius: "50%", width: "2rem", height: "2rem" }} alt="WhatsApp Logo" />
                            </div>
                    Chat with us
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <section className="contact" id="contact">
            <div className="container">
                <div className="heading text-center">
                    <h2 style={{fontWeight: 'bold',
        color: 'rgba(0, 0, 0, 0.7)',}}>Contact <span> Us </span></h2>
                    <p>Feel Free to contact us anytime!</p>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <div className="title">
                            <h3>Contact details</h3>
                        
                        </div>
                        <div className="content">
                            {/* Info-1 */}
                            <div className="info">
                                <i className="fas fa-mobile-alt"></i>
                                <h4 className="d-inline-block">PHONE :<br /><span>+919327692740</span></h4>
                            </div>
                            {/* Info-2 */}
                            <div className="info">
                                <i className="far fa-envelope"></i>
                                <h4 className="d-inline-block">EMAIL :<br /><span>msdca.ahmedabad@gmail.com</span></h4>
                            </div>
                            {/* Info-3 */}
                            <div className="info">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4 className="d-inline-block">ADDRESS :<br /><span>Gujarat University Convention and Exhibition Centre, 132 Feet Ring Rd, near Helmet Circle, Memnagar, Ahmedabad, Gujarat 380051</span></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="5" id="comment" placeholder="Message"></textarea>
                            </div>
                            <button className="btn btn-block" type="submit">Send Now!</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Contact;
