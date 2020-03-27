import React from "react";
import Menu from "./Menu.jsx";
import MenuContainer from "./MenuContainer";
// import wall from "./pictures/backgrounds/wall1.jpg";
import wall from "./pictures/backgrounds/IMG_3928.JPG";
// C:\Users\Mark Huynh\Desktop\Dev\kigaruweb\src\pictures\backgrounds\IMG_3928.JPG
import CircularProgress from '@material-ui/core/CircularProgress';

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
          {this.props.items ? 
          this.props.items.map(item => {
            console.log(item);
            return (
              <Menu
                title={item.name}
                items={[...item.meals]}
              />
            );
          }): <CircularProgress/>}
        </MenuContainer>
      </div>
    );
  }
}
export default Sushi;
