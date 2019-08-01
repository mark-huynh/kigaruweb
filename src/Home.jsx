import React from 'react';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
class Home extends React.Component{

    render() {
        return(
            <div className = "main">
                Everything looks ugly right now lol, don't worry it will look a lot different and all images are just placeholders for now
              <div className = "imghrs">
                <img src = "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2017/05/Izakaya-1-1024x683.jpg"/>
                <img src="https://cdn.doordash.com/media/restaurant/cover/KigaruSushi3486BeavertonOR.png"/>
            <ul className = "hours">
              <li>Monday - Saturday: 5PM - 11PM</li>
              <li>Sunday : Closed</li>
            </ul>
            </div>
            </div>
        );
    }

}

export default Home;