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
import Shoppingrow from './Shoppingrow'


const mapStateToProps = (state)=>{
    return{
        items: state.items
    }
}

class Shopping extends React.Component{
 

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
            {this.props.items.length !== undefined &&
            this.props.items.length === 0 ? (
              <div>
                <Grid
                  className="favorite-welcome"
                  container
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item>
                    <Icon color="error">favorite</Icon>
                  </Grid>
                  <Grid item>
                    <h1>Favorites</h1>
                  </Grid>
                  <Grid item>
                    Welcome to your favorites! As you browse our website
                    you can add any items that interest you so there's
                    no need to jump back and forth while deciding!
                    Thanks for visiting our website!{" "}
                  </Grid>
                  <Grid item>
                    Tap/click on any items from the menus to reveal an
                    optional heart to add them here!
                  </Grid>
                </Grid>
              </div>
            ) : (
              <React.Fragment>
                <p className="fav-text">
                  {" "}
                  Click on any item name on list for description and
                  photo (if they are available)
                </p>
                <Table>
                  <TableHead>
                    <TableCell />
                    <TableCell>Item</TableCell>
                    <TableCell>Price</TableCell>
                  </TableHead>
                  <TableBody>
                    {this.props.items.map(item => (
                      <Shoppingrow item={item} />
                    ))}
                    <TableRow>
                      <TableCell />
                      <TableCell align="right">Total</TableCell>
                      <TableCell>${total}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <p className="disclaimer">
                  **Prices and item availability are not guaranteed
                </p>
              </React.Fragment>
            )}
          </Dialog>
        );
    }
}

export default connect(mapStateToProps)(Shopping);