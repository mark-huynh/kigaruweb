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
import { allFood } from './food/allFood';

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
    showDialog: false,
    allData: []
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
    this.setState({isLoading: true})
    // fetch("https://8qqznzyrgh.execute-api.us-east-1.amazonaws.com/develop/menuitems")
    // .then(response => response.json())
    // .then(data => {
    //   this.setState({
    //       allData: data
    //   });
    // },
    this.setState({
      allData: allFood
    });
    // err => console.log("err:" + err));
    if(window.innerWidth > 890){
      // console.log("desktop")
    fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // insights key, it is ok to be exposed to public (until card gets associated)
      'X-Insert-Key': 'NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY'
    },
    body: JSON.stringify({
      "eventType": "Visits",
      "device": "Desktop"
    })
  });
    } else {
      // console.log("mobile")
    fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // insights key, it is ok to be exposed to public (until card gets associated)
      'X-Insert-Key': 'NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY'
    },
    body: JSON.stringify({
      "eventType": "Visits",
      "device": "Mobile"
    })
  });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 890 });
  }


  // Can refactor so all use same class (Ex:Sushi class) since all items are
  // parsed the same way. Just need to pass a image as a prop so they each have diff backgrounds
  // ex: line 99 could be the same as line 87, just diff pic prop
  render() {
    return (
      <BrowserRouter>
        <div>
          {this.state.isDesktop ? <Navbar /> : <Mobilenav openDrawer={this.state.openDrawer} closeDrawer={() => this.setState({openDrawer: false})}/>}
          <Route exact path='/' render={ () => (<Home
            handleListClick={() => this.setState({openDrawer: true})}
          />)} />
          <Route
            path="/sushi"
            component={() => (
              <Sushi
                items={this.state.allData.sushi}
              />
            )}
          />
          <Route
            path="/appetizers"
            render={() => <Appetizers items={this.state.allData.appetizers} />}
          />
          <Route
            path="/maindish"
            render={() => (
              <Maindish
                items={this.state.allData.main_dishes}
              />
            )}
          />
          <Route
            path="/drinks"
            render={() => (
              <Drinks
                items={this.state.allData.drinks}
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
          <Route
            path="/manager"
            render={() => window.location.replace("https://mark-huynh.github.io/kigaru-manager/")}
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
