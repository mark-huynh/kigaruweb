import React from "react";
import Home from "./Home";
import Skewers from './Skewers';
import Sides from './Sides';
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
// import { allFood } from './food/allFood';

// const firebase = require("firebase");
import firebase from "firebase"
// // Required for side-effects
// require("firebase/firestore");

// import * as firebase from 'firebase';
// import flamelink from 'flamelink';
const flamelink = require("flamelink");

// Initialize Cloud Firestore through Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBKf10JLkllwUwiGX_tPKZlH92ED7tM6kQ",
  authDomain: "kigaru-ec3a1.firebaseapp.com",
  databaseURL: "https://kigaru-ec3a1-default-rtdb.firebaseio.com",
  projectId: "kigaru-ec3a1",
  storageBucket: "kigaru-ec3a1.appspot.com",
  messagingSenderId: "370142746603",
  appId: "1:370142746603:web:e21872b1a786bc72d22bae",
  measurementId: "G-QX0SRLYVB3",
});

const app = flamelink({
  firebaseApp, // required
  dbType: "cf", // can be either 'rtdb' or 'cf' for Realtime DB or Cloud Firestore
  env: "production", // optional, default shown
  locale: "en-US", // optional, default shown
  precache: true, // optional, default shown. Currently it only precaches "schemas" for better performance
});

let sushiCategories = ["Nigiri (1pc)", "Maki/Rolls", "Sashimi", "Gunkan (2pc)", "Specials"];
let drinksCategories = ["Soft Drinks", "Beer", "Chu-Hi", "Desserts"]
let mainDishesCategories = ["Japanese Curry", "Donburi", "Ramen/Udon"]
let appetizersCategories = ["Zensai"]
let skewerCategories = ["Skewers"]
let sidesCategories = ["Sides"]

let schemaKeys = ["mainDishes", "drinks", "sushi", "appetizers", "skewers", "sides"]

let categoriesMap = {
  "sushi": sushiCategories,
  "drinks": drinksCategories,
  "mainDishes": mainDishesCategories,
  "appetizers": appetizersCategories,
  "skewers": skewerCategories,
  "sides": sidesCategories
}

async function getFoodByCategory(key, category) {
  let foo =  await app.content.getByField({schemaKey: key, field: "category", value: category})
  return foo;
}


let itemsProcessed = 0

let allFood = {}


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
    allData: [],
    hours: "loading...",
    announcements: ""
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
    app.content.get({schemaKey: "hoursOfOperation"}).then(e => {
      this.setState({hours: e.inputField})
    })

    app.content.get({schemaKey: "announcements1"}).then(e => {
      this.setState({announcements: e.annoucement})
    })

    app.content.get({schemaKey: "sake"}).then(e => {
      this.setState({sakeURL: e.url})
    })
    
    schemaKeys.forEach(key => {
      allFood[key] = []
      let categories = categoriesMap[key]
      categories.forEach(category => {
        getFoodByCategory(key, category).then(allItemsOfCategory => {
          let categoryObj = {
            name: category
          }
          categoryObj.meals = []
          if(allItemsOfCategory != null){
              for(let [key, value] of Object.entries(allItemsOfCategory)) {
                let item = {
                  name: value.name,
                  price: value.price,
                  description: value.description
                }
                categoryObj.meals.push(item)
              }
            }
          categoryObj.meals.sort((a,b) => parseFloat(a.price) - parseFloat(b.price))
          allFood[key].push(categoryObj)
          itemsProcessed++
          if(itemsProcessed == sushiCategories.length + drinksCategories.length + mainDishesCategories.length + appetizersCategories.length) {
            // console.log(JSON.stringify(allFood, null, 2))
            this.setState({
              allData: allFood
            });
          } 
        })
      })
    })
    


    // this.setState({
    //   allData: allFood
    // });
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
          {this.state.isDesktop ? <Navbar announcements = {this.state.announcements} /> : <Mobilenav announcements = {this.state.announcements} openDrawer={this.state.openDrawer} closeDrawer={() => this.setState({openDrawer: false})}/>}
          <Route exact path='/' render={ () => (<Home
            handleListClick={() => this.setState({openDrawer: true})}
            hours = {this.state.hours}
            announcements = {this.state.announcements}
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
                items={this.state.allData.mainDishes}
              />
            )}
          />
          <Route
            path="/drinks"
            render={() => (
              <Drinks
                sakeURL={this.state.sakeURL}
                items={this.state.allData.drinks}
              />
            )}
          />
          <Route
            path="/skewers"
            render={() => (
              <Skewers
                items={this.state.allData.skewers}
              />
            )}
          />
          <Route
            path="/sides"
            render={() => (
              <Sides
                items={this.state.allData.sides}
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
