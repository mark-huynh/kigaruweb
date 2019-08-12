import React from "react";
import Menu from "./Menu.jsx";
import MenuContainer from "./MenuContainer";
import wall from "./pictures/backgrounds/wall2.jpg";
import location from './pictures/location.svg';
import phone from './pictures/phone.svg';
import envelope from './pictures/envelope.svg';
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
          ((navigator.platform.indexOf("iPhone") != -1) || 
           (navigator.platform.indexOf("iPad") != -1) || 
           (navigator.platform.indexOf("iPod") != -1))
          window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
      else /* else use Google */
          window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
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
              <div onClick={this.handleMap}>
                <li>
                  <img src={location} />
                  <p>
                      Click to open maps to Kigaru (iOS or Android!)
                  </p>
                </li>
              </div>
            </Paper>
            <Paper elevation={3} style={{margin: '20px'}}>
              <a href="tel:123-123-1234">
                <li>
                  <img src={phone} />
                  <p>
                      Call Us @123-123-1234
                  </p>
                </li>
              </a>
            </Paper>
            <Paper elevation={3} style={{margin: '20px'}}>
              <a href="mailto:test@gmail.com">
                <li>
                  <img src={envelope} />
                  <p>
                      Email Us test@gmail.com
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