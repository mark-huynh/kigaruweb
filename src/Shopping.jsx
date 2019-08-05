import Dialog from '@material-ui/core/Dialog';
import React from 'react'
import{connect} from 'react-redux';

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
               asdf
               <p>
                   {this.props.items[0].test}
               </p>
        </Dialog>);
    }
}

export default connect(mapStateToProps)(Shopping);