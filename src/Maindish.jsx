import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
// import wall from './pictures/backgrounds/wall2.jpg'
import wall from './pictures/backgrounds/IMG_3929.JPG'


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
                title="Combos"
                items={[...this.props.combos]}
              />
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
        );
    }
}

export default Maindish;
