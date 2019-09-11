import React from "react";
import Home from "./Home";
import Sushi from "./Sushi";
import Appetizers from "./Appetizers";
import Footer from "./Footer.js";
import Navbar from "./Navbar.js";
import { HashRouter, Route, BrowserRouter } from "react-router-dom";
import Mobilenav from "./Mobilenav";
import Maindish from "./Maindish";
import Drinks from "./Drinks";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import Shopping from "./Shopping";
import Contact from "./Contact";
import posed from "react-pose";
import {appetizers} from './food/appetizers'
import * as maindish from './food/maindish'  
import * as drinks from './food/drinks'  
import * as sushi from './food/sushi'  

const Pop = posed.div({
  static: {},
  grow: {
    // scale: 10
  }
});

class App extends React.Component {
  state = {
    isDesktop: false,
    openDrawer: false,
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
      <BrowserRouter>
        <div>
          {this.state.isDesktop ? <Navbar /> : <Mobilenav openDrawer={this.state.openDrawer} closeDrawer={() => this.setState({openDrawer: false})}/>}
          <Route exact path={process.env.PUBLIC_URL + '/'} render={ () => (<Home
            handleListClick={() => this.setState({openDrawer: true})}
          />)} />
          <Route
            path="/sushi"
            component={() => (
              <Sushi
                nigiri={sushi.nigiri}
                gunkan={sushi.gunkan}
                makirolls={sushi.makirolls}
                desktop={this.state.isDesktop}
              />
            )}
          />
          <Route
            path="/appetizers"
            render={() => <Appetizers appetizers={appetizers} />}
          />
          <Route
            path="/maindish"
            render={() => (
              <Maindish
                japaneseCurry={maindish.japaneseCurry}
                noodles={maindish.noodles}
                donburi={maindish.donburi}
              />
            )}
          />
          <Route
            path="/drinks"
            render={() => (
              <Drinks
                beer={drinks.beer}
                chuHi={drinks.chuHi}
                softDrinks={drinks.softDrinks}
                dessert={drinks.dessert}
              />
            )}
          />
          <Route
            path="/contact"
            render={() => (
              <Contact
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
      </BrowserRouter>
    );
  }
}

export default App;
