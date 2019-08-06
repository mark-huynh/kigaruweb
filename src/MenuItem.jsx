import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addToCart} from './actions/cartActions';
import Icon from '@material-ui/core/Icon';

const mapDispatchToProps =(dispatch) =>{
    return{
        addToCart: (menuItem)=>{dispatch(addToCart(menuItem))}
    }
}


class MenuItem extends Component {

    state={
        showHeart: false,
        activeHeart: false
    }//MAKE HEART DISSAPEAR AFTER COUPLE SECONDS
//Dialog box when added
    handleClick = (name) => {
        this.props.addToCart(name);
        this.setState({activeHeart: true})
        //TODO: check if itemname is inside of the redux store and if it is, make heart filled
    }

    handleBoxClick = () => {
        this.setState({showHeart: true});
    }

    render() {
        return (
          <li onClick={() => this.handleBoxClick()}>
            {this.props.item.name} {this.props.item.price}{" "}
            {this.state.showHeart && <Icon style={{fontSize: "medium", paddingLeft: '7px'}} color={this.state.activeHeart ? 'error' : 'disabled'}onClick={() => this.handleClick(this.props.item)}>
              favorite
            </Icon>}
            <p>{this.props.item.description}</p>
          </li>
        );
    }
}

export default connect (null, mapDispatchToProps)(MenuItem);