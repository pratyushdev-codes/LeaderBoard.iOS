import React from 'react';

function Concept() {
    return (
        <div style={{
            backgroundColor: 'rgba(100%, 97%, 99%, 0.8)', // Lighter background color
            padding: '20px',  // Optional: Add padding for better aesthetics
            borderTopLeftRadius:"50px",
           
          }}>
            <h2 style={{
        fontFamily: 'PT sans',
        color: '#65A0FB',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '20px 0',
        textAlign:"center"
      }}>Concept</h2>
            <center>
                <div className="accordion" id="accordionExample" style={{ maxWidth: '90%' }}>
                    {/* Accordion 1 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', flex: 1,
                                fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>
                                Cricket in India: A Dream Pursued
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)',
                                textAlign:"left"
                            }}>
                                Over the past couple of decades, the game of Cricket has almost become a religion in India and has given scope for children of all ages to participate at different levels to pursue their dream of playing for India.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 2 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>
                                 School Premier League Season-1
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)',
                                textAlign:"left"
                            }}>
                                Our School Premier League Season-1 successfully culminated among our MSDCA players for participating in the International Tour to South Africa.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 3 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>
                                School Premier League Season-2: Expanding reach to Schools
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)',
                                textAlign:"left"
                            }}>
                               School Premier League Season-2 invites school students in the age group of 14-19 from across India to participate. Successful participants will get a chance for international exposure.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 4 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>
                                Empowering 15L+ Indian Schools: Creating a Player in Every School
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)',
                                textAlign:"left"
                            }}>
                            

India has over 1.5 million schools, comprising over 1.1 million Government and Aided Schools, and 3.5 L Private Schools. Our objective is to engage with a maximum number of schools, aiming to enhance the skills of students, ultimately aspiring to cultivate at least one proficient player per school.
                            </div>
                        </div>
                    </div>

                    {/* Accordion 5 */}
                    <div className="accordion-item" style={{ borderRadius: '20px', border: '2px solid #dee2e6', marginBottom: '10px' }}>
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{
                                borderRadius: '20px', border: 'none', padding: '10px', fontSize: "20px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)'
                            }}>
                                Nurturing Future Stars: 10L+ Students on the International Stage
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={{
                                fontSize: "15px",
                                fontWeight: "bold",
                                color: 'rgba(0, 0, 0, 0.6)',
                                textAlign:"left"
                            }}>
                                In pursuit of our objective, we are providing an opportunity for over one million students to participate in our league. This offers them a platform to progress to an international stage, collaborating with clubs from various countries.
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default Concept;