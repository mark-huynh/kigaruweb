import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

return(
<div className = "navwrap">

<ul className = "nav">
  <li>
    <NavLink to = '/'activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} >Home </NavLink>
  </li>
  <li>
    <NavLink to = '/sushi' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} onClick={() => window.location.reload()}> Sushi Bar </NavLink>
  </li>
  <li>
    <NavLink to = '/appetizers' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} onClick={() => window.location.reload()}> Appetizers </NavLink>
  </li>
  <li>
    <NavLink to = '/maindish' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} onClick={() => window.location.reload()}> Main Dish </NavLink>
  </li>
  <li>
    <NavLink to = '/drinks' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} onClick={() => window.location.reload()}> Drinks Etc </NavLink>
  </li>
  <li>
    <NavLink to = '/contact' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} onClick={() => window.location.reload()}> Contact </NavLink>
  </li>

</ul>
</div>

);
}

export default Navbar;
