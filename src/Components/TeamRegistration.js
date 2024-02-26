import React from 'react'
import { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import displayRazorpay from "./PaymentGateway";
import { BrowserRouter } from 'react-router-dom';

import NavbarSPL from './NabarSPL';


function Registeration() {


  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [paymentId, setPaymentId] = useState(null);
  const navigate = useNavigate();
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

   
  function validateDateOfBirth(dateString) {
    // Parse the date string into a Date object
    const parts = dateString.split('-');
    const dob = new Date(parts[0], parts[1] - 1, parts[2]); // Year, month (0-indexed), day
    // Check if the date falls within the specified range
    const minDate = new Date('2005-01-01');
    const maxDate = new Date('2024-12-31');
    return dob >= minDate && dob <= maxDate;
  }
  

  const headingStyle = {
    fontFamily: "PT sans",
    color: "#65A0FB",
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center",
  };
  const declarationStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px', //Adjust as needed
  };
  const bodyStyle = {
    textAlign: "center",
    fontSize: "15px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)',
  };
  const formStyle = {
    borderRadius: "20px",

  }
  const playerStyle={
    textAlign:"center",
    fontSize:"22px",
    fontWeight: "bold",
    color: 'rgba(0, 0, 0, 0.7)',
      marginBottom:"15px",
      marginTop:"10px"
  }


async  function submitForm(formData) {
    await fetch('https://script.google.com/macros/s/AKfycbxLTAOdnBLvZkYr-bS8E5ozLjn41giXoqyn8gfLFzCaQz584lm7fdlRFAeOzL8HhGPU/exec', {
      method: 'POST',
      body: formData,
    }).then(() => {
      console.log('Data Submitted');

    });
  }


  useEffect(() => {

    const savePaymentId = (id) => {
      console.log("Payment ID saved:", id);

    };


    if (paymentId) {
      savePaymentId(paymentId);
    }
  }, [paymentId]);




  function submit(e){ 
    
    const formEles = document.querySelectorAll('.row.g-3.needs-validation');
        // Checking all required fields
        let isValid = true;

    for (let index = 0; index < formEles.length; index++)
    {
    e.preventDefault();
    const formData = new FormData(formEles[index]);


    // document.getElementById('submit').setAttribute("disabled", "disabled");

    // document.getElementById('submit').textContent = "Processing";

    //  first name
    const firstNameValue = formData.get("Firstname");
    if (firstNameValue.trim().length < 2) {
      alert("Enter a valid first name");
      isValid = false;
    }

    // the last name
    const lastNameValue = formData.get("Lastname");
    if (lastNameValue.trim().length < 2) {
      alert("Enter a valid last name");
      isValid = false;
    }



    // Validation for Email Id
    // Validation for Email Id
    const emailValue = formData.get("Email");
    if (emailValue.trim().length < 2) {
      alert("Enter a valid email ID");
      isValid = false;
    }



    // Validation for Adhaar Card Number
    const adhaarValue = formData.get("Adhaarno");
    if (adhaarValue.trim().length !== 12) {
      alert("Enter a valid Adhar Card Number of 12 Digits.");
      isValid = false;
    }

    // Validation for Passport Number
    // const passportValue = formData.get("Passportno");
    // if (passportValue.trim().length !== 8) {
    //   alert("Enter a valid Passport Number of 8 Digits ");
    //   isValid = false;
    // }

    // Validation for Age
    const ageValue = formData.get("Age");
    if (ageValue < 14 || ageValue > 19) {
      alert("Age must be between 14 and 19 years");
      isValid = false;
    }

    // Data of Birth Validation:
    const dobValue = formData.get("Dob");
    if (!validateDateOfBirth(dobValue)) {
      alert(`Date of Birth between ${new Date().getFullYear()-19} and ${new Date().getFullYear()-14}`);
      return;
    }

    // Validation for School Name
    // const schoolNameValue = formData.get("School");
    // if (schoolNameValue.trim().length < 2) {
    //   alert("Enter a valid School/College name ");
    //   isValid = false;
    // }

    // Validation for Phone Number
    const primaryPhoneValue = formData.get("Primaryphoneno");
    if (primaryPhoneValue.trim().length !== 10) {
      alert("Enter a valid Primary Phone Number");
      isValid = false;
    }

    // Validation for Alternate Phone Number
    const alternatePhoneValue = formData.get("Secondaryphoneno");
    if (alternatePhoneValue.trim().length !== 10 && alternatePhoneValue.trim().length !== 0) {
      alert("Enter a valid Alternate Phone Number");
      isValid = false;
    }

    // Validation for Permanent Address
    const addressValue = formData.get("Address");
    if (addressValue.trim().length < 5) {
      alert("Enter a valid address ");
      isValid = false;
    }

    if (!isValid) {
      document.getElementById('submit').removeAttribute("disabled");

      document.getElementById('submit').textContent = "Continue To Payment";
    }

  

  
  }
    // If all conditions are met, submitting the form
    const fetchData = async () => {
      const url = 'https://msdca-teambackend.onrender.com/ping';
      const controller = new AbortController();
      const timeoutMillis = 5000; // Set the timeout duration in milliseconds (adjust as needed)

      // Set up a timeout for the fetch request
      const timeoutId = setTimeout(() => controller.abort(), timeoutMillis);

      try {
        const response = await fetch(url, { signal: controller.signal });

        // Clear the timeout since the request completed within the timeout
        clearTimeout(timeoutId);

        //Check if Backend Server is active
        console.log(response);
        if (response.ok) {
          if (isValid) {
            displayRazorpay(async (paymentId, orderId) => {
              if (paymentId && orderId) {
                setPaymentSuccessful(true);
                setPaymentId(paymentId);
           
                //change visibikity to visible
                for (let index = 0; index < formEles.length; index++) {
                  var data = new FormData(formEles[index])
                  data.append("PaymentId", paymentId);
                 await submitForm(data);
                  
                }
                setPaymentId(paymentId);

                navigate('/Registered', { state: { paymentId } }); // Pass paymentId as a prop


              } else {
                alert('Payment not successful. Please complete the payment.');
              
              }
            });
          }
        }
        else {
          //Execute when backend server is inactive
          alert("Payment Server Is Down, Please Try After Sometime.");
        }

      } catch (error) {
        //Execute when backend server is inactive
        alert("Payment Server Is Down, Please Try After Sometime.");
      }
    };

    // Call the fetchData function
    if(isValid){
      fetchData();
    }

};







  return (
    <div>
      <NavbarSPL />

      <div>
        <img src="./images/School premier league (3).png" style={{ width: "100%", height: "auto", borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px" }} />
      </div>
      <br />
      <br />
      <h2 style={headingStyle}>Registration Form for Individual Players</h2>
      <br />
   

      <br />
      <h2 style={playerStyle} >
        Player 1 Details
      </h2>
      <form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>


{/* Player 2 */}
<br/>
<h2 style={playerStyle} >
        Player 2 Details
      </h2>
<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 3 Details
      </h2>
{/* Player 3 */}
<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 4 Details
      </h2>
{/* Player 4 */}
<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 5 Details
      </h2>
{/* Player 5 */}

<br/>

<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 6 Details
      </h2>
{/* Player 6 */}



<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 7 Details
      </h2>
{/* Player 7 */}


<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 8 Details
      </h2>

{/* Player 8 */}
<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>
<br/>
<h2 style={playerStyle} >
        Player 9 Details
      </h2>

{/* Player 9 */}


<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 10 Details
      </h2>
{/* Player 10 */}


<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>


<br/>
<h2 style={playerStyle} >
        Player 11 Details
      </h2>
{/* Player 11 */}


<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>
</form>

<br/>
<h2 style={playerStyle} >
        Player 12 Details
      </h2>

{/* Player 12 */}


<form
        className="row g-3 needs-validation " onSubmit={(e) => submit(e)} noValidate >
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            First name *
          </label>
          <div className="input-group mb-3">
            <input
              type="text"
              style={formStyle}
              className="form-control"
              placeholder="Enter your first name"
              aria-label="First Name"
              aria-describedby="basic-addon1"
              name="Firstname"
              onBlur={(e) => {
                const firstNameValue = e.target.value;

                if (firstNameValue.length <= 1) {
                  alert("Enter a valid name ");
                }
              }}
              required
            />
            <div className="invalid-feedback">
              Please enter your first name (at least 2 characters).
            </div>
          </div>
        </div>
        {/* Last name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom02" className="form-label">
            Last name *
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} className="form-control" placeholder="Enter your last name" aria-label="Last Name" aria-describedby="basic-addon1" name="Lastname"
              onBlur={(e) => {
                const lastNameValue = e.target.value;

                if (lastNameValue.length <= 1) {
                  alert("Enter a last valid name ");
                }
              }}
              required

            />
          </div>
        </div>

        {/* Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Phone Number *
          </label>
          <input
            style={formStyle}
            type="number"
            name="Primaryphoneno"
            className="form-control"
            id="validationCustomAdhaar"
            required
            onBlur={(e) => {
              const primaryphoneno = e.target.value;
              if (primaryphoneno.length < 10 || primaryphoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your primary phone number</div>
        </div>


        {/* Payment ID */}

        {/* Skill */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Skill Specification *
          </label>
          <select id="inputState" className="form-select" name="Skill" required style={formStyle}>
            <option selected>Select a Skill Specification</option>
            <option>All Rounder</option>
            <option>Batsman</option>
            <option>Bowler</option>
            <option>Wicket Keeper / Batsman</option>
          </select>
        </div>

        {/* Dominant Hand -Batting */}

        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Batting*
          </label>
          <select id="inputState" className="form-select" required name="Battingdominant" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>

        {/* Batting Style and playing role */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Batting Style and playing role *
          </label>
          <select id="inputState" className="form-select" required name="Battingstyle" style={formStyle}>
            <option selected>Select Order</option>
            <option>Opener</option>
            <option>Middle</option>
          </select>
        </div>



        {/* Dominant Hand */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Dominant Hand - Bowling*
          </label>
          <select id="inputState" className="form-select" required name="Dominanthand" style={formStyle}>
            <option selected>Select your dominant hand</option>
            <option>Left</option>
            <option>Right</option>
          </select>
        </div>
        {/* Bowler Style */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Bowling Style *
          </label>
          <select id="inputState" name="Bowlerstyle" required className="form-select" style={formStyle}>
            <option selected>Select Order</option>
            <option>Fast</option>
            <option>Medium</option>
            <option>Spinner</option>
          </select>
        </div>




        {/* Date of birth */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="dob">Date of Birth: *</label>
          <input
            type="date"
            id="dob"
            name="Dob"
            className="form-control"
            style={formStyle}
            required
          />
        </div>


        {/* Age */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Age *
          </label>
          <input
            style={formStyle}
            name="Age"
            type="number"
            className="form-control"
            id="validationCustomAdhaar"
            required


          />
          <div className="invalid-feedback">Enter your age</div>
        </div>



        {/* Gender Selection */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label" >
            Gender *
          </label>
          <select id="inputState" className="form-select" name="Gender" required style={formStyle}>
            <option selected>Select your Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </div>

        {/* Adhaar Card No. */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Adhaar Card Number *
          </label>
          <input
            style={formStyle}
            type="text"
            name="Adhaarno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder="Enter 12 digit Aadhar Card number"
            required
            onBlur={(e) => {
              const adharnumber = e.target.value.trim();

              if (adharnumber.length === 12) {
                // Valid Aadhar Card Number
              } else {
                alert('Enter a valid Adhar Card Number of 12 Digits.');
              }
            }}
          />
          <div className="invalid-feedback">Please provide Adhaar Card No.</div>
        </div>
        {/* Passport no */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Passport No.
          </label>
          <input
            style={formStyle}
            type="text"
            name="Passportno"
            className="form-control"
            id="validationCustomAdhaar"
            placeholder='Enter your 8 digit Passport Number'

          />
          <div className="invalid-feedback">If no, enter NA.</div>
        </div>



        {/* School */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            School / College
          </label>
          <input
            style={formStyle}
            type="text"
            className="form-control"
            id="validationCustomAdhaar"

            name='School'
            placeholder='Enter your School/College'


          />
          <div className="invalid-feedback">Enter your school</div>
        </div>

        {/* Father's Name */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Father's Name *
          </label>
          <div className="input-group mb-3">
            <input type="text" className="form-control" name="Fathername" required style={formStyle} placeholder=" Father's Name" aria-label="First Name" aria-describedby="basic-addon1"
              onBlur={(e) => {
                const fathername = e.target.value;
                if (fathername.length < 2) {
                  alert("Enter a valid Father Name")
                }
              }}

            />
          </div>
        </div>


        {/* Email Id */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomUsername" className="form-label">
            Email Id *
          </label>
          <div className="input-group has-validation">
            <input style={formStyle}
              type="text"
              className="form-control"
              name="Email"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required
              placeholder='name@mail.com'
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </div>
        </div>

        {/* Alternate Phone number */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustomAdhaar" className="form-label">
            Alternate Phone Number
          </label>
          <input
            style={formStyle}
            type="number"
            className="form-control"
            id="validationCustomAdhaar"

            name="Secondaryphoneno"
            onBlur={(e) => {
              const alternamephoneno = e.target.value;
              if (alternamephoneno.length < 10 && alternamephoneno.length > 10) {
                alert("Enter a valid Phone Number")
              }
            }}
          />
          <div className="invalid-feedback">Enter your alternate phone number</div>
        </div>
        {/* Played before */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="inputState" className="form-label">
            Played for any School(Club/ District / State / Country)
          </label>
          <select id="inputState" style={formStyle} required name="Playedbefore" className="form-select">
            <option selected>Choose...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        {/* Describe */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            If yes please describe, else write NA
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} required name="Description" className="form-control" placeholder="Description" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Medical History */}
        <div className="col-md-4" style={bodyStyle}>
          <label htmlFor="validationCustom01" className="form-label">
            Medical History (if any)
          </label>
          <div className="input-group mb-3">
            <input type="text" style={formStyle} name="Medicalhistory" required className="form-control" placeholder="Write NA is not applicable" aria-label="First Name" aria-describedby="basic-addon1" />
          </div>
        </div>
        {/* Address */}
        <div class="mb-3" style={bodyStyle}>
          <label for="exampleFormControlTextarea1" class="form-label">Permanant Residential Address *</label>
          <center><textarea class="form-control" name="Address" required id="exampleFormControlTextarea1" style={{ borderRadius: "20px", width: "80%" }} rows="3"
            onBlur={(e) => {
              const address = e.target.value;
              if (address.length < 10) {
                alert("Enter a valid address ");
              }
            }}
          ></textarea></center>
        </div>









        {/* Consent form  */}
        <br />
        <div className="container">
          <style>
            {`
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      .heading {
        text-align: center;
        margin-bottom: 20px;
        font-family: 'PT Sans', sans-serif;
        color: #65A0FB;
        font-weight: bold;
      }

      .text {
        text-align: left;
        margin-bottom: 15px;
        font-size: 15px;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.7);
      }
    `}
          </style>
          <h2 className="heading" style={headingStyle}>Terms, Conditions & Code of Conduct</h2>

          <div className="text">
            <p>1) Compliance with the trainee's code of conduct is obligatory for every individual; failure to adhere to it will result in immediate removal from the tournament, without any prior notice or exceptions.</p>
          </div>
          <div className="text">
            <p>2) Participants are required to bring their personal training and safety gear/equipment for both the trail session and the tournament.</p>
          </div>
          <div className="text">
            <p>3)Participants are encouraged to exhibit disciplined, polite, and sportsmanlike behavior, aligning with the spirit of the game, to maintain the principles of the "Gentleman's Game."</p>
          </div>
          <div className="text">
            <p>4) All participants must arrive at their assigned match 20 minutes before the scheduled time. Failure to report on time without prior notice or a valid reason may result in the participant being ineligible for the tournament.</p>
          </div>
          <div className="text">
            <p>5) The Umpire holds the ultimate authority on the match field; all participants must adhere to the umpire's decisions.</p>
          </div>
          <div className="text">
            <p>7) Participants are expected to follow safety guidelines and instructions provided by the team at all times. However, it is the responsibility of the participants to ensure proper precautions are taken while on the field.</p>
          </div>
          <div className="text">
            <p>8) Participants should promptly report any disputes to the tournament organizer or their assistants.</p>
          </div>
          <div className="text">
            <p>9) In the event of any incident, accident, or injury during the training session, the coaching staff and officials will administer immediate first aid. If necessary, participants may be referred for further medical treatment at their own expense.</p>
          </div>

          <div className='text'>
            <p>10) Kindly note that MSDCA shall not bear any responsibility for any injury/untoward incident that might occur during the matches or during Own Transportation Transit, however, we will be putting in place all necessary precautions and safety protocols for the tournament.</p>
          </div>
          <div className='text'>
            <p>11) Students should ensure their parent concern for participating in the SPL Season 2</p>
          </div>
          <div className="text">
            <p>10) The registration fee is non-refundable.</p>
            {/* Checkboxes */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" required />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate" style={{ marginLeft: '10px' }}>
                  I accept all the Terms and Conditions.
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* Declaration */}
        <div className="container">
          <h2 className="heading" style={headingStyle}>Declaration</h2>
          <div style={{
            textAlign: "center", fontSize: "15px",
            fontWeight: "bold",
            color: 'rgba(0, 0, 0, 0.7)',
          }}>
            <p style={{ textAlign: "left" }}>I hereby affirm that the information provided above, including details about myself, location, and mobile numbers, is accurate to the best of my knowledge. In the event of any inaccuracies, I take full responsibility, and I acknowledge that my registration may be canceled by the management of<br /> MS DHONI CRICKET ACADEMY</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" required />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate" style={{ marginLeft: '10px' }}>
                  Declaration
                </label>
              </div>

            </div>

          </div>

        </div>
        <div class="card container text-center" style={{ borderRadius: "20px" }}>
          <div class="card-body">
            <h5 class="card-title" style={headingStyle}>Payment Details</h5>
            <p class="card-text" style={bodyStyle}>Total Payable Amount: ₹35,400/-</p>
            <p class="card-text" style={{ fontSize: "13px" }}>Registration Fees(₹30,000) + GST(₹5,400)*</p>


            <br />
            <p style={{ fontSize: "13px" }}>You will be redirected to the next page automatically on successful payment.<br />If any mode of Payment is not working , try with another mode of Payment.<br />
              Kindly do not exit the gateway while payment is being done.<br />Make sure you fill all the mandatory fields in the form.</p>

          </div>
          <br />
        </div>
        <div className="col-12 text-center">
          <button
            className="btn btn-primary"
            type="submit"
            value="submit"
            id="submit"
            onClick={(e) => submit(e)}
            noValidate

            style={{ borderRadius: "20px", backgroundColor: "#036EFD" }}
          >
            Continue to Payment
          </button>
        </div>


  {/* Add form ending here */}
  </form>
      <br />

    </div>

  );
}

export default Registeration;
