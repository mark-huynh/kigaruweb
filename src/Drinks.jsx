import React from "react";
import Menu from "./Menu.jsx";
import MenuContainer from "./MenuContainer";
// import wall from "./pictures/backgrounds/wall2.jpg";
import wall from './pictures/backgrounds/IMG_3936.JPG'
import CircularProgress from '@material-ui/core/CircularProgress';


class Drinks extends React.Component {
  style = {
    backgroundImage: `url(${wall})`
  };

  tmp = {
    padding: 20
  }

  render() {
    return (
      <div style={this.style} className="menu-background">
        {!this.props.desktop && (
          <div style={this.style} className="mobile-menu-back" />
        )}
        <MenuContainer>
          <Menu title={"Sake"} items={[]}>
            <div style={this.tmp}>
              <a href={this.props.sakeURL}>Tap for External Menu</a>
            </div>
          </Menu>
          {this.props.items ? (
            this.props.items.map(item => {
              console.log(item);
              return <Menu title={item.name} items={[...item.meals]} />;
            })
          ) : (
            <CircularProgress/>
          )}
        </MenuContainer>
      </div>
    );
  }
}

export default Drinks;
