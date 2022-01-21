import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { addToCart } from "./actions/cartActions";
import MenuItem from './MenuItem';

const mapDispatchToProps = dispatch => {
  return {
    addToCart: menuItem => {
      dispatch(addToCart(menuItem));
    }
  };
};

class Menu extends React.Component {
  state = {
    openSnack: false
  };

  handleClick = name => {
    this.props.addToCart(name);
  };

  render() {
    const items = this.props.items;

    let menuBlocks = [];

    let size = 5;

    while (items.length > 0) menuBlocks.push(items.splice(0, size));

    return (
      <div className="menu">
        <h1 className="menu-title">{this.props.title}</h1>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={5}
        >
          {this.props.children}

          {menuBlocks.map(menuBlock => (
            <Grid item lg={6}>
              {React.createElement(
                "ul",
                null,
                menuBlock.map(menuItem => <MenuItem item={menuItem} />)
              )}
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Menu);