import React from 'react';
import {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { ListItem } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import skewer from './pictures/appetizer.svg';
import beer from './pictures/beer.svg';
import home from './pictures/home.svg';
import noodle from './pictures/noodle.svg';
import sending from './pictures/sending.svg';
import sushi from './pictures/sushi.svg';
import { makeStyles } from '@material-ui/styles';




const useStyles = makeStyles({
    root: {
        color: 'white',
        position: 'fixed',
        left: 0,
        top: 0
    },
    top:{
        backgroundColor: 'rgb(209, 68, 68)',
        color: 'white'
    },
    list:{
        padding: 0
    },
    drawer:{
        fontFamily: "Montserrat"
    }
});

function Mobilenav(){

    const [shouldOpen, setOpen] = useState(false);
        const classes = useStyles();

        return (
            <React.Fragment>
                <Drawer className={classes.drawer} anchor="left"
                    open={shouldOpen}
                    onClose={() => setOpen(false)}>
                    <List className={classes.list}>
                        <ListItem className={classes.top}>
                            KIGARU SUSHI
                        </ListItem>
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
                    </List>
                </Drawer>
                <IconButton onClick={() => setOpen(true)} className={classes.root}>
                    <Icon >menu</Icon>
                </IconButton>
            </React.Fragment>
        );
    }

export default Mobilenav;
