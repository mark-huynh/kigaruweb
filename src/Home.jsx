import React from "react";
import posed from "react-pose";
import logo from './pictures/Logo_7404-page-001.jpg';

const Description = posed.ul({
  open: {
    delayChildren: 650,
    staggerChildren: 475
  },
  closed: { delay: 300 }
});

const DescriptionItem = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

const FadeIn = posed.div({
  open: {
    opacity: 1,
    transition: { duration: 300 }
  },
  closed: {
    opacity: 0
  }
});

class Home extends React.Component {
  state = {
    isOpen: false
  };

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  componentDidMount() {
    setTimeout(this.toggle, 1300);
  }

  handleMap = () => {
    if (
      /* if we're on iOS, open in Apple Maps */
      navigator.platform.indexOf("iPhone") !== -1 ||
      navigator.platform.indexOf("iPad") !== -1 ||
      navigator.platform.indexOf("iPod") !== -1
    )
      window.open(
        "maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="
      );
    /* else use Google */ else
      window.open(
        "https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="
      );
  };

  render() {
    return (
      <div className="main">
        <div className="imghrs" />
        <div className="title-text">
          <div>
            <FadeIn pose={this.state.isOpen ? "open" : "closed"}>
              KIGARU SUSHI
            </FadeIn>
            <Description pose={this.state.isOpen ? "open" : "closed"} onClick={this.props.handleListClick} >
              <DescriptionItem>Japanese Cusine</DescriptionItem>
              <DescriptionItem>Sushi</DescriptionItem>
              <DescriptionItem>Ramen</DescriptionItem>
              <DescriptionItem>Drinks</DescriptionItem>
            </Description>
          </div>
        </div>
        {/* <div style={{fontSize: '3vw', fontFamily: 'Lato', padding: '10px'}}>
  <b>Due to governor Kate Brown's order we will be limiting all orders to take-out only during the business hours below. Thank you for understanding. </b>
</div> */}
        <div className="info-wrap">
          <img
            alt="kigaru logo"
            className="kigaru-image"
            // src="https://cdn.doordash.com/media/restaurant/cover/KigaruSushi3486BeavertonOR.png"
            src={logo}
          />
          <ul
            className="hours"
            style={{ cursor: "pointer" }}
            onClick={this.handleMap}
          >
             <li><b>Tuesday - Saturday: <br/></b> 11:30AM - 2:30PM</li>
            <li>& 4PM - 11PM</li>
            <li><b>Sunday:</b> <br/> 11:30AM - 2:30PM </li>
            <li>& 4PM - 10PM</li>
            <li><b>Monday</b>: <br/>Closed</li>
            <br />
            <li> 3486 SW Cedar Hills Blvd, Beaverton, OR 97005</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
