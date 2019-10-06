import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import wall from './pictures/backgrounds/wall2.jpg'

//TODO: Add skewers, chef specials, and side dishes (rice, miso, etc)
class Maindish extends React.Component {

    style={
        backgroundImage: `url(${wall})`
    }

    render(){

        return (
          <div style={this.style} className="menu-background">
            {!this.props.desktop && (
              <div style={this.style} className="mobile-menu-back" />
            )}
            <MenuContainer>
              <Menu
                title="Japanese Beef Curry"
                items={[...this.props.japaneseCurry]}
              />
              <Menu
                title="Ramen/Udon"
                items={[...this.props.noodles]}
              />
              <Menu
                title="Donburi"
                items={[...this.props.donburi]}
              />
            </MenuContainer>
          </div>

          /*
          {
            name: "ItemName",
            price: 10.5,
            description:
          },
          {
            name: "ItemName",
            price: 10.5,
            description:
          },
          {
            name: "ItemName",
            price: 10.5,
            description:
          },
          {
            name: "ItemName",
            price: 10.5,
            description:
          },
          {
            name: "ItemName",
            price: 10.5,
            description:
          },
          */
        );
    }
}

export default Maindish;
