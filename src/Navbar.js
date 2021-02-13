import React from "react";
import { NavLink } from 'react-router-dom';

async function insights(category) {
  let resp = await fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // insights key, it is ok to be exposed to public (until card gets associated)
      'X-Insert-Key': 'NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY'
    },
    body: JSON.stringify({
      "eventType": "TabClicks",
      "category": category
    })
  });
  // resp = await resp.json();
  // console.log(resp);
  // console.log("done")
}

const Navbar = () => {

return(
<div className = "navwrap">

<ul className = "nav">
  <li onClick={() => insights("Home")}>
    <NavLink exact to = '/'activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} >Home </NavLink>
  </li>
  <li onClick={() => insights("Order Online")}>
    {/* <NavLink activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}} ><a target="_blank" href="http://www.newsite.com">New site</a></NavLink> */}
    <a target="_blank" href="https://ordering.chownow.com/order/22955/locations">Place Online Order</a>
  </li>
  <li onClick={() => insights("Sushi")}>
    <NavLink to = '/sushi' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Sushi Bar </NavLink>
  </li>
  <li onClick={() => insights("Appetizers")}>
    <NavLink to = '/appetizers' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Appetizers </NavLink>
  </li>
  <li onClick={() => insights("Main Dishes")}>
    <NavLink to = '/maindish' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Main Dish </NavLink>
  </li>
  <li onClick={() => insights("Drinks")}>
    <NavLink to = '/drinks' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Drinks Etc </NavLink>
  </li>
  <li onClick={() => insights("Contact")}>
    <NavLink to = '/contact' activeStyle={{color:"white", backgroundColor: "#464646", fontWeight: "bold"}}> Contact </NavLink>
  </li>
  <li style={{float: "right", color: "white", paddingRight: "20px"}}>
    KIGARU SUSHI
  </li>

</ul>
<div style={{color: 'white', fontSize: '20px', fontFamily: 'Lato', padding: '10px'}}>
  <b>Gift cards now available! </b>
</div>
</div>

);
}

export default Navbar;
