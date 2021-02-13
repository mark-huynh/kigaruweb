import React from 'react';
import {useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import { ListItem } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItemIcon } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import skewer from './pictures/icons/appetizer.svg';
import beer from './pictures/icons/beer.svg';
import home from './pictures/icons/home.svg';
import noodle from './pictures/icons/noodle.svg';
import sending from './pictures/icons/sending.svg';
import sushi from './pictures/icons/sushi.svg';
import { makeStyles } from '@material-ui/styles';
import { NavLink } from 'react-router-dom';
import takeout from "./pictures/icons/takeout.svg";



async function insights(category) {
  let resp = await fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // insights key, it is ok to be exposed to public (until card gets associated)
      'X-Insert-Key': 'NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY'
    },
    body: JSON.stringify({
      "eventType": "TabClicks",
      "device": "Mobile",
      "category": category
    })
  });
  // resp = await resp.json();
  // console.log(resp);
  // console.log("done")
}

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

function Mobilenav(props){

    const [shouldOpen, setOpen] = useState(false);
        const classes = useStyles();

        return (
          <React.Fragment>
            <Drawer
              className={classes.drawer}
              anchor="left"
              open={shouldOpen || props.openDrawer}
              onClose={() => {
                setOpen(false);
                props.closeDrawer();
              }}
            >
              <List
                onClick={() => {
                  setOpen(false);
                  props.closeDrawer();
                }}
                className={classes.list}
              >
                <ListItem className={classes.top}>KIGARU SUSHI</ListItem>
                <ListItem className={classes.top}>
                Gift cards now available! 
                </ListItem>
                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/"
                  exact
                >
                  <ListItem onClick={() => insights("Home")} button key="Home">
                    <ListItemIcon>
                      <img src={home} alt="home" />
                    </ListItemIcon>
                    Home
                  </ListItem>
                </NavLink>
                <a
                  target="_blank"
                  href="https://ordering.chownow.com/order/22955/locations"
                >
                  <ListItem onClick={() => insights("Order Online")} button key="Home" button key="Takeout">
                    <ListItemIcon>
                      <img src={takeout} alt="takeout" />
                    </ListItemIcon>
                    Order Online
                  </ListItem>
                </a>
                <NavLink
                  style={{ textDecoration: "none" }}
                  classname={classes.inactive}
                  activeClassName={classes.active}
                  to="/sushi"
                >
                  <ListItem onClick={() => insights("Sushi")} button key="Sushi">
                    <ListItemIcon>
                      <img src={sushi} alt="sushi" />
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
                  <ListItem onClick={() => insights("Appetizers")} button key="Appetizers">
                    <ListItemIcon>
                      <img src={skewer} alt="appetizers" />
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
                  <ListItem onClick={() => insights("Main Dishes")} button key="Main">
                    <ListItemIcon>
                      <img src={noodle} alt="main dishes" />
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
                  <ListItem onClick={() => insights("Drinks")} button key="Drinks">
                    <ListItemIcon>
                      <img src={beer} alt="drinks" />
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
                  <ListItem onClick={() => insights("Contact")} button key="Contact">
                    <ListItemIcon>
                      <img src={sending} alt="contact" />
                    </ListItemIcon>
                    Contact
                  </ListItem>
                </NavLink>
              </List>
            </Drawer>
            <IconButton onClick={() => setOpen(true)} className={classes.root}>
              <Icon style={{ fontSize: "30px" }}>menu</Icon>
            </IconButton>
          </React.Fragment>
        );
    }

export default Mobilenav;
