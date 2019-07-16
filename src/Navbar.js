import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

return(
<div className = "navwrap">

<ul className = "nav">
  <li>
    <Link to = '/'>Home </Link>
  </li>
  <li>
    <Link to = '/sushi'>Sushi Bar </Link>
  </li>
  <li>
    <Link to = '/appetizers'>Appetizers </Link>
  </li>
  <li>
    <Link to = '/maindish'>Main Dish </Link>
  </li>
  <li>
    <Link to = '/drinks'>Drinks Etc </Link>
  </li>
  <li>
    <Link to = '/contact'>Contact </Link>
  </li>

</ul>
</div>

);
}

export default Navbar;
