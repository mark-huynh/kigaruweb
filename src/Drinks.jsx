import React from "react";
import Menu from "./Menu.jsx";
import MenuContainer from "./MenuContainer";
// import wall from "./pictures/backgrounds/wall2.jpg";
import wall from './pictures/backgrounds/IMG_3936.JPG'

class Drinks extends React.Component {
  style = {
    backgroundImage: `url(${wall})`
  };

  render() {
    return (
      <div style={this.style} className="menu-background">
        {!this.props.desktop && (
          <div style={this.style} className="mobile-menu-back" />
        )}
        <MenuContainer>
          <Menu title="Beer" items={[...this.props.beer]} />

          <Menu title="Chu-Hi" items={[...this.props.chuHi]} />
          <Menu
            title="Soft Drinks"
            items={[...this.props.softDrinks]}
          />
          <Menu
            title="Dessert"
            items={[...this.props.dessert]}
          />
        </MenuContainer>
      </div>
    );
  }
}

export default Drinks;
