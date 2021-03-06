import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from './actions/cartActions';
import {removeFromCart} from './actions/cartActions';
import Icon from '@material-ui/core/Icon';
import Dialog from '@material-ui/core/Dialog';


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
    activeHeart: false,
    showImage: false
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
      <li style={{maxWidth: '600px', cursor: 'pointer'}}
        onClick={() => this.handleBoxClick()}
      >
        {this.props.item.picture !== undefined &&
          this.props.item.picture !== "" && (
            <div onClick={() => this.setState({ showImage: true })}>
              <Icon style={{marginRight: '7px', fontSize: '30px', verticalAlign: 'bottom'}}>
                crop_original
              </Icon>
            </div>
          )}
        <div className="item-title">
          {this.props.item.name} {this.props.item.price}
        </div>{" "}
        {this.state.showHeart && (
          <div onClick={
            this.state.activeHeart
              ? () => this.handleClickRemove(this.props.item)
              : () => this.handleClickAdd(this.props.item)
          }>
            <Icon
              style={{ fontSize: "20px", paddingLeft: "7px" }}
              color={this.state.activeHeart ? "error" : "disabled"}
              
            >
              favorite
            </Icon>
          </div>
        )}
        <p className="description">{this.props.item.description}</p>
        <Dialog
          open={this.state.showImage}
          maxWidth='xl'
          onClose={() => {
            this.setState({ showImage: false });
          }}
        >
          <img style={{width: '75vw'}} src={this.props.item.picture} alt={this.props.name}/>
        </Dialog>
      </li>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);