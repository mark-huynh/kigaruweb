import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {

return(
<div className = "navwrap">

<ul className = "nav">
  <li>
    <NavLink exact to = '/'activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} >Home </NavLink>
  </li>
  <li>
    <NavLink to = '/sushi' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Sushi Bar </NavLink>
  </li>
  <li>
    <NavLink to = '/appetizers' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Appetizers </NavLink>
  </li>
  <li>
    <NavLink to = '/maindish' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Main Dish </NavLink>
  </li>
  <li>
    <NavLink to = '/drinks' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Drinks Etc </NavLink>
  </li>
  <li>
    <NavLink to = '/contact' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Contact </NavLink>
  </li>
  <li style={{float: "right", color: "white", paddingRight: "20px"}}>
    KIGARU SUSHI
  </li>

</ul>
</div>

);
}

export default Navbar;
