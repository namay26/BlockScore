import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import Flag from './Components/Flag';
import Buytkt from './Components/BuyTicket';
import Home from './Components/Home';
import TeamRegistrationForm from './Components/TeamRegistrationForm';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
const myFirstElement = (
<>
<Router>
<Routes>
        <Route path="/buytkt" element={<Buytkt />} />
        <Route path="/" element={<Home />} />
        <Route path="/trm" element={<TeamRegistrationForm />} />
        
</Routes>
</Router>       
</>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);