(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(119)},110:function(e,t,a){},117:function(e,t,a){e.exports=a.p+"static/media/img_20181212_202437.3aa651bd.jpg"},118:function(e,t,a){e.exports=a.p+"static/media/Negitoro.8fb53a51.JPG"},119:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(12),o=a.n(r),c=(a(110),a(6)),s=a(7),l=a(10),p=a(8),m=a(9),u=a(31),d=a(43),h=a(66),b=a.n(h),f=d.a.ul({open:{delayChildren:650,staggerChildren:475},closed:{delay:300}}),g=d.a.li({open:{y:0,opacity:1},closed:{y:20,opacity:0}}),v=d.a.div({open:{opacity:1,transition:{duration:300}},closed:{opacity:0}}),k=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={isOpen:!1},a.toggle=function(){return a.setState({isOpen:!a.state.isOpen})},a.handleMap=function(){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPod")?window.open("maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="):window.open("https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.toggle,1300)}},{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"imghrs"}),n.a.createElement("div",{className:"title-text"},n.a.createElement("div",null,n.a.createElement(v,{pose:this.state.isOpen?"open":"closed"},"KIGARU SUSHI"),n.a.createElement(f,{pose:this.state.isOpen?"open":"closed",onClick:this.props.handleListClick},n.a.createElement(g,null,"Japanese Cusine"),n.a.createElement(g,null,"Sushi"),n.a.createElement(g,null,"Ramen"),n.a.createElement(g,null,"Drinks")))),n.a.createElement("div",{style:{fontSize:"3vw",fontFamily:"Lato",padding:"10px"}},n.a.createElement("b",null,"Due to governor Kate Brown's order we will be limiting all orders to take-out only during the business hours below. Thank you for understanding. ")),n.a.createElement("div",{className:"info-wrap"},n.a.createElement("img",{alt:"kigaru logo",className:"kigaru-image",src:b.a}),n.a.createElement("ul",{className:"hours",style:{cursor:"pointer"},onClick:this.handleMap},n.a.createElement("li",null,n.a.createElement("b",null,"Tuesday - Friday:")," 4PM - 11PM"),n.a.createElement("li",null,n.a.createElement("b",null,"Saturday"),": 11:30AM - 2:30PM"),n.a.createElement("li",null,"& 4PM - 11PM"),n.a.createElement("li",null,n.a.createElement("b",null,"Sunday:"),"11:30AM - 2:30PM "),n.a.createElement("li",null,"& 4PM - 10PM"),n.a.createElement("li",null,n.a.createElement("b",null,"Monday"),": Closed"),n.a.createElement("br",null),n.a.createElement("li",null," 3486 SW Cedar Hills Blvd, Beaverton, OR 97005"))))}}]),t}(n.a.Component),y=a(17),E=a(146),w=a(28),S=function(e){return{type:"ADD_TO_CART",payload:e}},C=function(e){return{type:"REMOVE_FROM_CART",payload:e}},O=a(144),j=a(145),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={showHeart:!1,activeHeart:!1,showImage:!1},a.timer=null,a.handleClickAdd=function(e){a.props.addToCart(e),a.setState({activeHeart:!0}),a.setState({showHeart:!0}),clearTimeout(a.timer)},a.handleClickRemove=function(e){a.props.removeFromCart(e),a.setState({activeHeart:!1}),a.setState({showHeart:!0}),clearTimeout(a.timer)},a.handleBoxClick=function(){a.setState({showHeart:!0}),clearTimeout(a.timer),a.timer=setTimeout(function(){a.setState({showHeart:!1})},2e3)},a.componentDidMount=function(){a.props.items.some(function(e){return e.name===a.props.item.name})&&!0!==a.state.activeHeart&&a.setState({activeHeart:!0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("li",{style:{maxWidth:"600px",cursor:"pointer"},onClick:function(){return e.handleBoxClick()}},void 0!==this.props.item.picture&&""!==this.props.item.picture&&n.a.createElement("div",{onClick:function(){return e.setState({showImage:!0})}},n.a.createElement(O.a,{style:{marginRight:"7px",fontSize:"30px",verticalAlign:"bottom"}},"crop_original")),n.a.createElement("div",{className:"item-title"},this.props.item.name," ",this.props.item.price)," ",this.state.showHeart&&n.a.createElement("div",{onClick:this.state.activeHeart?function(){return e.handleClickRemove(e.props.item)}:function(){return e.handleClickAdd(e.props.item)}},n.a.createElement(O.a,{style:{fontSize:"20px",paddingLeft:"7px"},color:this.state.activeHeart?"error":"disabled"},"favorite")),n.a.createElement("p",{className:"description"},this.props.item.description),n.a.createElement(j.a,{open:this.state.showImage,maxWidth:"xl",onClose:function(){e.setState({showImage:!1})}},n.a.createElement("img",{style:{width:"75vw"},src:this.props.item.picture,alt:this.props.name})))}}]),t}(i.Component),D=Object(w.b)(function(e){return{items:e.items}},function(e){return{addToCart:function(t){e(S(t))},removeFromCart:function(t){e(C(t))}}})(x),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={openSnack:!1},a.handleClick=function(e){a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.props.items,t=[];e.length>0;)t.push(e.splice(0,5));return n.a.createElement("div",{className:"menu"},n.a.createElement("h1",{className:"menu-title"},this.props.title),n.a.createElement(E.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"center",spacing:5},t.map(function(e){return n.a.createElement(E.a,{item:!0,lg:6},n.a.createElement("ul",null,e.map(function(e){return n.a.createElement(D,{item:e})})))})))}}]),t}(n.a.Component),P=Object(w.b)(null,function(e){return{addToCart:function(t){e(S(t))}}})(R),T=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"menu-back"},this.props.children)}}]),t}(n.a.Component),N=a(71),A=a.n(N),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(A.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(T,null,n.a.createElement(P,{title:"Nigiri (1pc)",items:Object(y.a)(this.props.nigiri)}),n.a.createElement(P,{title:"Gunkan (2pc)",items:Object(y.a)(this.props.gunkan)}),n.a.createElement(P,{title:"Specials",items:Object(y.a)(this.props.specials)}),n.a.createElement(P,{title:"Maki / Rolls",items:Object(y.a)(this.props.makirolls)})))}}]),t}(n.a.Component),B=a(50),G=a.n(B),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(G.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(T,null,n.a.createElement(P,{title:"Appetizers",items:Object(y.a)(this.props.appetizers)})))}}]),t}(n.a.Component),z=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"All prices subject to change. All items subject to availability. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodbourne illnesses. \xa92018 All rights reserved. Icons received from FlatIcon."))},F=a(18),H=function(){return n.a.createElement("div",{className:"navwrap"},n.a.createElement("ul",{className:"nav"},n.a.createElement("li",null,n.a.createElement(F.b,{exact:!0,to:"/",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}},"Home ")),n.a.createElement("li",null,n.a.createElement(F.b,{to:"/sushi",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Sushi Bar ")),n.a.createElement("li",null,n.a.createElement(F.b,{to:"/appetizers",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Appetizers ")),n.a.createElement("li",null,n.a.createElement(F.b,{to:"/maindish",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Main Dish ")),n.a.createElement("li",null,n.a.createElement(F.b,{to:"/drinks",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Drinks Etc ")),n.a.createElement("li",null,n.a.createElement(F.b,{to:"/contact",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Contact ")),n.a.createElement("li",{style:{float:"right",color:"white",paddingRight:"20px"}},"KIGARU SUSHI")),n.a.createElement("div",{style:{color:"white",fontSize:"20px",fontFamily:"Lato",padding:"10px"}},n.a.createElement("b",null,"Due to governor Kate Brown's order we will be limiting all orders to take-out only during the business hours below. Thank you for understanding. ")))},J=a(37),K=a(96),_=a(158),U=a(148),W=a(147),L=a(149),V=a(150),Y=a(73),q=a.n(Y),$=a(74),Q=a.n($),X=a(75),Z=a.n(X),ee=a(76),te=a.n(ee),ae=a(77),ie=a.n(ae),ne=a(78),re=a.n(ne),oe=a(157),ce=Object(oe.a)({root:{color:"white",position:"fixed",left:0,top:0,zIndex:2},top:{backgroundColor:"rgb(209, 68, 68)",color:"white"},list:{padding:0},drawer:{fontFamily:"Montserrat"},inactive:{color:"#fff",textDecoration:"none"},active:{color:"red"}});var se=function(e){var t=Object(i.useState)(!1),a=Object(K.a)(t,2),r=a[0],o=a[1],c=ce();return n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{className:c.drawer,anchor:"left",open:r||e.openDrawer,onClose:function(){o(!1),e.closeDrawer()}},n.a.createElement(W.a,{onClick:function(){o(!1),e.closeDrawer()},className:c.list},n.a.createElement(U.a,{className:c.top},"KIGARU SUSHI"),n.a.createElement(U.a,{className:c.top},"Due to governor Kate Brown's order we will be limiting all orders to take-out only during the business hours below. Thank you for understanding."),n.a.createElement(F.b,{style:{textDecoration:"none"},classname:c.inactive,activeClassName:c.active,to:"/",exact:!0},n.a.createElement(U.a,{button:!0,key:"Home"},n.a.createElement(L.a,null,n.a.createElement("img",{src:Z.a,alt:"home"})),"Home")),n.a.createElement(F.b,{style:{textDecoration:"none"},classname:c.inactive,activeClassName:c.active,to:"/sushi"},n.a.createElement(U.a,{button:!0,key:"Sushi"},n.a.createElement(L.a,null,n.a.createElement("img",{src:re.a,alt:"sushi"})),"Sushi Bar")),n.a.createElement(F.b,{style:{textDecoration:"none"},classname:c.inactive,activeClassName:c.active,to:"/appetizers"},n.a.createElement(U.a,{button:!0,key:"Appetizers"},n.a.createElement(L.a,null,n.a.createElement("img",{src:q.a,alt:"appetizers"})),"Appetizers")),n.a.createElement(F.b,{style:{textDecoration:"none"},classname:c.inactive,activeClassName:c.active,to:"/maindish"},n.a.createElement(U.a,{button:!0,key:"Main"},n.a.createElement(L.a,null,n.a.createElement("img",{src:te.a,alt:"main dishes"})),"Main Dish")),n.a.createElement(F.b,{style:{textDecoration:"none"},classname:c.inactive,activeClassName:c.active,to:"/drinks"},n.a.createElement(U.a,{button:!0,key:"Drinks"},n.a.createElement(L.a,null,n.a.createElement("img",{src:Q.a,alt:"drinks"})),"Drinks")),n.a.createElement(F.b,{style:{textDecoration:"none"},classname:c.inactive,activeClassName:c.active,to:"/contact"},n.a.createElement(U.a,{button:!0,key:"Contact"},n.a.createElement(L.a,null,n.a.createElement("img",{src:ie.a,alt:"contact"})),"Contact")))),n.a.createElement(V.a,{onClick:function(){return o(!0)},className:c.root},n.a.createElement(O.a,{style:{fontSize:"30px"}},"menu")))},le=a(79),pe=a.n(le),me=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(pe.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(T,null,n.a.createElement(P,{title:"Combos",items:Object(y.a)(this.props.combos)}),n.a.createElement(P,{title:"Japanese Beef Curry",items:Object(y.a)(this.props.japaneseCurry)}),n.a.createElement(P,{title:"Ramen/Udon",items:Object(y.a)(this.props.noodles)}),n.a.createElement(P,{title:"Donburi",items:Object(y.a)(this.props.donburi)})))}}]),t}(n.a.Component),ue=a(80),de=a.n(ue),he=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(de.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(T,null,n.a.createElement(P,{title:"Beer",items:Object(y.a)(this.props.beer)}),n.a.createElement(P,{title:"Chu-Hi",items:Object(y.a)(this.props.chuHi)}),n.a.createElement(P,{title:"Soft Drinks",items:Object(y.a)(this.props.softDrinks)}),n.a.createElement(P,{title:"Dessert",items:Object(y.a)(this.props.dessert)})))}}]),t}(n.a.Component),be=a(156),fe=a(153),ge=a(155),ve=a(152),ke=a(154),ye=a(151),Ee=a(159),we=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleDelete=function(e){a.props.removeFromCart(e)},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget}),a.setState({showDesc:!0})},a.state={showDesc:!1,anchorEl:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(Ee.a,{open:this.state.showDesc,onClose:function(){return e.setState({showDesc:!1})},anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},void 0!==this.props.item.description&&""!==this.props.item.description?n.a.createElement("p",{className:"fav-text"},this.props.item.description):n.a.createElement("p",{className:"fav-text"},"No Description Available"),void 0!==this.props.item.picture&&""!==this.props.item.picture?n.a.createElement("img",{src:this.props.item.picture,alt:this.props.item.name,style:{width:"60vh"}}):n.a.createElement("p",{className:"fav-text"},"No Picture Available")),n.a.createElement(ye.a,{key:this.props.item.name},n.a.createElement(ve.a,null,n.a.createElement(O.a,{onClick:function(){return e.handleDelete(e.props.item)}},"delete_outline")),n.a.createElement(ve.a,{onClick:this.handleClick},this.props.item.name),n.a.createElement(ve.a,null,"$",this.props.item.price)))}}]),t}(i.Component),Se=Object(w.b)(null,function(e){return{removeFromCart:function(t){e(C(t))}}})(we),Ce=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=0,t=0;t<this.props.items.length;t++)e+=this.props.items[t].price;return n.a.createElement(j.a,{open:this.props.open,maxWidth:"xl",fullWidth:!0,onClose:this.props.close},void 0!==this.props.items.length&&0===this.props.items.length?n.a.createElement("div",null,n.a.createElement(E.a,{className:"favorite-welcome",container:!0,direction:"column",justify:"center",alignItems:"center"},n.a.createElement(E.a,{item:!0},n.a.createElement(O.a,{color:"error"},"favorite")),n.a.createElement(E.a,{item:!0},n.a.createElement("h1",null,"Favorites")),n.a.createElement(E.a,{item:!0},"Welcome to your favorites! As you browse our website you can add any items that interest you so there's no need to jump back and forth while deciding! Thanks for visiting our website!"," "),n.a.createElement(E.a,{item:!0},"Tap/click on any items from the menus to reveal an optional heart to add them here!"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"fav-text"}," ","Click on any item name for their description and photo (if they are available)"),n.a.createElement(fe.a,null,n.a.createElement(ke.a,null,n.a.createElement(ve.a,null),n.a.createElement(ve.a,null,"Item"),n.a.createElement(ve.a,null,"Price")),n.a.createElement(ge.a,null,this.props.items.map(function(e){return n.a.createElement(Se,{item:e})}),n.a.createElement(ye.a,null,n.a.createElement(ve.a,null),n.a.createElement(ve.a,{align:"right"},"Total"),n.a.createElement(ve.a,null,"$",e)))),n.a.createElement("p",{className:"disclaimer"},"**Prices and item availability are not guaranteed")))}}]),t}(n.a.Component),Oe=Object(w.b)(function(e){return{items:e.items}})(Ce),je=a(81),xe=a.n(je),De=a(82),Re=a.n(De),Pe=a(83),Te=a.n(Pe),Ne=a(120),Ae=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(G.a,")"),display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},a.handleMap=function(){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPod")?window.open("maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="):window.open("https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement("div",{className:"contact-form"},n.a.createElement("ul",null,n.a.createElement(Ne.a,{elevation:3,style:{margin:"20px"}},n.a.createElement("div",{onClick:this.handleMap,style:{cursor:"pointer"}},n.a.createElement("li",null,n.a.createElement("img",{src:xe.a,alt:"location pointer"}),n.a.createElement("p",null,"Click to open maps to Kigaru (iOS or Android!)")))),n.a.createElement(Ne.a,{elevation:3,style:{margin:"20px"}},n.a.createElement("a",{href:"tel:971-371-3134"},n.a.createElement("li",null,n.a.createElement("img",{src:Re.a,alt:"phone"}),n.a.createElement("p",null,"Call Us @971-371-3134")))),n.a.createElement(Ne.a,{elevation:3,style:{margin:"20px"}},n.a.createElement("a",{href:"mailto:kigarusushi@gmail.com"},n.a.createElement("li",null,n.a.createElement("img",{src:Te.a,alt:"envelope"}),n.a.createElement("p",null,"Email Us kigarusushi@gmail.com")))))))}}]),t}(n.a.Component),Me=a(84),Be=a.n(Me),Ge=a(85),Ie=a.n(Ge),ze=a(86),Fe=a.n(ze),He=a(87),Je=a.n(He),Ke=[{name:"Garlic Butter Scallops (3pc)",price:9.75,description:"Scallops with garlic and butter topped with basil"},{name:"Garlic Edamame",price:3.75,description:"Edamame saut\xe9ed with butter and garlic",picture:Be.a},{name:"Kigaru French Fries",price:3.75,description:"Spiral cut potato and french fries with okonomiyaki sauce & mayo on top",picture:Je.a},{name:"Pork Belly Kakuni",price:7.75,description:"Braised pork belly topped with green onions, served with Japanese mustard",picture:""},{name:"*Tuna Poke",price:8.25,description:"Sweet sesame soy sauce marinated tuna with avocado, seaweed salad, onion, and cilantro",picture:""},{name:"*Salmon Poke",price:8.25,description:"Sweet sesame soy sauce marinated salmon with avocado, seaweed salad, onion, and cilantro",picture:""},{name:"Ika-Maru",price:10,description:"Grilled whole squid served with mayo and chili pepper flakes",picture:""},{name:"Kaki Fry",price:8.5,description:"Deep fried oysters served with tonkatsu sauce",picture:""},{name:"Octopus Dumpling (5pc)",price:5.5,description:"Takoyaki topped with takoyaki sauce, mayo, seaweed flakes, and bonito flakes",picture:""},{name:"Fried Calamari",price:6.75,description:"Deep fried calamari served with Kigaru tar-tar sauce",picture:""},{name:"Karaage (5pc)",price:6.5,description:"Japanese style fried chicken served with mayo",picture:Ie.a},{name:"Fried Tofu",price:4.75,description:"Deep fried tofu in bonito broth with green onion and bonito flake on top",picture:""},{name:"Fried Eggplant",price:4.75,description:"Deep fried eggplant in bonito broth with green onion and bonito flake on top",picture:""},{name:"Fried Eggplant Tofu",price:8,description:"Deep fried eggplant and tofu in bonito broth with green onion and bonito flake on top",picture:""},{name:"Fried Mochi",price:5.25,description:"Deep fried mochi in bonito broth with green onion and bonito flake on top",picture:""},{name:"Garlic Butter Mussels (5pc)",price:7.75,description:"Mussels with garlic and butter topped with basil",picture:Fe.a},{name:"Vegetable Gyoza (5pc)",price:4.5,description:"Pan-fried veggie dumplings",picture:""},{name:"Grilled Gyoza (5pc)",price:4.75,description:"Pan-fried pork and chicken dumplings",picture:""},{name:"Chicken Wings (5pc)",price:6.75,description:"Deep fried chicken wings dipped in yakitori sauce with sesame seeds on top",picture:""},{name:"Tempura",price:6.5,description:"Choice of shrimp OR assorted veggies",picture:""},{name:"Tempura Platter",price:10.25,description:"Shrimp and assorted veggies",picture:""},{name:"Fried Shrimp (5pc)",price:8,description:"Panko-breaded shrimp with Kigaru tartar sauce",picture:""},{name:"Pork Katsu",price:8,description:"Deep fried panko-breaded pork loin served with shredded cabbage, and katsu sauce",picture:""}],_e=a(88),Ue=a.n(_e),We=a(89),Le=a.n(We),Ve=a(90),Ye=[{name:"Bento Box",price:"8 (or 8.50 with Miso Soup)",description:"Includes: Salmon Skin Roll, Karage (3pc), Edamame, Sesame Balls",picture:a.n(Ve).a}],qe=[{name:"Beef Curry",price:9,description:"Japanese style beef curry served over rice",picture:""},{name:"Fried Shrimp Curry",price:11,description:"Japanese style beef curry and deep-fried shrimp served over rice",picture:""},{name:"Gyoza Curry",price:11,description:"Japanese style beef curry and deep-fried dumplings served over rice",picture:""},{name:"Fried Chicken Curry",price:11.5,description:"Japanese style beef curry and deep-fried chicken served over rice",picture:""},{name:"Pork Katsu Curry",price:12,description:"Japanese style beef curry and deep-fried pork loin served over rice",picture:""}],$e=[{name:"Kimchi Udon",price:9.5,description:"Bonito broth with kimchi, spicy cod roe, green onion, and seaweed",picture:""},{name:"Beef Udon",price:9.75,description:"Bonito broth with beef, onion, seaweed, and green onion",picture:""},{name:"Tempura Udon",price:9.75,description:"Bonito broth with green onion and seaweed. Served with shrimp and vegetable tempura on the side",picture:""},{name:"Pork Belly Udon",price:9.75,description:"Bonito broth with braised pork belly, seaweed, onion, and green onion",picture:""},{name:"Garlic Tonkotsu Ramen",price:12.5,description:"Black garlic pork broth topped with egg, sliced pork, bamboo shoots, green onion, wood ear mushroom, garlic paste and ginger"},{name:"*Tonkotsu Ramen",price:11.5,description:"Pork broth, topped with egg, sliced pork, bamboo shoots, green onion, seaweed, and ginger",picture:Ue.a},{name:"*Tonkotsu Shoyu Ramen",price:11.5,description:"Soy sauce pork broth, topped with egg, sliced pork, bamboo shoots, green onion, seaweed, and ginger",picture:""},{name:"*Miso Ramen",price:11.5,description:"Miso broth, topped with sliced pork, green onion, egg, bamboo shoots, seaweed, and corn",picture:""},{name:"*Spicy Miso Ramen",price:11.5,description:"Just like the Miso Ramen, but with a spicy kick",picture:""},{name:"*Kakuni Ramen",price:12.5,description:"Kakuni pork belly instead of sliced pork. Your choice of broth: Tonkotsu, Tonkotsu Shoyu, Miso, or Spicy Miso",picture:""}],Qe=[{name:"*Tuna Poke Don",price:11,description:"Tuna poke served on a bowl of hot rice. Choice of sushi rice or regular rice.",picture:""},{name:"*Chirashi Don",price:19,description:"Sushi rice topped with chef\u2019s choice of sashimi",picture:Le.a},{name:"*Pork Katsu Don",price:10,description:"Rice bowl with pork katsu, onions, egg, and green onion",picture:""},{name:"Tempura Don",price:9.5,description:"Rice bowl topped with shrimp tempura and assorted veggie tempura",picture:""},{name:"Karage Don",price:9.5,description:"Rice bowl topped with Japanese style fried chicken dipped in yakitori sauce, green onion, sesame seed, and seaweed",picture:""}],Xe=(a(117),[{name:"Bottle - IPA (12oz)",price:4.5,description:""},{name:"Bottle \u2013 Asahi (22oz)",price:7,description:"",picture:""},{name:"Draft \u2013 Sapporo (12oz)",price:4.75,description:"",picture:""},{name:"Draft \u2013 Sapporo (Pint)",price:6,description:"",picture:""},{name:"Draft \u2013 Sapporo (Pitcher)",price:20,description:"",picture:""}]),Ze=[{name:"Calpico Hi",price:8.5,description:"Pint Glass",picture:""},{name:"Lemon Hi",price:8.5,description:"Pint Glass",picture:""},{name:"Oolong Hi",price:8.5,description:"Pint Glass",picture:""},{name:"Ume-Shu Sour",price:8.5,description:"Pint Glass",picture:""}],et=[{name:"Ramune",price:3.5,description:"",picture:""},{name:"Iced Tea",price:2.25,description:"",picture:""},{name:"Lemonade",price:2.25,description:"",picture:""},{name:"Coke, Diet Coke, Sprite, Root Beer",price:2,description:"",picture:""}],tt=[{name:"Parfait",price:6.5,description:"(Green Tea or Coconut)"},{name:"Mochi Cake (3pc)",price:4.5,description:""},{name:"Sesame Balls (5pc)",price:4,description:"",picture:""},{name:"Ice Cream",price:3.75,description:"",picture:""},{name:"Taiyaki Ice Cream",price:5.5,description:"(Ice Cream Flavors: Green Tea, Vanilla or Coconut)",picture:""}],at=a(91),it=a.n(at),nt=a(92),rt=a.n(nt),ot=a(93),ct=a.n(ot),st=a(94),lt=a.n(st),pt=a(95),mt=a.n(pt),ut=(a(118),[{name:"*Squid",price:2,description:"",picture:""},{name:"Shrimp",price:2.25,description:"",picture:""},{name:"*Salmon",price:2.5,description:"",picture:""},{name:"*Salmon Toro",price:3,description:"",picture:""},{name:"*Bluefin Tuna",price:3,description:"",picture:""},{name:"*Mackerel",price:2,description:"",picture:""},{name:"Octopus",price:2.25,description:"",picture:""},{name:"Egg",price:1.75,description:"",picture:""},{name:"*Horse Mackerel",price:3,description:"",picture:""},{name:"*Albacore",price:2.5,description:"",picture:""},{name:"*Sweet Shrimp",price:3.5,description:"",picture:""},{name:"*Yellowtail",price:2.5,description:"",picture:""},{name:"*Yellowtail Toro",price:3,description:"",picture:""},{name:"*Surf Clam",price:2,description:"",picture:""},{name:"Eel",price:3.25,description:"",picture:""},{name:"*Seared Mackerel",price:2,description:"",picture:""},{name:"*Seared Salmon",price:2.5,description:"",picture:""},{name:"*Seared Tuna",price:2.5,description:"",picture:""},{name:"*Scallop",price:3,description:"",picture:""},{name:"*Seabream",price:2.75,description:"",picture:""}]),dt=[{name:"Bluefin Tuna Toro (1pc)",price:4.5,description:"",picture:""},{name:"Negitoro (2pc)",price:5.5,description:"",picture:""},{name:"Omakase (5pc)",price:11,description:"",picture:""},{name:"Omakase (7pc)",price:14,description:"",picture:""},{name:"Omakase (10pc)",price:19,description:"",picture:""},{name:"*Uni (1pc)",price:3.75,description:"",picture:""},{name:"Assorted Sashimi (3 kinds)",price:7.5,description:"",picture:""},{name:"Assorted Sashimi (5 kinds)",price:14,description:"",picture:""},{name:"Assorted Sashimi (7 kinds)",price:20,description:"",picture:""}],ht=[{name:"Cucumber Roll (6pc)",price:2.75,description:"",picture:""},{name:"*Salmon Roll (6pc)",price:5.5,description:"",picture:""},{name:"*Tuna Roll (6pc)",price:5.5,description:"",picture:""},{name:"Avocado Roll (6pc)",price:3.5,description:"",picture:""},{name:"Ume Shiso Roll (6pc)",price:3.75,description:"Pickled plum and shiso leaf",picture:""},{name:"Ume Cucumber Roll (6pc)",price:4.5,description:"Pickled plum and cucumber",picture:""},{name:"Avo/Cuc Roll (6pc)",price:4.5,description:"Avocado, cucumber",picture:""},{name:"*Kigaru Roll",price:16.75,description:"Tuna, albacore, avocado, cucumber, topped with seared salmon, jalape\xf1o, smelt roe, & Kigaru sauce",picture:""},{name:"Vegetable Roll",price:5.75,description:"Avocado, cucumber, radish sprouts, pickled radish, burdock root, inari",picture:it.a},{name:"Giant Veggie Roll",price:6.75,description:"Avocado, cucumber, squash tempura, eggplant tempura topped with edamame and sesame seeds",picture:""},{name:"*Seven Samurai Roll",price:14,description:"Yellowtail, tuna, cucumber, topped with smoked salmon, Kigaru sauce & wasabi tobiko",picture:""},{name:"Lobster Crab Roll",price:16.75,description:"Lobster salad, real crab, and avocado. Deep fried and topped with sesame seeds. Served with yakitori sauce for dipping",picture:ct.a},{name:"*Rainbow Roll",price:19,description:"Cucumber, real crab, topped with salmon, yellowtail, albacore, tuna, shrimp, smelt roe, & Kigaru sauce",picture:""},{name:"*Negi Hama Roll",price:6.25,description:"Green onion & yellowtail",picture:""},{name:"*Spicy Yellowtail Roll",price:6.25,description:"Avocado, yellowtail, chili powder, spicy mayo",picture:""},{name:"*Salmon Skin Roll",price:6.5,description:"Salmon skin, avocado, burdock root, and cream cheese",picture:""},{name:"*Spicy Tuna Roll",price:6,description:"Avocado & spicy tuna",picture:""},{name:"*Creamy Scallop Roll",price:7.5,description:"Creamy scallop & lettuce",picture:""},{name:"Takocado Roll",price:6.75,description:"Octopus & avocado",picture:""},{name:"*California Roll",price:5,description:"Krab, avocado, cucumber topped with smelt roe",picture:""},{name:"Crispy Shrimp Tempura Roll",price:6,description:"Shrimp tempura, cucumber, avocado with tempura flakes.",picture:""},{name:"*Vegas Roll",price:14,description:"Smoked salmon, crab salad, cream cheese, avocado. Deep fried and topped with eel sauce and smelt roe",picture:mt.a},{name:"*Salmon Lover Roll",price:13.75,description:"Tempura salmon, avocado, topped with salmon, tobiko, & lemon",picture:lt.a},{name:"Shrimp Lover Roll",price:12.5,description:"Bay shrimp salad, avocado, topped with boiled shrimp and special sauce",picture:""},{name:"*Philly Roll",price:8,description:"Smoked salmon, cream cheese, avocado, cucumber, smelt roe, sesame seeds",picture:""},{name:"*Spider Roll (5pc)",price:10,description:"Soft shell crab, avocado, burdock root, smelt roe, sesame seeds, radish sprouts",picture:""},{name:"Caterpillar Roll",price:18,description:"Eel, cucumber, krab, topped with avocado, sesame seeds, & eel sauce",picture:""},{name:"*Raijin Roll",price:16,description:"California roll topped with spicy baked scallops and real crab",picture:rt.a},{name:"*Fujin Roll",price:16.5,description:"Spicy tuna, avocado, cucumber, krab, topped with seared albacore, sesame seeds, jalape\xf1o, & Kigaru sauce",picture:""},{name:"*Hawaiian Roll",price:13.5,description:"Spicy tuna, pineapple, topped with salmon, sesame seeds, smelt roe, eel sauce & mayo",picture:""},{name:"*Dragon Roll",price:18,description:"Shrimp tempura, cucumber, krab, topped with avocado, eel, eel sauce, smelt roe, and sesame seeds",picture:""}],bt=[{name:"*Creamy Scallop",price:3.5,description:"",picture:""},{name:"*Salmon Roe",price:5.25,description:"",picture:""},{name:"*Real Crab",price:5.25,description:"",picture:""},{name:"Krab Salad",price:2.5,description:"",picture:""},{name:"*Flying Fish Egg",price:3.75,description:" ",picture:""},{name:"Fried Bean Curd",price:2.5,description:"",picture:""},{name:"Natto",price:3.5,description:"",picture:""},{name:"*Smelt Roe",price:2.5,description:"",picture:""}],ft=d.a.div({static:{},grow:{}}),gt=function(e){function t(){var e,a;Object(c.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={isDesktop:!1,openDrawer:!1,showDialog:!1},a.updatePredicate=a.updatePredicate.bind(Object(u.a)(Object(u.a)(a))),a.handleClickButton=a.handleClickButton.bind(Object(u.a)(Object(u.a)(a))),a.handleClose=a.handleClose.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClickButton",value:function(){this.setState({showDialog:!0})}},{key:"handleClose",value:function(){this.setState({showDialog:!1})}},{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>890})}},{key:"render",value:function(){var e=this;return n.a.createElement(F.a,null,n.a.createElement("div",null,this.state.isDesktop?n.a.createElement(H,null):n.a.createElement(se,{openDrawer:this.state.openDrawer,closeDrawer:function(){return e.setState({openDrawer:!1})}}),n.a.createElement(J.a,{exact:!0,path:"/",render:function(){return n.a.createElement(k,{handleListClick:function(){return e.setState({openDrawer:!0})}})}}),n.a.createElement(J.a,{path:"/sushi",component:function(){return n.a.createElement(M,{specials:dt,nigiri:ut,gunkan:bt,makirolls:ht,desktop:e.state.isDesktop})}}),n.a.createElement(J.a,{path:"/appetizers",render:function(){return n.a.createElement(I,{appetizers:Ke})}}),n.a.createElement(J.a,{path:"/maindish",render:function(){return n.a.createElement(me,{japaneseCurry:qe,noodles:$e,donburi:Qe,combos:Ye})}}),n.a.createElement(J.a,{path:"/drinks",render:function(){return n.a.createElement(he,{beer:Xe,chuHi:Ze,softDrinks:et,dessert:tt})}}),n.a.createElement(J.a,{path:"/contact",render:function(){return n.a.createElement(Ae,null)}}),n.a.createElement(ft,{pose:this.state.showDialog?"static":"grow"},n.a.createElement(be.a,{onClick:this.handleClickButton,style:{position:"fixed",bottom:"0",right:"0",zIndex:2,marginRight:"5px",marginBottom:"10px"},size:this.state.isDesktop?"large":"small"},n.a.createElement(O.a,{style:this.state.isDesktop?{fontSize:"40px"}:{fontSize:"30px"},color:"error"},"favorite_border"))),n.a.createElement(Oe,{open:this.state.showDialog,close:this.handleClose}),n.a.createElement(z,null)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var vt=a(46),kt={items:[]},yt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:kt,t=arguments.length>1?arguments[1]:void 0;return"ADD_TO_CART"===t.type?Object.assign({},e,{items:e.items.concat(t.payload)}):"REMOVE_FROM_CART"===t.type?Object.assign({},{items:e.items.filter(function(e){return e.name!==t.payload.name})}):e},Et=new(function(){function e(){Object(c.a)(this,e)}return Object(s.a)(e,[{key:"loadState",value:function(){try{var e=localStorage.getItem("itemState");return null===e?this.initializeState():JSON.parse(e)}catch(t){return this.initializeState()}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("itemState",t)}catch(a){}}},{key:"initializeState",value:function(){return{items:[]}}}]),e}()),wt=Object(vt.b)(yt,Et.loadState());wt.subscribe(function(){Et.saveState(wt.getState())}),o.a.render(n.a.createElement(w.a,{store:wt},n.a.createElement(gt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},50:function(e,t,a){e.exports=a.p+"static/media/IMG_3932.2cd44cba.JPG"},66:function(e,t,a){e.exports=a.p+"static/media/Logo_7404-page-001.d6ee1fb2.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/IMG_3928.2c8ce6e5.JPG"},73:function(e,t,a){e.exports=a.p+"static/media/appetizer.44cc30c3.svg"},74:function(e,t,a){e.exports=a.p+"static/media/beer.216305e9.svg"},75:function(e,t,a){e.exports=a.p+"static/media/home.133ce3f8.svg"},76:function(e,t,a){e.exports=a.p+"static/media/noodle.c005cbdf.svg"},77:function(e,t,a){e.exports=a.p+"static/media/sending.b3f066f2.svg"},78:function(e,t,a){e.exports=a.p+"static/media/sushi.d5bfd4e9.svg"},79:function(e,t,a){e.exports=a.p+"static/media/IMG_3929.f988355b.JPG"},80:function(e,t,a){e.exports=a.p+"static/media/IMG_3936.8b515b9e.JPG"},81:function(e,t,a){e.exports=a.p+"static/media/location.523b6499.svg"},82:function(e,t,a){e.exports=a.p+"static/media/phone.8b2f97f7.svg"},83:function(e,t,a){e.exports=a.p+"static/media/envelope.4d9e5a20.svg"},84:function(e,t,a){e.exports=a.p+"static/media/Garlic_Edamame.1cd6d349.JPG"},85:function(e,t,a){e.exports=a.p+"static/media/Karage.a60fc738.JPG"},86:function(e,t,a){e.exports=a.p+"static/media/butter.af4fd5e7.JPG"},87:function(e,t,a){e.exports=a.p+"static/media/fries.7b8d328d.JPG"},88:function(e,t,a){e.exports=a.p+"static/media/tonkotsuramen.35aaee61.jpg"},89:function(e,t,a){e.exports=a.p+"static/media/chirashidon.280ec53a.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/bentobox.94f34f84.jpg"},91:function(e,t,a){e.exports=a.p+"static/media/veggie.39637984.JPG"},92:function(e,t,a){e.exports=a.p+"static/media/raijin.d552cdcb.JPG"},93:function(e,t,a){e.exports=a.p+"static/media/lobster.3b8a8e1f.JPG"},94:function(e,t,a){e.exports=a.p+"static/media/salmonlove.b4d2babf.JPG"},95:function(e,t,a){e.exports=a.p+"static/media/vegas.a302e3b5.JPG"}},[[105,1,2]]]);
//# sourceMappingURL=main.edc341af.chunk.js.map