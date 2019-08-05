import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import {addToCart} from './actions/cartActions'


const mapDispatchToProps =(dispatch) =>{
    return{
        addToCart: (menuItem)=>{dispatch(addToCart(menuItem))}
    }
}

class Menu extends React.Component{

    constructor(props){
        super(props);
    }

    handleClick = (name) => {
        this.props.addToCart(name);
    }

    render(){

        const items = this.props.items;
        
        let menuBlocks = []
            
        let size = 5;

        while(items.length > 0)
            menuBlocks.push(items.splice(0, size));

        return(

            <div className="menu">
                <h1 className="menu-title">{this.props.title}</h1>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    spacing={4}
                >
                    {menuBlocks.map(
                        menuBlock => (
                            <Grid item>
                            {React.createElement('ul', null,
                            menuBlock.map(menuItem => (
                                <li style={{touchAction: 'manipulation'}}onDoubleClick={() => {this.handleClick(menuItem)}}>

                                    {/* DISABLE DOUBLE TAP TO ZOOM ON MOBILE DEVICE. Try moving touchaction to body tag */}
                                        {menuItem.name} {menuItem.price}
                                        <p>
                                            {menuItem.description}
                                        </p>
                                    </li>
                                ))
                            )}
                            </Grid>
                        )
                    )}
                </Grid>
            </div>

            
        );
    }
}


export default connect(null, mapDispatchToProps)(Menu);