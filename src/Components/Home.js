// import '../App.css'
import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Features from './Features';
import Facilities from './Facilities';
import Achievement from './Achievement';
import Centers from './Centers';
import Concept from './Concept';
import Why from './Why';
import Reviews from './Reviews';
import Members from './Members';
import Sponsers from './Sponsers';
import Ambassadors from './Ambassadors';
import Images from './Images';
import Partners from './Partners';
// import Contact from './Contact';
// import Footer from './Footer';
import { BrowserRouter } from 'react-router-dom';
import Popup from './Popup';
import { useState } from 'react';

function Home() {
    const [showPopup, setShowPopup] = useState(true);

    const closePopup = () => {
      setShowPopup(false);
    };
    return (
        <div className="Landing">   
            <Navbar/>   
            <Header/>
        
            <About/>
            <Features/>
            <Facilities/>
            <Achievement/>
            <br/>
            <Centers/>
            <br/>
            <Concept/>
            <Why/>
            <Reviews/>
            <br/>
            <Members/>
            <br/>
            <Sponsers/>
            <Ambassadors/>
            <Images/>
            <br/>
            <Partners/>
            <Popup imageUrl="./images/SPL Banner.png"/>
            <br/>
            <br/>
            <br/>
        </div>
    );
}

export default Home;
