import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from './actions/cartActions';
import {removeFromCart} from './actions/cartActions';
import Icon from '@material-ui/core/Icon';

const mapDispatchToProps =(dispatch) =>{
    return{
        addToCart: (menuItem)=>{dispatch(addToCart(menuItem))},
        removeFromCart: (menuItem)=>{dispatch(removeFromCart(menuItem))}
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.items
    }
}

class MenuItem extends Component {
  state = {
    showHeart: false,
    activeHeart: false
  };

  timer = null;

  handleClickAdd = name => {
    this.props.addToCart(name);
    this.setState({ activeHeart: true });
    this.setState({ showHeart: true });
    clearTimeout(this.timer);
  };

  handleClickRemove = item => {
    this.props.removeFromCart(item);
    this.setState({ activeHeart: false });
    this.setState({ showHeart: true });
    clearTimeout(this.timer);
  };

  handleBoxClick = () => {
    this.setState({ showHeart: true });
    clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.setState({ showHeart: false });
      }, 2000);
  };

  componentDidMount = () => {
    if (
      this.props.items.some(e => e.name === this.props.item.name) &&
      this.state.activeHeart !== true
    ) {
      this.setState({ activeHeart: true });
    }
  }; //TODO: refactor? Race conditions here or too many checks?

  render() {
    return (
      <li onDoubleClick={() => alert("hi")} onClick={() => this.handleBoxClick()}>
        {this.props.item.name} {this.props.item.price}{" "}
        {this.state.showHeart && (
          <Icon
            style={{ fontSize: "medium", paddingLeft: "7px" }}
            color={this.state.activeHeart ? "error" : "disabled"}
            onClick={
              this.state.activeHeart
                ? () => this.handleClickRemove(this.props.item)
                : () => this.handleClickAdd(this.props.item)
            }
          >
            favorite
          </Icon>
        )}
        <p>{this.props.item.description}</p>
      </li>
    );
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(MenuItem);