import React from 'react';

function Centers() {
  return (
    <>
      <div  id="concepts">
        <h2 style={{
          fontFamily: 'PT sans',
          color: '#65A0FB',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          margin: '20px 0',
          textAlign: "center"
        }}>Our Centers</h2>
        <p style={{
          fontSize: '1rem',
          fontWeight: 'bold',
          color: 'rgba(0, 0, 0, 0.7)',
          margin: '0 10px',
          textAlign: "center"
        }}>
          Discover our diverse range of centers for a unique and enriching journey.
        </p>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

          {/* Card 1 */}
          <div className="card" style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="map-container" style={{ width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.542555618472!2d72.53285977538462!3d23.040562415656478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853621d55185%3A0xd21d507f311ca2ad!2sMS%20DHONI%20CRICKET%20ACADEMY!5e0!3m2!1sen!2sin!4v1706773834789!5m2!1sen!2sin" width="300" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title" style={{
                fontFamily: 'PT sans',
                color: '#65A0FB',
                fontSize: '20px',
                fontWeight: 'bold',
              }}>MS DHONI CRICKET ACADEMY, Ahmedabad</h5>
              <p className="card-text" style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.6)',
              }}>Gujarat University Convention and Exhibition Centre, 132 Feet Ring Rd, near Helmet Circle, Memnagar, Ahmedabad, Gujarat 380051</p>
              <a href="https://maps.app.goo.gl/MDPyAt34NQ4BKSwY9" className="btn btn-primary" style={{ borderRadius: '20px', display: 'inline-block' }}>Direction</a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card" style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="map-container" style={{ width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4054604794756!2d78.55329237526452!3d17.440297201278494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98ff40000001%3A0xcb8efe288ded50!2sDelhi%20Public%20School%20-%20Nacharam!5e0!3m2!1sen!2sin!4v1706774149751!5m2!1sen!2sin" width="300" height="300" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title" style={{
                fontFamily: 'PT sans',
                color: '#65A0FB',
                fontSize: '20px',
                fontWeight: 'bold',
              }}>Delhi Public School - Nacharam, Hyderabad</h5>
              <p className="card-text" style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.6)',
              }}>Plot No.44, Uppal Mandal, 42A, behind BSNL Telephone exchange, Durga Nagar, Nacharam, Hyderabad, Secunderabad, Telangana 500076</p>
              <a href="https://maps.app.goo.gl/p3nkZD3rbK6ZebreA" className="btn btn-primary" style={{ borderRadius: '20px', display: 'inline-block' }}>Direction</a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card" style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="map-container" style={{ width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0738674082086!2d70.69911147536591!3d22.275191543805054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cc11133558b5%3A0x12214f062c9322d4!2sGreenwood%20International%20School!5e0!3m2!1sen!2sin!4v1706774748376!5m2!1sen!2sin" width="300" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title" style={{
                fontFamily: 'PT sans',
                color: '#65A0FB',
                fontSize: '20px',
                fontWeight: 'bold',
              }}>Greenwood International School , Rajkot</h5>
              <p className="card-text" style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.6)',
              }}>Mirambica College Campus, Kalawad Rd, opp. Motel The Village, Rajkot, Haripar Pal, Gujarat 360005</p>
              <a href="https://maps.app.goo.gl/Lk535BKDZ5WeAUTQ8" className="btn btn-primary" style={{ borderRadius: '20px', display: 'inline-block' }}>Direction</a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="card" style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="map-container" style={{ width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.9940994722124!2d78.54196377526142!3d17.267520406247122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba3eaba5543bd%3A0x7ee50ed79b79e791!2sDelhi%20Public%20School%20-%20Nadergul!5e0!3m2!1sen!2sin!4v1706774836737!5m2!1sen!2sin" width="300" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title" style={{
                fontFamily: 'PT sans',
                color: '#65A0FB',
                fontSize: '20px',
                fontWeight: 'bold',
              }}>Delhi Public School - Nadergul, Hyderabad</h5>
              <p className="card-text" style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.6)',
              }}>Survey No 469/1, Nadergul, Rd, Hyderabad, Telangana 501510</p>
              <br />
              <br/>
              <a href="https://maps.app.goo.gl/J5HRj4noiTgT5dca8" className="btn btn-primary" style={{ borderRadius: '20px', display: 'inline-block' }}>Direction</a>
            </div>
          </div>

          {/* Card 5 */}
          <div className="card" style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="map-container" style={{ width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2169902265928!2d78.32805557526297!3d17.353288603786392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb950dec1ac515%3A0x70747ff7f512f2b!2sPallavi%20International%20School%20-%20Gandipet!5e0!3m2!1sen!2sin!4v1706774993071!5m2!1sen!2sin" width="300" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title" style={{
                fontFamily: 'PT sans',
                color: '#65A0FB',
                fontSize: '20px',
                fontWeight: 'bold',
              }}>Pallavi International School - Gandipet, Hyderabad</h5>
              <p className="card-text" style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.6)',
              }}>786, Himayath Nagar, Gandipet ‘X’ Road, Moinabad Mandal, Hyderabad, Telangana 500075</p>
              <a href="https://maps.app.goo.gl/8RDPhWLvc1mPADwBA" className="btn btn-primary" style={{ borderRadius: '20px', display: 'inline-block' }}>Direction</a>
            </div>
          </div>

          {/* Card 6 */}
          <div className="card" style={{ width: '25rem', marginRight: '1rem', marginBottom: '1rem', borderColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="map-container" style={{ width: '250px', height: '250px', borderRadius: '50%', overflow: 'hidden' }}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.7497643604006!2d72.54452437540088!3d23.68490519128751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c4fc1a82d9cc1%3A0xab14b55faa92b2c6!2sSankalchand%20Patel%20University%20(SPU)!5e0!3m2!1sen!2sin!4v1706775080842!5m2!1sen!2sin" width="300" height="300" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="card-body" style={{ textAlign: 'center' }}>
              <h5 className="card-title" style={{
                fontFamily: 'PT sans',
                color: '#65A0FB',
                fontSize: '20px',
                fontWeight: 'bold',
              }}>Sankalchand Patel University, Visnagar</h5>
              <p className="card-text" style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.6)',
              }}>Sankalchand Patel Vidyadham Ambaji-Gandhinagar State Highway, Visnagar, Gujarat 384315</p>
              <br />
              <a href="https://maps.app.goo.gl/3r36Bofdu7zcjr149" className="btn btn-primary" style={{ borderRadius: '20px', display: 'inline-block' }}>Direction</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Centers;
