import Dialog from '@material-ui/core/Dialog';
import React from 'react'
import{connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import {removeFromCart} from './actions/cartActions';
import Popover from '@material-ui/core/Popover';
//TODO: popover of description for each item on table?


const mapStateToProps = (state)=>{
    return{
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      removeFromCart: (menuItem)=>{dispatch(removeFromCart(menuItem))}
    }
}

class Shopping extends React.Component{

  handleDelete = (item) => {
    this.props.removeFromCart(item);
  }

    render()
    {
        let total = 0;
        for(let i = 0; i < this.props.items.length; i++)
        {
          total += this.props.items[i].price;
        }

        return (
          <Dialog
            open={this.props.open}
            maxWidth="xl"
            fullWidth
            onClose={this.props.close}
          >
            {console.log(this.props.items)}
            {this.props.items.length !== undefined && this.props.items.length == 0 ? (
              <div>
                <Grid className ="favorite-welcome"
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item><Icon color='error'>favorite</Icon></Grid>
                  <Grid item><h1>Favorites</h1></Grid>
                  <Grid item>Welcome to your favorites! As you browse our website you can add any items that interest you so 
                  there's no need to jump back and forth while browsing or ordering! Thanks for visiting our website! </Grid>
                  <Grid item>Tap/click on any items from the menus to reveal an optional heart to add them here!</Grid>
                </Grid>
              </div>
            ) : (
              <Table>
                <TableHead>
                  <TableCell></TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell>Price</TableCell>
                </TableHead>
                <TableBody>
                  {this.props.items.map(item => (
                    <TableRow key={item.name}>
                      <TableCell><Icon onClick={() => this.handleDelete(item)}>delete_outline</Icon></TableCell>
                      <TableCell>{item.name}</TableCell>
                      <TableCell>${item.price}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Total</TableCell>
                    <TableCell>
                      ${total}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            )}
          </Dialog>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shopping);