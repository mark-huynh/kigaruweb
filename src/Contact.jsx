import React from "react";
import wall from "./pictures/backgrounds/IMG_3932.JPG";
// import wall from "./pictures/backgrounds/wall2.jpg";
// import wall from './pictures/backgrounds/IMG_3929.JPG'

// src\pictures\backgrounds\IMG_3932.JPG
import location from './pictures/icons/location.svg';
import phone from './pictures/icons/phone.svg';
import envelope from './pictures/icons/envelope.svg';
import Paper from '@material-ui/core/Paper';

class Drinks extends React.Component {
  style = {
    backgroundImage: `url(${wall})`,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };

  handleMap = () => {
        if /* if we're on iOS, open in Apple Maps */
          ((navigator.platform.indexOf("iPhone") !== -1) || 
           (navigator.platform.indexOf("iPad") !== -1) || 
           (navigator.platform.indexOf("iPod") !== -1))
          window.open("maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=");
      else /* else use Google */
          window.open("https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=");
  }

  render() {
    return (
      <div style={this.style} className="menu-background">
        {!this.props.desktop && (
          <div style={this.style} className="mobile-menu-back" />
        )}
        <div className="contact-form">
          <ul>
            <Paper elevation={3} style={{margin: '20px'}}>
              <div onClick={this.handleMap} style={{cursor: 'pointer'}}>
                <li>
                  <img src={location} alt="location pointer"/>
                  <p>
                      Click to open maps to Kigaru (iOS or Android!)
                  </p>
                </li>
              </div>
            </Paper>
            <Paper elevation={3} style={{margin: '20px'}}>
              <a href="tel:971-371-3134">
                <li>
                  <img src={phone} alt="phone"/>
                  <p>
                      Call Us @971-371-3134
                  </p>
                </li>
              </a>
            </Paper>
            <Paper elevation={3} style={{margin: '20px'}}>
              <a href="mailto:kigarusushi@gmail.com">
                <li>
                  <img src={envelope} alt="envelope"/>
                  <p>
                      Email Us kigarusushi@gmail.com
                  </p>
                </li>
              </a>
            </Paper>
          </ul>
        </div>
      </div>
    );
  }
}

export default Drinks;