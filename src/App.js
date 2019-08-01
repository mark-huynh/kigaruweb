import React from 'react';
import Home from './Home';
import Sushi from './Sushi';
import Appetizers from './Appetizers';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import {HashRouter, BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <HashRouter basename='/'>
    <div>
    {/* <Router> */}
    <Navbar/>
      <Route exact path = '/' component = {Home}/>
      <Route path = '/sushi' component = {Sushi}/>
      <Route path = '/appetizers' component = {Appetizers}/>
    {/* </Router> */}
    <Footer/>
</div>
    </HashRouter>
  );
}

export default App;
