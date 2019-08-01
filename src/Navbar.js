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
    <Link to = '/sushi' onClick={() => window.location.reload()}> Sushi Bar </Link>
  </li>
  <li>
    <Link to = '/appetizers' onClick={() => window.location.reload()}> Appetizers </Link>
  </li>
  <li>
    <Link to = '/maindish' onClick={() => window.location.reload()}> Main Dish </Link>
  </li>
  <li>
    <Link to = '/drinks' onClick={() => window.location.reload()}> Drinks Etc </Link>
  </li>
  <li>
    <Link to = '/contact' onClick={() => window.location.reload()}> Contact </Link>
  </li>

</ul>
</div>

);
}

export default Navbar;
