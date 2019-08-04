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
                                <li>
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

export default Menu;