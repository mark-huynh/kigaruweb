import React from 'react';
import Home from './Home';
import Sushi from './Sushi';
import Appetizers from './Appetizers';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import {HashRouter, BrowserRouter as Router, Route} from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Mobilenav from './Mobilenav';




class App extends React.Component {

  state = {
    isDesktop: false,
    openSide: false
  };

  updatePredicate = this.updatePredicate.bind(this);

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
        <Route path = '/sushi' component = {Sushi}/>
        <Route path = '/appetizers' component = {Appetizers}/>
      </Router>
      <Footer/>
  </div>
      //{/* </HashRouter> */}
    );
  }
}

export default App;
