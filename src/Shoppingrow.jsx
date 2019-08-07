import React, { Component } from 'react';
import Popover from '@material-ui/core/Popover';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Icon from '@material-ui/core/Icon';
import {removeFromCart} from './actions/cartActions';
import{connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return{
      removeFromCart: (menuItem)=>{dispatch(removeFromCart(menuItem))}
    }
}

class Shoppingrow extends Component {


    handleDelete = (item) => {
        this.props.removeFromCart(item);
      }


      handleClick = (event) => {
          this.setState({anchorEl: event.currentTarget});
          this.setState({showDesc: true})
      }

    state={
        showDesc: false,
        anchorEl: null
      }

    render() {
        return (
          <React.Fragment>
            <Popover
              open={this.state.showDesc}
              onClose={() => this.setState({ showDesc: false })}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              {this.props.item.description !== "" && this.props.item.description !== undefined
                ? <p className="fav-text">
                    {this.props.item.description}
                </p>
                : <p className="fav-text">
                    No Description Available
                </p>}
            </Popover>
            <TableRow
              key={this.props.item.name}
            >
              <TableCell>
                <Icon onClick={() => this.handleDelete(this.props.item)}>
                  delete_outline
                </Icon>
              </TableCell>
              <TableCell  onClick={this.handleClick}>{this.props.item.name}</TableCell>
              <TableCell>${this.props.item.price}</TableCell>
            </TableRow>
          </React.Fragment>
        );
    }
}

export default connect(null, mapDispatchToProps)(Shoppingrow);