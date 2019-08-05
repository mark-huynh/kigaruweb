import Dialog from '@material-ui/core/Dialog';
import React from 'react'
import{connect} from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const mapStateToProps = (state)=>{
    return{
        items: state.items
    }
}

class Shopping extends React.Component{

    render()
    {
        return (
        <Dialog
           open={this.props.open}
           maxWidth='xl'
           fullWidth
           onClose={this.props.close}>
               {this.props.items.length == 0 ? <div>
                Empty
               </div> : 
               <Table>
                   <TableHead>
                       <TableCell>Item</TableCell>
                       <TableCell>Price</TableCell>
                   </TableHead>
                   <TableBody>
                       {this.props.items.map(item => (
                          <TableRow key={item.name}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell>{item.price}</TableCell>
                          </TableRow> 
                       ))}
                   </TableBody>
               </Table>}

        </Dialog>);
    }
}

export default connect(mapStateToProps)(Shopping);