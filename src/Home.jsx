import React from 'react';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import posed from 'react-pose';

const Description = posed.ul({
  open: {
    delayChildren: 650,
    staggerChildren: 475
  },
  closed: {delay: 300 }
});

const DescriptionItem = posed.li({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

const FadeIn = posed.div({
  open:{
    opacity: 1,
    transition: {duration: 300}
  },
  closed:{
    opacity: 0
  }
})

class Home extends React.Component {

  state = {
    isOpen: false
  }

  toggle = () =>
    this.setState({
      isOpen: !this.state.isOpen
    });

  componentDidMount() {
    setTimeout(this.toggle, 1300);
  }
  render() {
    return (
      <div className="main">
        <div className="imghrs" />
        <div className="title-text">
          <div>
            <FadeIn pose={this.state.isOpen ? 'open' : 'closed'}>KIGARU SUSHI</FadeIn>
            <Description pose={this.state.isOpen ? 'open' : 'closed'}>
              <DescriptionItem>Japanese Cusine</DescriptionItem>
              <DescriptionItem>Sushi</DescriptionItem>
              <DescriptionItem>Ramen</DescriptionItem>
              <DescriptionItem>Drinks</DescriptionItem>
            </Description>
          </div>
        </div>
        <img
          className="kigaru-image"
          src="https://cdn.doordash.com/media/restaurant/cover/KigaruSushi3486BeavertonOR.png"
        />
        <ul className="hours">
          <li>Monday - Saturday: 5PM - 11PM</li>
          <li>Sunday : Closed</li>
          <br />
          <li> 3486 SW Cedar Hills Blvd, Beaverton, OR 97005</li>
        </ul>
      </div>
    );
  }

}

export default Home;