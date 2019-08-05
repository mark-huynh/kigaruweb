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
import { NavLink } from 'react-router-dom';




const useStyles = makeStyles({
    root: {
        color: 'white',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 2
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
    },
    inactive:{
        color:'#fff',
        textDecoration: 'none',
    },
    active:{
        color: 'red'
    }
});

function Mobilenav(){

    const [shouldOpen, setOpen] = useState(false);
        const classes = useStyles();

        return (
          <React.Fragment>
            <Drawer
              className={classes.drawer}
              anchor="left"
              open={shouldOpen}
              onClose={() => setOpen(false)}
            >
              <List className={classes.list}>
                <ListItem className={classes.top}>
                  KIGARU SUSHI
                </ListItem>
                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/"
                  exact
                >
                  <ListItem button key="Home">
                    <ListItemIcon>
                      <img src={home} />
                    </ListItemIcon>
                    Home
                  </ListItem>
                </NavLink>

                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/sushi"
                >
                  <ListItem button key="Sushi">
                    <ListItemIcon>
                      <img src={sushi} />
                    </ListItemIcon>
                    Sushi Bar
                  </ListItem>
                </NavLink>
                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/appetizers"
                >
                  <ListItem button key="Appetizers">
                    <ListItemIcon>
                      <img src={skewer} />
                    </ListItemIcon>
                    Appetizers
                  </ListItem>
                </NavLink>

                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/maindish"
                >
                  <ListItem button key="Main">
                    <ListItemIcon>
                      <img src={noodle} />
                    </ListItemIcon>
                    Main Dish
                  </ListItem>
                </NavLink>

                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/drinks"
                >
                  <ListItem button key="Drinks">
                    <ListItemIcon>
                      <img src={beer} />
                    </ListItemIcon>
                    Drinks
                  </ListItem>
                </NavLink>

                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/contact"
                >
                  <ListItem button key="Contact">
                    <ListItemIcon>
                      <img src={sending} />
                    </ListItemIcon>
                    Contact
                  </ListItem>
                </NavLink>
              </List>
            </Drawer>
            <IconButton
              onClick={() => setOpen(true)}
              className={classes.root}
            >
              <Icon>menu</Icon>
            </IconButton>
          </React.Fragment>
        );
    }

export default Mobilenav;
