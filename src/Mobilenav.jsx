import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { ListItem } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import skewer from './pictures/appetizer.svg';
import beer from './pictures/beer.svg';
import home from './pictures/home.svg';
import noodle from './pictures/noodle.svg';
import sending from './pictures/sending.svg';
import sushi from './pictures/sushi.svg';




class Mobilenav extends React.Component {

    state = {
        open: false
    }


    render() {

        return (
            <div classname="mobile-menu">
                <Drawer anchor="left"
                    open={this.state.open}
                    onClose={() => this.setState({ open: false })}>
                    <List>
                        <ListItem button key="Home">
                            <ListItemIcon>
                                <img src={home} />
                            </ListItemIcon>
                            Home
        </ListItem>
                        <ListItem button key="Sushi">
                            <ListItemIcon>
                                <img src={sushi} />
                            </ListItemIcon>
                            Sushi Bar
        </ListItem>
                        <ListItem button key="Appetizers">
                            <ListItemIcon>
                                <img src={skewer} />
                            </ListItemIcon>
                            Appetizers
        </ListItem>
                        <ListItem button key="Main">
                            <ListItemIcon>
                                <img src={noodle} />
                            </ListItemIcon>
                            Main Dish
        </ListItem>
                        <ListItem button key="Drinks">
                        <ListItemIcon>
                                <img src={beer} />
                            </ListItemIcon>
                            Drinks
        </ListItem>
                        <ListItem button key="Contact">
                            <ListItemIcon>
                                <img src={sending} />
                            </ListItemIcon>
                            Contact
        </ListItem>
                    </List>                </Drawer>
                <button onClick={() => this.setState({ open: true })}>
                    test
                </button>
            </div>
        );
    }
}

export default Mobilenav;
