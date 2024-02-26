
// import Lannding from './Components/SPL/Landing'      
import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Components/Home';
import { BrowserRouter } from 'react-router-dom';
import Registration from './Components/Registration';
import Registered from './Components/Registered';
import Middleware from './Components/Middleware';
import TeamRegistration from './Components/TeamRegistration';
import Contact from './Components/Contact';
import News from './Components/News';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/middleware" element={<Middleware/>} />
      <Route path="/Registration" element={<Registration/>} />
      <Route path="/Registered" element={<Registered/>}/>
      <Route path="/TeamRegistration" element={<TeamRegistration/>} />
      <Route path ="/Contact" element={<Contact/>}/>
      <Route path="/News" element={<News/>} />
   
    </Routes>
    </BrowserRouter>
  );
}

export default App;
