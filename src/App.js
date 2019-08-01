import React from 'react';
import Home from './Home';
import Sushi from './Sushi';
import Appetizers from './Appetizers';
import Footer from './Footer.js';
import Navbar from './Navbar.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
<div>
    <Router>
    <Navbar/>
      <Route exact path = '/kigaruweb' component = {Home}/>
      <Route path = '/kigaruweb/sushi' component = {Sushi}/>
      <Route path = '/kigaruweb/appetizers' component = {Appetizers}/>
    </Router>
    <Footer/>
</div>
  );
}

export default App;
