import React from 'react';
import Grid from '@material-ui/core/Grid';

class Menu extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        const items = this.props.items;
        
        let menuBlocks = []
            
        let size = 5;

        while(items.length > 0)
            menuBlocks.push(items.splice(0, size));

        return(

            <div>
                <h1>{this.props.title}</h1>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {menuBlocks.map(
                        menuBlock => (
                            React.createElement('ul', null,
                                menuBlock.map(menuItem => (
                                    <li>
                                        {menuItem.name} {menuItem.price}
                                        <p>
                                            {menuItem.description}
                                        </p>
                                    </li>
                                ))
                            )
                        )
                    )}
                </Grid>
            </div>

            
        );
    }
}

export default Menu;