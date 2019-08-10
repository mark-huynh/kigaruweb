import React from "react";
import Home from "./Home";
import Sushi from "./Sushi";
import Appetizers from "./Appetizers";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import { HashRouter, Route } from "react-router-dom";
import Mobilenav from "./Mobilenav";
import Maindish from "./Maindish";
import Drinks from "./Drinks";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Shopping from "./Shopping";
import posed from "react-pose";
import {nigiri} from './food/nigiri'
import {gunkan} from './food/gunkan'
import {makirolls} from './food/makirolls'
import {appetizers} from './food/appetizers'
import * as maindish from './food/maindish'  
import * as drinks from './food/drinks'  

const Pop = posed.div({
  static: {},
  grow: {
    // scale: 10
  }
});

class App extends React.Component {
  state = {
    isDesktop: false,
    openSide: false,
    showDialog: false
  };

  updatePredicate = this.updatePredicate.bind(this);
  handleClickButton = this.handleClickButton.bind(this);
  handleClose = this.handleClose.bind(this);

  handleClickButton() {
    this.setState({ showDialog: true });
  }

  handleClose() {
    this.setState({ showDialog: false });
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 890 });
  }

  render() {
    return (
      <HashRouter basename="/">
        <div>
          {this.state.isDesktop ? <Navbar /> : <Mobilenav />}
          <Route exact path="/" component={Home} />
          <Route
            path="/sushi"
            component={() => (
              <Sushi
                nigiri={nigiri}
                gunkan={gunkan}
                makirolls={makirolls}
                desktop={this.state.isDesktop}
              />
            )}
          />
          <Route
            path="/appetizers"
            component={() => <Appetizers appetizers={appetizers} />}
          />
          <Route
            path="/maindish"
            component={() => (
              <Maindish
                japaneseCurry={maindish.japaneseCurry}
                noodles={maindish.noodles}
                donburi={maindish.donburi}
              />
            )}
          />
          <Route
            path="/drinks"
            component={() => (
              <Drinks
                beer={drinks.beer}
                chuHi={drinks.chuHi}
                softDrinks={drinks.softDrinks}
                dessert={drinks.dessert}
              />
            )}
          />
          <Pop pose={this.state.showDialog ? "static" : "grow"}>
            <Fab
              onClick={this.handleClickButton}
              style={{
                position: "fixed",
                bottom: "0",
                right: "0",
                zIndex: 2,
                marginRight: "5px",
                marginBottom: "10px"
              }}
              size={this.state.isDesktop ? "large" : "small"}
            >
              <Icon
                style={
                  this.state.isDesktop
                    ? { fontSize: "40px" }
                    : { fontSize: "30px" }
                }
                color={"error"}
              >
                favorite_border
              </Icon>
            </Fab>
          </Pop>
          <Shopping open={this.state.showDialog} close={this.handleClose} />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
