import React from 'react';
import Home from './Home';
import Sushi from './Sushi';
import Appetizers from './Appetizers';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import {HashRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import Mobilenav from './Mobilenav';
import Maindish from './Maindish'
import Drinks from './Drinks';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import Shopping from './Shopping';
import posed from 'react-pose';


const Pop = posed.div({
  static:{
  },
  grow:{
    // scale: 10
  }
})


class App extends React.Component {

  state = {
    isDesktop: false,
    openSide: false,
    showDialog: false
  };

  updatePredicate = this.updatePredicate.bind(this);
  handleClickButton = this.handleClickButton.bind(this);
  handleClose = this.handleClose.bind(this);


  handleClickButton(){
    this.setState({showDialog: true});
  }

  handleClose(){
    this.setState({showDialog: false});
  }

  componentDidMount(){
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate(){
    this.setState({isDesktop: window.innerWidth > 890});
  }

  render(){
    return (
      // <HashRouter basename='/'>
      <div>
      <Router>
      {this.state.isDesktop ?
      <Navbar/> : <Mobilenav/>}
        <Route exact path = '/' component = {Home}/>
        <Route path = '/sushi' component = {() => <Sushi desktop={this.state.isDesktop}/>}/>
        <Route path = '/appetizers' component = {Appetizers}/>
        <Route path = '/maindish' component = {Maindish}/>
        <Route path = '/drinks' component = {Drinks}/>
      </Router>
      <Pop pose={this.state.showDialog ? 'static' : 'grow'}>
      <Fab onClick={this.handleClickButton} style={{position: "fixed", bottom: '0', right: '0'}}size="small">
        <Icon color={"error"}>favorite_border</Icon>
      </Fab>
      </Pop>
      <Shopping open={this.state.showDialog} close={this.handleClose}/>
      <Footer/>
  </div>
      //{/* </HashRouter> */}
    );
  }
}

export default App;
