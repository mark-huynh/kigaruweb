import React from 'react';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
class Home extends React.Component{

    render() {
        return(
            <div className = "main">
              <div className = "imghrs">
                KIGARU SUSHI
              </div>
                <img style={{width: "50vw"}} src="https://cdn.doordash.com/media/restaurant/cover/KigaruSushi3486BeavertonOR.png"/>
            <ul className = "hours">
              <li>Monday - Saturday: 5PM - 11PM</li>
              <li>Sunday : Closed</li>
            </ul>
            </div>
        );
    }

    //TODO: On window resize when navbar is too big, switch to side panel/drawer nav bar (with the three bars)

}

export default Home;