import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import wall from './pictures/backgrounds/wall2.jpg'

class Appetizer extends React.Component {

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
                title="Appetizers"
                items={[...this.props.appetizers]}
              />
            </MenuContainer>
          </div>
        );
    }
}

export default Appetizer;
