import React from "react";
import Menu from "./Menu.jsx";
import MenuContainer from "./MenuContainer";
// import wall from "./pictures/backgrounds/wall1.jpg";
import wall from "./pictures/backgrounds/IMG_3928.JPG";
// C:\Users\Mark Huynh\Desktop\Dev\kigaruweb\src\pictures\backgrounds\IMG_3928.JPG
class Sushi extends React.Component {
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
          <Menu
            title="Nigiri (1pc)"
            items={[...this.props.nigiri]}
          />
          <Menu
            title="Gunkan (2pc)"
            items={[...this.props.gunkan]}
          />
          <Menu
            title="Specials"
            items={[...this.props.specials]}
          />
          <Menu
            title="Maki / Rolls"
            items={[...this.props.makirolls]}
          />
        </MenuContainer>
      </div>
    );
  }
}
export default Sushi;
