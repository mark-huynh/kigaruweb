(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/vegas.a302e3b5.JPG"},110:function(e,t,a){e.exports=a(126)},115:function(e,t,a){},124:function(e,t,a){e.exports=a.p+"static/media/img_20181212_202437.3aa651bd.jpg"},125:function(e,t,a){e.exports=a.p+"static/media/Negitoro.8fb53a51.JPG"},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(12),o=a.n(i),c=(a(115),a(6)),l=a(7),s=a(11),m=a(9),u=a(10),p=a(30),h=a(44),d=a(70),f=a.n(d),b=h.a.ul({open:{delayChildren:650,staggerChildren:475},closed:{delay:300}}),v=h.a.li({open:{y:0,opacity:1},closed:{y:20,opacity:0}}),E=h.a.div({open:{opacity:1,transition:{duration:300}},closed:{opacity:0}}),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggle=function(){return a.setState({isOpen:!a.state.isOpen})},a.handleMap=function(){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPod")?window.open("maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="):window.open("https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.toggle,1300)}},{key:"render",value:function(){return r.a.createElement("div",{className:"main"},r.a.createElement("div",{className:"imghrs"}),r.a.createElement("div",{className:"title-text"},r.a.createElement("div",null,r.a.createElement(E,{pose:this.state.isOpen?"open":"closed"},"KIGARU SUSHI"),r.a.createElement(b,{pose:this.state.isOpen?"open":"closed",onClick:this.props.handleListClick},r.a.createElement(v,null,"Japanese Cusine"),r.a.createElement(v,null,"Sushi"),r.a.createElement(v,null,"Ramen"),r.a.createElement(v,null,"Drinks")))),r.a.createElement("div",{className:"info-wrap"},r.a.createElement("img",{alt:"kigaru logo",className:"kigaru-image",src:f.a}),r.a.createElement("ul",{className:"hours",style:{cursor:"pointer"},onClick:this.handleMap},r.a.createElement("li",null,r.a.createElement("b",null,"Tuesday - Saturday: ",r.a.createElement("br",null))," 11:30AM - 2:30PM"),r.a.createElement("li",null,"& 5PM - 11PM"),r.a.createElement("li",null,r.a.createElement("b",null,"Sunday:")," ",r.a.createElement("br",null)," 11:30AM - 2:30PM "),r.a.createElement("li",null,"& 5PM - 10PM"),r.a.createElement("li",null,r.a.createElement("b",null,"Monday"),": ",r.a.createElement("br",null),"Closed"),r.a.createElement("br",null),r.a.createElement("li",null," 3486 SW Cedar Hills Blvd, Beaverton, OR 97005"))))}}]),t}(r.a.Component),y=a(34),k=a(153),O=a(27),w=function(e){return{type:"ADD_TO_CART",payload:e}},j=function(e){return{type:"REMOVE_FROM_CART",payload:e}},C=a(151),x=a(152),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showHeart:!1,activeHeart:!1,showImage:!1},a.timer=null,a.handleClickAdd=function(e){a.props.addToCart(e),a.setState({activeHeart:!0}),a.setState({showHeart:!0}),clearTimeout(a.timer)},a.handleClickRemove=function(e){a.props.removeFromCart(e),a.setState({activeHeart:!1}),a.setState({showHeart:!0}),clearTimeout(a.timer)},a.handleBoxClick=function(){a.setState({showHeart:!0}),clearTimeout(a.timer),a.timer=setTimeout(function(){a.setState({showHeart:!1})},2e3)},a.componentDidMount=function(){a.props.items.some(function(e){return e.name===a.props.item.name})&&!0!==a.state.activeHeart&&a.setState({activeHeart:!0})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{style:{maxWidth:"600px",cursor:"pointer"},onClick:function(){return e.handleBoxClick()}},void 0!==this.props.item.picture&&""!==this.props.item.picture&&r.a.createElement("div",{onClick:function(){return e.setState({showImage:!0})}},r.a.createElement(C.a,{style:{marginRight:"7px",fontSize:"30px",verticalAlign:"bottom"}},"crop_original")),r.a.createElement("div",{className:"item-title"},this.props.item.name," ",this.props.item.price)," ",this.state.showHeart&&r.a.createElement("div",{onClick:this.state.activeHeart?function(){return e.handleClickRemove(e.props.item)}:function(){return e.handleClickAdd(e.props.item)}},r.a.createElement(C.a,{style:{fontSize:"20px",paddingLeft:"7px"},color:this.state.activeHeart?"error":"disabled"},"favorite")),r.a.createElement("p",{className:"description"},this.props.item.description),r.a.createElement(x.a,{open:this.state.showImage,maxWidth:"xl",onClose:function(){e.setState({showImage:!1})}},r.a.createElement("img",{style:{width:"75vw"},src:this.props.item.picture,alt:this.props.name})))}}]),t}(n.Component),N=Object(O.b)(function(e){return{items:e.items}},function(e){return{addToCart:function(t){e(w(t))},removeFromCart:function(t){e(j(t))}}})(S),D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={openSnack:!1},a.handleClick=function(e){a.props.addToCart(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=this.props.items,t=[];e.length>0;)t.push(e.splice(0,5));return r.a.createElement("div",{className:"menu"},r.a.createElement("h1",{className:"menu-title"},this.props.title),r.a.createElement(k.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:5},t.map(function(e){return r.a.createElement(k.a,{item:!0,lg:6},r.a.createElement("ul",null,e.map(function(e){return r.a.createElement(N,{item:e})})))})))}}]),t}(r.a.Component),I=Object(O.b)(null,function(e){return{addToCart:function(t){e(w(t))}}})(D),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu-back"},this.props.children)}}]),t}(r.a.Component),T=a(75),A=a.n(T),M=a(154),z=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).style={backgroundImage:"url(".concat(A.a,")")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&r.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),r.a.createElement(P,null,this.props.items?this.props.items.map(function(e){return console.log(e),r.a.createElement(I,{title:e.name,items:Object(y.a)(e.meals)})}):r.a.createElement(M.a,null)))}}]),t}(r.a.Component),B=a(51),H=a.n(B),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).style={backgroundImage:"url(".concat(H.a,")")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&r.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),r.a.createElement(P,null,this.props.items?this.props.items.map(function(e){return console.log(e),r.a.createElement(I,{title:e.name,items:Object(y.a)(e.meals)})}):r.a.createElement(M.a,null)))}}]),t}(r.a.Component),G=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null,"Website developed by ",r.a.createElement("a",{href:"https://github.com/mark-huynh"},"Mark Huynh")," All prices subject to change. All items subject to availability. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodbourne illnesses.  \xa92018 All rights reserved. Icons received from FlatIcon."))},R=a(43),W=a.n(R),_=a(52),F=a(17);function K(e){return U.apply(this,arguments)}function U(){return(U=Object(_.a)(W.a.mark(function e(t){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events",{method:"POST",headers:{"Content-Type":"application/json","X-Insert-Key":"NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY"},body:JSON.stringify({eventType:"TabClicks",category:t})});case 2:e.sent;case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var V=function(){return r.a.createElement("div",{className:"navwrap"},r.a.createElement("ul",{className:"nav"},r.a.createElement("li",{onClick:function(){return K("Home")}},r.a.createElement(F.b,{exact:!0,to:"/",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}},"Home ")),r.a.createElement("li",{onClick:function(){return K("Order Online")}},r.a.createElement("a",{target:"_blank",href:"https://ordering.chownow.com/order/22955/locations"},"Place Online Order")),r.a.createElement("li",{onClick:function(){return K("Sushi")}},r.a.createElement(F.b,{to:"/sushi",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Sushi Bar ")),r.a.createElement("li",{onClick:function(){return K("Appetizers")}},r.a.createElement(F.b,{to:"/appetizers",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Appetizers ")),r.a.createElement("li",{onClick:function(){return K("Main Dishes")}},r.a.createElement(F.b,{to:"/maindish",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Main Dish ")),r.a.createElement("li",{onClick:function(){return K("Drinks")}},r.a.createElement(F.b,{to:"/drinks",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Drinks Etc ")),r.a.createElement("li",{onClick:function(){return K("Contact")}},r.a.createElement(F.b,{to:"/contact",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Contact ")),r.a.createElement("li",{style:{float:"right",color:"white",paddingRight:"20px"}},"KIGARU SUSHI")))},L=a(37),Q=a(64),X=a(101),Y=a(166),$=a(156),q=a(155),Z=a(157),ee=a(158),te=a(77),ae=a.n(te),ne=a(78),re=a.n(ne),ie=a(79),oe=a.n(ie),ce=a(80),le=a.n(ce),se=a(81),me=a.n(se),ue=a(82),pe=a.n(ue),he=a(165),de=a(83),fe=a.n(de);function be(e){return ve.apply(this,arguments)}function ve(){return(ve=Object(_.a)(W.a.mark(function e(t){return W.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events",{method:"POST",headers:{"Content-Type":"application/json","X-Insert-Key":"NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY"},body:JSON.stringify({eventType:"TabClicks",device:"Mobile",category:t})});case 2:e.sent;case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var Ee=Object(he.a)({root:{color:"white",position:"fixed",left:0,top:0,zIndex:2},top:{backgroundColor:"rgb(209, 68, 68)",color:"white"},list:{padding:0},drawer:{fontFamily:"Montserrat"},inactive:{color:"#fff",textDecoration:"none"},active:{color:"red"}});var ge=function(e){var t,a=Object(n.useState)(!1),i=Object(X.a)(a,2),o=i[0],c=i[1],l=Ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{className:l.drawer,anchor:"left",open:o||e.openDrawer,onClose:function(){c(!1),e.closeDrawer()}},r.a.createElement(q.a,{onClick:function(){c(!1),e.closeDrawer()},className:l.list},r.a.createElement($.a,{className:l.top},"KIGARU SUSHI"),r.a.createElement(F.b,{style:{textDecoration:"none"},classname:l.inactive,activeClassName:l.active,to:"/",exact:!0},r.a.createElement($.a,{onClick:function(){return be("Home")},button:!0,key:"Home"},r.a.createElement(Z.a,null,r.a.createElement("img",{src:oe.a,alt:"home"})),"Home")),r.a.createElement("a",{target:"_blank",href:"https://ordering.chownow.com/order/22955/locations"},r.a.createElement($.a,(t={onClick:function(){return be("Order Online")},button:!0,key:"Home"},Object(Q.a)(t,"button",!0),Object(Q.a)(t,"key","Takeout"),t),r.a.createElement(Z.a,null,r.a.createElement("img",{src:fe.a,alt:"takeout"})),"Order Online")),r.a.createElement(F.b,{style:{textDecoration:"none"},classname:l.inactive,activeClassName:l.active,to:"/sushi"},r.a.createElement($.a,{onClick:function(){return be("Sushi")},button:!0,key:"Sushi"},r.a.createElement(Z.a,null,r.a.createElement("img",{src:pe.a,alt:"sushi"})),"Sushi Bar")),r.a.createElement(F.b,{style:{textDecoration:"none"},classname:l.inactive,activeClassName:l.active,to:"/appetizers"},r.a.createElement($.a,{onClick:function(){return be("Appetizers")},button:!0,key:"Appetizers"},r.a.createElement(Z.a,null,r.a.createElement("img",{src:ae.a,alt:"appetizers"})),"Appetizers")),r.a.createElement(F.b,{style:{textDecoration:"none"},classname:l.inactive,activeClassName:l.active,to:"/maindish"},r.a.createElement($.a,{onClick:function(){return be("Main Dishes")},button:!0,key:"Main"},r.a.createElement(Z.a,null,r.a.createElement("img",{src:le.a,alt:"main dishes"})),"Main Dish")),r.a.createElement(F.b,{style:{textDecoration:"none"},classname:l.inactive,activeClassName:l.active,to:"/drinks"},r.a.createElement($.a,{onClick:function(){return be("Drinks")},button:!0,key:"Drinks"},r.a.createElement(Z.a,null,r.a.createElement("img",{src:re.a,alt:"drinks"})),"Drinks")),r.a.createElement(F.b,{style:{textDecoration:"none"},classname:l.inactive,activeClassName:l.active,to:"/contact"},r.a.createElement($.a,{onClick:function(){return be("Contact")},button:!0,key:"Contact"},r.a.createElement(Z.a,null,r.a.createElement("img",{src:me.a,alt:"contact"})),"Contact")))),r.a.createElement(ee.a,{onClick:function(){return c(!0)},className:l.root},r.a.createElement(C.a,{style:{fontSize:"30px"}},"menu")))},ye=a(84),ke=a.n(ye),Oe=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).style={backgroundImage:"url(".concat(ke.a,")")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&r.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),r.a.createElement(P,null,this.props.items?this.props.items.map(function(e){return console.log(e),r.a.createElement(I,{title:e.name,items:Object(y.a)(e.meals)})}):r.a.createElement(M.a,null)))}}]),t}(r.a.Component),we=a(85),je=a.n(we),Ce=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).style={backgroundImage:"url(".concat(je.a,")")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&r.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),r.a.createElement(P,null,this.props.items?this.props.items.map(function(e){return console.log(e),r.a.createElement(I,{title:e.name,items:Object(y.a)(e.meals)})}):r.a.createElement(M.a,null)))}}]),t}(r.a.Component),xe=a(164),Se=a(161),Ne=a(163),De=a(160),Ie=a(162),Pe=a(159),Te=a(167),Ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleDelete=function(e){a.props.removeFromCart(e)},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget}),a.setState({showDesc:!0})},a.state={showDesc:!1,anchorEl:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,{open:this.state.showDesc,onClose:function(){return e.setState({showDesc:!1})},anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},void 0!==this.props.item.description&&""!==this.props.item.description?r.a.createElement("p",{className:"fav-text"},this.props.item.description):r.a.createElement("p",{className:"fav-text"},"No Description Available"),void 0!==this.props.item.picture&&""!==this.props.item.picture?r.a.createElement("img",{src:this.props.item.picture,alt:this.props.item.name,style:{width:"60vh"}}):r.a.createElement("p",{className:"fav-text"},"No Picture Available")),r.a.createElement(Pe.a,{key:this.props.item.name},r.a.createElement(De.a,null,r.a.createElement(C.a,{onClick:function(){return e.handleDelete(e.props.item)}},"delete_outline")),r.a.createElement(De.a,{onClick:this.handleClick},this.props.item.name),r.a.createElement(De.a,null,"$",this.props.item.price)))}}]),t}(n.Component),Me=Object(O.b)(null,function(e){return{removeFromCart:function(t){e(j(t))}}})(Ae),ze=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){for(var e=0,t=0;t<this.props.items.length;t++)e+=parseFloat(this.props.items[t].price);return r.a.createElement(x.a,{open:this.props.open,maxWidth:"xl",fullWidth:!0,onClose:this.props.close},void 0!==this.props.items.length&&0===this.props.items.length?r.a.createElement("div",null,r.a.createElement(k.a,{className:"favorite-welcome",container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(k.a,{item:!0},r.a.createElement(C.a,{color:"error"},"favorite")),r.a.createElement(k.a,{item:!0},r.a.createElement("h1",null,"Favorites")),r.a.createElement(k.a,{item:!0},"Welcome to your favorites! As you browse our website you can add any items that interest you so there's no need to jump back and forth while deciding! Thanks for visiting our website!"," "),r.a.createElement(k.a,{item:!0},"Tap/click on any items from the menus to reveal an optional heart to add them here!"))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"fav-text"}," ","Click on any item name for their description and photo (if they are available)"),r.a.createElement(Se.a,null,r.a.createElement(Ie.a,null,r.a.createElement(De.a,null),r.a.createElement(De.a,null,"Item"),r.a.createElement(De.a,null,"Price")),r.a.createElement(Ne.a,null,this.props.items.map(function(e){return r.a.createElement(Me,{item:e})}),r.a.createElement(Pe.a,null,r.a.createElement(De.a,null),r.a.createElement(De.a,{align:"right"},"Total"),r.a.createElement(De.a,null,"$",e)))),r.a.createElement("p",{className:"disclaimer"},"**Prices and item availability are not guaranteed")))}}]),t}(r.a.Component),Be=Object(O.b)(function(e){return{items:e.items}})(ze),He=a(86),Je=a.n(He),Ge=a(87),Re=a.n(Ge),We=a(88),_e=a.n(We),Fe=a(127),Ke=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).style={backgroundImage:"url(".concat(H.a,")"),display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},a.handleMap=function(){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPod")?window.open("maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="):window.open("https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=")},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&r.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),r.a.createElement("div",{className:"contact-form"},r.a.createElement("ul",null,r.a.createElement(Fe.a,{elevation:3,style:{margin:"20px"}},r.a.createElement("div",{onClick:this.handleMap,style:{cursor:"pointer"}},r.a.createElement("li",null,r.a.createElement("img",{src:Je.a,alt:"location pointer"}),r.a.createElement("p",null,"Click to open maps to Kigaru (iOS or Android!)")))),r.a.createElement(Fe.a,{elevation:3,style:{margin:"20px"}},r.a.createElement("a",{href:"tel:971-371-3134"},r.a.createElement("li",null,r.a.createElement("img",{src:Re.a,alt:"phone"}),r.a.createElement("p",null,"Call Us @971-371-3134")))),r.a.createElement(Fe.a,{elevation:3,style:{margin:"20px"}},r.a.createElement("a",{href:"mailto:kigarusushi@gmail.com"},r.a.createElement("li",null,r.a.createElement("img",{src:_e.a,alt:"envelope"}),r.a.createElement("p",null,"Email Us kigarusushi@gmail.com")))))))}}]),t}(r.a.Component),Ue=a(89),Ve=a.n(Ue),Le=a(90),Qe=a.n(Le),Xe=a(91),Ye=a.n(Xe),$e=a(92),qe=a.n($e),Ze=(Ve.a,qe.a,Qe.a,Ye.a,a(93)),et=a.n(Ze),tt=a(94),at=a.n(tt),nt=a(95),rt=(a.n(nt).a,et.a,at.a,a(124),a(96)),it=a.n(rt),ot=a(97),ct=a.n(ot),lt=a(98),st=a.n(lt),mt=a(99),ut=a.n(mt),pt=a(100),ht=a.n(pt),dt=(a(125),it.a,st.a,ht.a,ut.a,ct.a,h.a.div({static:{},grow:{}})),ft=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isDesktop:!1,openDrawer:!1,showDialog:!1,allData:[]},a.updatePredicate=a.updatePredicate.bind(Object(p.a)(Object(p.a)(a))),a.handleClickButton=a.handleClickButton.bind(Object(p.a)(Object(p.a)(a))),a.handleClose=a.handleClose.bind(Object(p.a)(Object(p.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"handleClickButton",value:function(){this.setState({showDialog:!0})}},{key:"handleClose",value:function(){this.setState({showDialog:!1})}},{key:"componentDidMount",value:function(){var e=this;this.updatePredicate(),window.addEventListener("resize",this.updatePredicate),this.setState({isLoading:!0}),fetch("https://8qqznzyrgh.execute-api.us-east-1.amazonaws.com/develop/menuitems").then(function(e){return e.json()}).then(function(t){e.setState({allData:t})},function(e){return console.log("err:"+e)}),window.innerWidth>890?fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events",{method:"POST",headers:{"Content-Type":"application/json","X-Insert-Key":"NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY"},body:JSON.stringify({eventType:"Visits",device:"Desktop"})}):fetch("https://insights-collector.newrelic.com/v1/accounts/2861351/events",{method:"POST",headers:{"Content-Type":"application/json","X-Insert-Key":"NRII-Oay07V1WwBlB98KjOxBcNQS7ohyTaFUY"},body:JSON.stringify({eventType:"Visits",device:"Mobile"})})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>890})}},{key:"render",value:function(){var e=this;return r.a.createElement(F.a,null,r.a.createElement("div",null,this.state.isDesktop?r.a.createElement(V,null):r.a.createElement(ge,{openDrawer:this.state.openDrawer,closeDrawer:function(){return e.setState({openDrawer:!1})}}),r.a.createElement(L.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{handleListClick:function(){return e.setState({openDrawer:!0})}})}}),r.a.createElement(L.a,{path:"/sushi",component:function(){return r.a.createElement(z,{items:e.state.allData.sushi})}}),r.a.createElement(L.a,{path:"/appetizers",render:function(){return r.a.createElement(J,{items:e.state.allData.appetizers})}}),r.a.createElement(L.a,{path:"/maindish",render:function(){return r.a.createElement(Oe,{items:e.state.allData.main_dishes})}}),r.a.createElement(L.a,{path:"/drinks",render:function(){return r.a.createElement(Ce,{items:e.state.allData.drinks})}}),r.a.createElement(L.a,{path:"/contact",render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(L.a,{path:"/manager",render:function(){return window.location.replace("https://mark-huynh.github.io/kigaru-manager/")}}),r.a.createElement(dt,{pose:this.state.showDialog?"static":"grow"},r.a.createElement(xe.a,{onClick:this.handleClickButton,style:{position:"fixed",bottom:"0",right:"0",zIndex:2,marginRight:"5px",marginBottom:"10px"},size:this.state.isDesktop?"large":"small"},r.a.createElement(C.a,{style:this.state.isDesktop?{fontSize:"40px"}:{fontSize:"30px"},color:"error"},"favorite_border"))),r.a.createElement(Be,{open:this.state.showDialog,close:this.handleClose}),r.a.createElement(G,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var bt=a(47),vt={items:[]},Et=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=arguments.length>1?arguments[1]:void 0;return"ADD_TO_CART"===t.type?Object.assign({},e,{items:e.items.concat(t.payload)}):"REMOVE_FROM_CART"===t.type?Object.assign({},{items:e.items.filter(function(e){return e.name!==t.payload.name})}):e},gt=new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"loadState",value:function(){try{var e=localStorage.getItem("itemState");return null===e?this.initializeState():JSON.parse(e)}catch(t){return this.initializeState()}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("itemState",t)}catch(a){}}},{key:"initializeState",value:function(){return{items:[]}}}]),e}()),yt=Object(bt.b)(Et,gt.loadState());yt.subscribe(function(){gt.saveState(yt.getState())}),o.a.render(r.a.createElement(O.a,{store:yt},r.a.createElement(ft,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,t,a){e.exports=a.p+"static/media/IMG_3932.2cd44cba.JPG"},70:function(e,t,a){e.exports=a.p+"static/media/Logo_7404-page-001.d6ee1fb2.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/IMG_3928.2c8ce6e5.JPG"},77:function(e,t,a){e.exports=a.p+"static/media/appetizer.44cc30c3.svg"},78:function(e,t,a){e.exports=a.p+"static/media/beer.216305e9.svg"},79:function(e,t,a){e.exports=a.p+"static/media/home.133ce3f8.svg"},80:function(e,t,a){e.exports=a.p+"static/media/noodle.c005cbdf.svg"},81:function(e,t,a){e.exports=a.p+"static/media/sending.b3f066f2.svg"},82:function(e,t,a){e.exports=a.p+"static/media/sushi.d5bfd4e9.svg"},83:function(e,t,a){e.exports=a.p+"static/media/takeout.b50a8c42.svg"},84:function(e,t,a){e.exports=a.p+"static/media/IMG_3929.f988355b.JPG"},85:function(e,t,a){e.exports=a.p+"static/media/IMG_3936.8b515b9e.JPG"},86:function(e,t,a){e.exports=a.p+"static/media/location.523b6499.svg"},87:function(e,t,a){e.exports=a.p+"static/media/phone.8b2f97f7.svg"},88:function(e,t,a){e.exports=a.p+"static/media/envelope.4d9e5a20.svg"},89:function(e,t,a){e.exports=a.p+"static/media/Garlic_Edamame.1cd6d349.JPG"},90:function(e,t,a){e.exports=a.p+"static/media/Karage.a60fc738.JPG"},91:function(e,t,a){e.exports=a.p+"static/media/butter.af4fd5e7.JPG"},92:function(e,t,a){e.exports=a.p+"static/media/fries.7b8d328d.JPG"},93:function(e,t,a){e.exports=a.p+"static/media/tonkotsuramen.35aaee61.jpg"},94:function(e,t,a){e.exports=a.p+"static/media/chirashidon.280ec53a.jpg"},95:function(e,t,a){e.exports=a.p+"static/media/bentobox.94f34f84.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/veggie.39637984.JPG"},97:function(e,t,a){e.exports=a.p+"static/media/raijin.d552cdcb.JPG"},98:function(e,t,a){e.exports=a.p+"static/media/lobster.3b8a8e1f.JPG"},99:function(e,t,a){e.exports=a.p+"static/media/salmonlove.b4d2babf.JPG"}},[[110,1,2]]]);
//# sourceMappingURL=main.e68835bd.chunk.js.map