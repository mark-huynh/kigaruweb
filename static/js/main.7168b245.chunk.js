(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(12),c=a.n(r),o=(a(97),a(6)),s=a(7),l=a(10),p=a(8),m=a(9),u=a(31),d=a(44),h=d.a.ul({open:{delayChildren:650,staggerChildren:475},closed:{delay:300}}),b=d.a.li({open:{y:0,opacity:1},closed:{y:20,opacity:0}}),f=d.a.div({open:{opacity:1,transition:{duration:300}},closed:{opacity:0}}),g=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={isOpen:!1},a.toggle=function(){return a.setState({isOpen:!a.state.isOpen})},a.handleMap=function(){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPod")?window.open("maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="):window.open("https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){setTimeout(this.toggle,1300)}},{key:"render",value:function(){return n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"imghrs"}),n.a.createElement("div",{className:"title-text"},n.a.createElement("div",null,n.a.createElement(f,{pose:this.state.isOpen?"open":"closed"},"KIGARU SUSHI"),n.a.createElement(h,{onClick:this.props.handleListClick,pose:this.state.isOpen?"open":"closed"},n.a.createElement(b,null,"Japanese Cusine"),n.a.createElement(b,null,"Sushi"),n.a.createElement(b,null,"Ramen"),n.a.createElement(b,null,"Drinks")))),n.a.createElement("div",{className:"info-wrap"},n.a.createElement("img",{alt:"kigaru logo",className:"kigaru-image",src:"https://cdn.doordash.com/media/restaurant/cover/KigaruSushi3486BeavertonOR.png"}),n.a.createElement("ul",{className:"hours",style:{cursor:"pointer"},onClick:this.handleMap},n.a.createElement("li",null,"Monday - Saturday: 5PM - 11PM"),n.a.createElement("li",null,"Sunday : Closed"),n.a.createElement("br",null),n.a.createElement("li",null," 3486 SW Cedar Hills Blvd, Beaverton, OR 97005"))))}}]),t}(n.a.Component),v=a(18),y=a(131),k=a(28),E=function(e){return{type:"ADD_TO_CART",payload:e}},w=function(e){return{type:"REMOVE_FROM_CART",payload:e}},C=a(129),S=a(130),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={showHeart:!1,activeHeart:!1,showImage:!1},a.timer=null,a.handleClickAdd=function(e){a.props.addToCart(e),a.setState({activeHeart:!0}),a.setState({showHeart:!0}),clearTimeout(a.timer)},a.handleClickRemove=function(e){a.props.removeFromCart(e),a.setState({activeHeart:!1}),a.setState({showHeart:!0}),clearTimeout(a.timer)},a.handleBoxClick=function(){a.setState({showHeart:!0}),clearTimeout(a.timer),a.timer=setTimeout(function(){a.setState({showHeart:!1})},2e3)},a.componentDidMount=function(){a.props.items.some(function(e){return e.name===a.props.item.name})&&!0!==a.state.activeHeart&&a.setState({activeHeart:!0})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("li",{style:{maxWidth:"650px"},onClick:function(){return e.handleBoxClick()}},void 0!==this.props.item.picture&&""!==this.props.item.picture&&n.a.createElement(C.a,{style:{marginRight:"7px",fontSize:"20px",verticalAlign:"bottom"},onClick:function(){return e.setState({showImage:!0})}},"crop_original"),n.a.createElement("div",{className:"item-title"},this.props.item.name," ",this.props.item.price)," ",this.state.showHeart&&n.a.createElement(C.a,{style:{fontSize:"medium",paddingLeft:"7px"},color:this.state.activeHeart?"error":"disabled",onClick:this.state.activeHeart?function(){return e.handleClickRemove(e.props.item)}:function(){return e.handleClickAdd(e.props.item)}},"favorite"),n.a.createElement("p",{className:"description"},this.props.item.description),n.a.createElement(S.a,{open:this.state.showImage,maxWidth:"xl",onClose:function(){e.setState({showImage:!1})}},n.a.createElement("img",{style:{width:"65vw"},src:this.props.item.picture,alt:this.props.name})))}}]),t}(i.Component),j=Object(k.b)(function(e){return{items:e.items}},function(e){return{addToCart:function(t){e(E(t))},removeFromCart:function(t){e(w(t))}}})(O),D=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={openSnack:!1},a.handleClick=function(e){a.props.addToCart(e)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=this.props.items,t=[];e.length>0;)t.push(e.splice(0,5));return n.a.createElement("div",{className:"menu"},n.a.createElement("h1",{className:"menu-title"},this.props.title),n.a.createElement(y.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:4},t.map(function(e){return n.a.createElement(y.a,{item:!0},n.a.createElement("ul",null,e.map(function(e){return n.a.createElement(j,{item:e})})))})))}}]),t}(n.a.Component),R=Object(k.b)(null,function(e){return{addToCart:function(t){e(E(t))}}})(D),x=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"menu-back"},this.props.children)}}]),t}(n.a.Component),N=a(70),T=a.n(N),A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(T.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(x,null,n.a.createElement(R,{title:"Nigiri (1pc)",items:Object(v.a)(this.props.nigiri)}),n.a.createElement(R,{title:"Gunkan (2pc)",items:Object(v.a)(this.props.gunkan)}),n.a.createElement(R,{title:"Maki / Rolls",items:Object(v.a)(this.props.makirolls)})))}}]),t}(n.a.Component),P=a(34),z=a.n(P),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(z.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(x,null,n.a.createElement(R,{title:"Appetizers",items:Object(v.a)(this.props.appetizers)})))}}]),t}(n.a.Component),I=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null,"All prices subject to change. All items subject to availability. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodbourne illnesses. \xa92018 All rights reserved. Icons received from FlatIcon."))},M=a(17),F=function(){return n.a.createElement("div",{className:"navwrap"},n.a.createElement("ul",{className:"nav"},n.a.createElement("li",null,n.a.createElement(M.b,{exact:!0,to:"/",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}},"Home ")),n.a.createElement("li",null,n.a.createElement(M.b,{to:"/sushi",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Sushi Bar ")),n.a.createElement("li",null,n.a.createElement(M.b,{to:"/appetizers",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Appetizers ")),n.a.createElement("li",null,n.a.createElement(M.b,{to:"/maindish",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Main Dish ")),n.a.createElement("li",null,n.a.createElement(M.b,{to:"/drinks",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Drinks Etc ")),n.a.createElement("li",null,n.a.createElement(M.b,{to:"/contact",activeStyle:{color:"white",backgroundColor:"#464646",fontWeight:"bold"}}," Contact ")),n.a.createElement("li",{style:{float:"right",color:"white",paddingRight:"20px"}},"KIGARU SUSHI")))},H=a(38),K=a(83),G=a(143),U=a(133),W=a(132),J=a(134),_=a(135),L=a(72),V=a.n(L),Y=a(73),q=a.n(Y),$=a(74),Q=a.n($),X=a(75),Z=a.n(X),ee=a(76),te=a.n(ee),ae=a(77),ie=a.n(ae),ne=a(142),re=Object(ne.a)({root:{color:"white",position:"fixed",left:0,top:0,zIndex:2},top:{backgroundColor:"rgb(209, 68, 68)",color:"white"},list:{padding:0},drawer:{fontFamily:"Montserrat"},inactive:{color:"#fff",textDecoration:"none"},active:{color:"red"}});var ce=function(e){var t=Object(i.useState)(!1),a=Object(K.a)(t,2),r=a[0],c=a[1],o=re();return n.a.createElement(n.a.Fragment,null,n.a.createElement(G.a,{className:o.drawer,anchor:"left",open:r||e.openDrawer,onClose:function(){c(!1),e.closeDrawer()}},n.a.createElement(W.a,{onClick:function(){return c(!1)},className:o.list},n.a.createElement(U.a,{className:o.top},"KIGARU SUSHI"),n.a.createElement(M.b,{style:{textDecoration:"none"},classname:o.inactive,activeClassName:o.active,to:"/",exact:!0},n.a.createElement(U.a,{button:!0,key:"Home"},n.a.createElement(J.a,null,n.a.createElement("img",{src:Q.a,alt:"home"})),"Home")),n.a.createElement(M.b,{style:{textDecoration:"none"},classname:o.inactive,activeClassName:o.active,to:"/sushi"},n.a.createElement(U.a,{button:!0,key:"Sushi"},n.a.createElement(J.a,null,n.a.createElement("img",{src:ie.a,alt:"sushi"})),"Sushi Bar")),n.a.createElement(M.b,{style:{textDecoration:"none"},classname:o.inactive,activeClassName:o.active,to:"/appetizers"},n.a.createElement(U.a,{button:!0,key:"Appetizers"},n.a.createElement(J.a,null,n.a.createElement("img",{src:V.a,alt:"appetizers"})),"Appetizers")),n.a.createElement(M.b,{style:{textDecoration:"none"},classname:o.inactive,activeClassName:o.active,to:"/maindish"},n.a.createElement(U.a,{button:!0,key:"Main"},n.a.createElement(J.a,null,n.a.createElement("img",{src:Z.a,alt:"main dishes"})),"Main Dish")),n.a.createElement(M.b,{style:{textDecoration:"none"},classname:o.inactive,activeClassName:o.active,to:"/drinks"},n.a.createElement(U.a,{button:!0,key:"Drinks"},n.a.createElement(J.a,null,n.a.createElement("img",{src:q.a,alt:"drinks"})),"Drinks")),n.a.createElement(M.b,{style:{textDecoration:"none"},classname:o.inactive,activeClassName:o.active,to:"/contact"},n.a.createElement(U.a,{button:!0,key:"Contact"},n.a.createElement(J.a,null,n.a.createElement("img",{src:te.a,alt:"contact"})),"Contact")))),n.a.createElement(_.a,{onClick:function(){return c(!0)},className:o.root},n.a.createElement(C.a,{style:{fontSize:"30px"}},"menu")))},oe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(z.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(x,null,n.a.createElement(R,{title:"Japanese Curry",items:Object(v.a)(this.props.japaneseCurry)}),n.a.createElement(R,{title:"Ramen/Udon",items:Object(v.a)(this.props.noodles)}),n.a.createElement(R,{title:"Donburi",items:Object(v.a)(this.props.donburi)})))}}]),t}(n.a.Component),se=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(z.a,")")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement(x,null,n.a.createElement(R,{title:"Beer",items:Object(v.a)(this.props.beer)}),n.a.createElement(R,{title:"Chu-Hi",items:Object(v.a)(this.props.chuHi)}),n.a.createElement(R,{title:"Soft Drinks",items:Object(v.a)(this.props.softDrinks)}),n.a.createElement(R,{title:"Dessert",items:Object(v.a)(this.props.dessert)})))}}]),t}(n.a.Component),le=a(141),pe=a(138),me=a(140),ue=a(137),de=a(139),he=a(136),be=a(144),fe=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).handleDelete=function(e){a.props.removeFromCart(e)},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget}),a.setState({showDesc:!0})},a.state={showDesc:!1,anchorEl:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(be.a,{open:this.state.showDesc,onClose:function(){return e.setState({showDesc:!1})},anchorEl:this.state.anchorEl,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},void 0!==this.props.item.description&&""!==this.props.item.description?n.a.createElement("p",{className:"fav-text"},this.props.item.description):n.a.createElement("p",{className:"fav-text"},"No Description Available"),void 0!==this.props.item.picture&&""!==this.props.item.picture?n.a.createElement("img",{src:this.props.item.picture,alt:this.props.item.name,style:{width:"60vh"}}):n.a.createElement("p",{className:"fav-text"},"No Picture Available")),n.a.createElement(he.a,{key:this.props.item.name},n.a.createElement(ue.a,null,n.a.createElement(C.a,{onClick:function(){return e.handleDelete(e.props.item)}},"delete_outline")),n.a.createElement(ue.a,{onClick:this.handleClick},this.props.item.name),n.a.createElement(ue.a,null,"$",this.props.item.price)))}}]),t}(i.Component),ge=Object(k.b)(null,function(e){return{removeFromCart:function(t){e(w(t))}}})(fe),ve=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){for(var e=0,t=0;t<this.props.items.length;t++)e+=this.props.items[t].price;return n.a.createElement(S.a,{open:this.props.open,maxWidth:"xl",fullWidth:!0,onClose:this.props.close},void 0!==this.props.items.length&&0===this.props.items.length?n.a.createElement("div",null,n.a.createElement(y.a,{className:"favorite-welcome",container:!0,direction:"column",justify:"center",alignItems:"center"},n.a.createElement(y.a,{item:!0},n.a.createElement(C.a,{color:"error"},"favorite")),n.a.createElement(y.a,{item:!0},n.a.createElement("h1",null,"Favorites")),n.a.createElement(y.a,{item:!0},"Welcome to your favorites! As you browse our website you can add any items that interest you so there's no need to jump back and forth while deciding! Thanks for visiting our website!"," "),n.a.createElement(y.a,{item:!0},"Tap/click on any items from the menus to reveal an optional heart to add them here!"))):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"fav-text"}," ","Click on any item name for their description and photo (if they are available)"),n.a.createElement(pe.a,null,n.a.createElement(de.a,null,n.a.createElement(ue.a,null),n.a.createElement(ue.a,null,"Item"),n.a.createElement(ue.a,null,"Price")),n.a.createElement(me.a,null,this.props.items.map(function(e){return n.a.createElement(ge,{item:e})}),n.a.createElement(he.a,null,n.a.createElement(ue.a,null),n.a.createElement(ue.a,{align:"right"},"Total"),n.a.createElement(ue.a,null,"$",e)))),n.a.createElement("p",{className:"disclaimer"},"**Prices and item availability are not guaranteed")))}}]),t}(n.a.Component),ye=Object(k.b)(function(e){return{items:e.items}})(ve),ke=a(78),Ee=a.n(ke),we=a(79),Ce=a.n(we),Se=a(80),Oe=a.n(Se),je=a(105),De=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).style={backgroundImage:"url(".concat(z.a,")"),display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},a.handleMap=function(){-1!==navigator.platform.indexOf("iPhone")||-1!==navigator.platform.indexOf("iPad")||-1!==navigator.platform.indexOf("iPod")?window.open("maps://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll="):window.open("https://maps.google.com/maps?daddr=45.494578,-122.809017&amp;ll=")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{style:this.style,className:"menu-background"},!this.props.desktop&&n.a.createElement("div",{style:this.style,className:"mobile-menu-back"}),n.a.createElement("div",{className:"contact-form"},n.a.createElement("ul",null,n.a.createElement(je.a,{elevation:3,style:{margin:"20px"}},n.a.createElement("div",{onClick:this.handleMap,style:{cursor:"pointer"}},n.a.createElement("li",null,n.a.createElement("img",{src:Ee.a,alt:"location pointer"}),n.a.createElement("p",null,"Click to open maps to Kigaru (iOS or Android!)")))),n.a.createElement(je.a,{elevation:3,style:{margin:"20px"}},n.a.createElement("a",{href:"tel:123-123-1234"},n.a.createElement("li",null,n.a.createElement("img",{src:Ce.a,alt:"phone"}),n.a.createElement("p",null,"Call Us @123-123-1234")))),n.a.createElement(je.a,{elevation:3,style:{margin:"20px"}},n.a.createElement("a",{href:"mailto:test@gmail.com"},n.a.createElement("li",null,n.a.createElement("img",{src:Oe.a,alt:"envelope"}),n.a.createElement("p",null,"Email Us test@gmail.com")))))))}}]),t}(n.a.Component),Re=[{name:"Garlic Edamame",price:3.75,description:"Edamame saut\xe9ed with butter and garlic",picture:""},{name:"Chilled Tofu",price:4.5,description:"Chilled tofu with kimchi, green onion & bonito flakes",picture:""},{name:"Kigaru French Fries",price:3.75,description:"Spiral cut potato and french fries with okonomiyaki sauce & mayo on top",picture:""},{name:"Pork Belly Kakuni",price:7.75,description:"Braised pork belly served with Japanese mustard",picture:""},{name:"*Tuna Poke",price:8.25,description:"Sweet sesame soy sauce marinated tuna with avocado, sea weed salad, onion, and cilantro",picture:""},{name:"*Salmon Poke",price:8.25,description:"Sweet sesame soy sauce marinated salmon with avocado, sea weed salad, onion, and cilantro",picture:""},{name:"Ika-Maru",price:10,description:"Grilled whole squid served with mayo and chili pepper flakes",picture:""},{name:"Kaki Fry",price:8.5,description:"Deep fried oyster with tonkatsu sauce",picture:""},{name:"Octopus Dumpling (5pc)",price:5,description:"Takoyaki topped with takoyaki sauce, mayo, seaweed flakes, and bonito flakes",picture:""},{name:"Fried Calamari",price:6.75,description:"Deep fried calamari with Kigaru tar-tar sauce",picture:""},{name:"Karaage (5pc)",price:6.5,description:"Japanese style fried chicken served with mayo",picture:""},{name:"Fried Tofu",price:4.75,description:"Deep fried tofu in bonito broth with green onion and bonito flake on top",picture:""},{name:"Fried Eggplant",price:4.75,description:"Deep fried eggplant in bonito broth with green onion and bonito flake on top",picture:""},{name:"Fried Eggplant Tofu",price:7.75,description:"Deep fried eggplant and tofu in bonito broth with green onion and bonito flake on top",picture:""},{name:"Fried Mochi",price:5.25,description:"Deep fried mochi in bonito broth with green onion and bonito flake on top",picture:""},{name:"Garlic Butter Mussels (5pc)",price:7.75,description:"Mussels with garlic and butter topped with basil",picture:""},{name:"Baked Scallops (3pc)",price:9.75,description:"Scallops with garlic and butter",picture:""},{name:"Vegetable Gyoza (5pc)",price:4.5,description:"Pan-fried veggie dumplings",picture:""},{name:"Grilled Gyoza (5pc)",price:4.75,description:"Pan-fried pork and chicken dumplings",picture:""},{name:"Chicken Wings (5pc)",price:6.75,description:"Deep fried chicken wings dipped in yakitori sauce with sesame seeds on top",picture:""},{name:"Tempura",price:6.5,description:"Choice of shrimp OR assorted veggies",picture:""},{name:"Tempura Platter",price:10.25,description:"Shrimp and assorted veggies",picture:""},{name:"Fried Shrimp (5pc)",price:9,description:"Panko-breaded shrimp with Kigaru tartar sauce",picture:""},{name:"Pork Katsu",price:8,description:"Deep fried pork loin served with shredded cabbage, and katsu sauce",picture:""}],xe=a(81),Ne=a.n(xe),Te=a(82),Ae=a.n(Te),Pe=[{name:"Beef Curry",price:8.5,description:"Japanese style beef curry served over rice",picture:""},{name:"Fried Shrimp Curry",price:11,description:"Japanese style beef curry and deep-fried shrimp served over rice",picture:""},{name:"Gyoza Curry",price:10,description:"Japanese style beef curry and deep-fried dumplings served over rice",picture:""},{name:"Fried Chicken Curry",price:11,description:"Japanese style beef curry and deep-fried chicken served over rice",picture:""},{name:"Pork Katsu Curry",price:11,description:"Japanese style beef curry and deep-fried pork loin served over rice",picture:""}],ze=[{name:"Kimchi Udon",price:9,description:"Bonito broth with kimchi and spicy cod roe",picture:""},{name:"Beef Udon",price:9.25,description:"Bonito broth with beef, onion, green onion",picture:""},{name:"Tempura Udon",price:9.25,description:"Bonito broth with green onion, served with shrimp tempura and vegetable tempura",picture:""},{name:"Pork Belly Udon",price:9.25,description:"Bonito broth with braised pork belly",picture:""},{name:"*Tonkotsu Ramen",price:11,description:"Pork broth, topped with egg, sliced pork, bamboo shoots, green onion, seaweed",picture:Ne.a},{name:"*Tonkotsu Shoyu Ramen",price:11,description:"Soy sauce pork broth, topped with egg, sliced pork, bamboo shoots, green onion, seaweed",picture:""},{name:"*Miso Ramen",price:11,description:"Miso broth, topped with sliced pork, green onion, egg, bamboo shoots, and corn",picture:""},{name:"*Spicy Miso Ramen",price:11,description:"Just like the Miso Ramen, but with a spicy kick",picture:""},{name:"*Kakuni Ramen",price:12,description:"Topped with egg, kakuni pork belly, bamboo shoots, green onion, seaweed. Your choice of broth: Tonkotsu, Tonkotsu Shoyu, Miso, or Spicy Miso",picture:""}],Be=[{name:"*Tuna Poke Don",price:11,description:"Tuna poke served on a bowl of hot rice. Choice of sushi rice or regular rice.",picture:""},{name:"*Chirashi Don",price:19,description:"Sushi rice topped with chef\u2019s choice of sashimi",picture:Ae.a},{name:"*Pork Katsu Don",price:9.5,description:"Rice bowl with pork katsu, onions, egg, and green onion",picture:""},{name:"Tempura Don",price:9.5,description:"Rice bowl topped with shrimp tempura and assorted veggie tempura",picture:""},{name:"Karaage Don",price:9.5,description:"Rice bowl topped with Japanese style fried chicken dipped in yakitori sauce, green onion, sesame seed, seaweed, and yakitori sauce",picture:""}],Ie=[{name:"Bottle \u2013 Asahi (22oz)",price:7,description:"",picture:""},{name:"Draft \u2013 Sapporo (12oz)",price:4.75,description:"",picture:""},{name:"Draft \u2013 Sapporo (Pint)",price:6,description:"",picture:""},{name:"Draft \u2013 Sapporo (Pitcher)",price:20,description:"",picture:""}],Me=[{name:"Calpico Hi",price:8.5,description:"Pint Glass",picture:""},{name:"Lemon Hi",price:8.5,description:"Pint Glass",picture:""},{name:"Oolong Hi",price:8.5,description:"Pint Glass",picture:""},{name:"Ume-Shu Sour",price:8.5,description:"Pint Glass",picture:""}],Fe=[{name:"Ramune",price:3.5,description:"",picture:""},{name:"Iced Tea",price:2.25,description:"",picture:""},{name:"Lemonade",price:2.25,description:"",picture:""},{name:"Coke, Diet Coke, Sprite, Root Beer",price:2.25,description:"",picture:""}],He=[{name:"Sesame Balls (5pc)",price:4.23,description:"",picture:""},{name:"Ice Cream",price:3.5,description:"",picture:""},{name:"Taiyaki Ice Cream",price:6,description:"(Ice Cream Flavors: Red bean, Green Tea, or Coconut)",picture:""}],Ke=[{name:"*Squid",price:1.75,description:"",picture:""},{name:"Shrimp",price:2.25,description:"",picture:""},{name:"*Tuna",price:2.5,description:"",picture:""},{name:"*Salmon",price:2.5,description:"",picture:""},{name:"*Salmon Toro",price:3,description:"",picture:""},{name:"*Mackerel",price:500,description:"",picture:""},{name:"Octopus",price:300,description:"",picture:""},{name:"Egg",price:123,description:"",picture:""},{name:"*Aji",price:3,description:"",picture:""},{name:"*Albacore",price:2.5,description:"",picture:""},{name:"*Sweet Shrimp",price:3.5,description:"",picture:""},{name:"*Yellowtail",price:2.5,description:"",picture:""},{name:"*Surf Clam",price:1.75,description:"",picture:""},{name:"Eel",price:3.25,description:"",picture:""},{name:"*Seared Mackerel",price:500,description:"",picture:""},{name:"*Seared Salmon",price:2.5,description:"",picture:""},{name:"*Seared Tuna",price:2.5,description:"",picture:""},{name:"*Scallop",price:3,description:"",picture:""},{name:"*Seabream",price:2.75,description:"",picture:""}],Ge=[{name:"Cucumber Roll (6pc)",price:2.75,description:"",picture:""},{name:"*Salmon Roll (6pc)",price:5.5,description:"",picture:""},{name:"*Tuna Roll (6pc)",price:5.5,description:"",picture:""},{name:"Avocado Roll (6pc)",price:3.5,description:"",picture:""},{name:"Ume Shiso Roll (6pc)",price:3.75,description:"Pickled plum and shiso leaf",picture:""},{name:"Ume Cucumber Roll (6pc)",price:4.5,description:"Pickled plum and cucumber",picture:""},{name:"Avo/Cuc Roll (6pc)",price:4.5,description:"Avocado, cucumber",picture:""},{name:"*Kigaru Roll",price:16.75,description:"Tuna, albacore, avocado, cucumber, topped with seared salmon, jalapeno, smelt roe, & Kigaru sauce",picture:""},{name:"Vegetable Roll",price:5.75,description:"Avocado, cucumber, radish sprouts, pickled radish, burdock root, inari",picture:""},{name:"Giant Veggie Roll",price:6.75,description:"Avocado, cucumber, squash tempura, eggplant tempura, sesame seeds topped with edamame",picture:""},{name:"*Seven Samurai Roll",price:13.75,description:"Yellowtail, tuna, cucumber, topped with smoked salmon, Kigaru sauce & wasabi tobiko",picture:""},{name:"Lobster Crab Roll",price:16.75,description:"Cajun-spiced lobster & real crab salad, avocado. Deep fried and topped with sesame seeds. Served with yakitori sauce for dipping",picture:""},{name:"*Rainbow Roll",price:19,description:"Cucumber, real crab, topped with salmon, yellowtail, albacore, tuna, shrimp, smelt roe, & Kigaru sauce",picture:""},{name:"*Negi Hama Roll",price:6,description:"Green onion & yellowtail",picture:""},{name:"*Spicy Yellowtail Roll",price:6.25,description:"Avocado, yellowtail, chili powder, spicy mayo",picture:""},{name:"*Salmon Skin Roll",price:6.5,description:"Salmon skin, avocado, radish sprouts, burdock root, cucumber, and cream cheese",picture:""},{name:"*Spicy Tuna Roll",price:5.75,description:"Avocado & spicy tuna",picture:""},{name:"*Creamy Scallop Roll",price:7.5,description:"Creamy scallop & lettuce",picture:""},{name:"Takocado Roll",price:5.5,description:"Octopus & avocado",picture:""},{name:"*California Roll",price:4.75,description:"Krab, avocado, cucumber, smelt roe",picture:""},{name:"Crispy Shrimp Tempura Roll",price:6,description:"Shrimp tempura, cucumber, avocado with tempura flakes.",picture:""},{name:"*Vegas Roll",price:13.75,description:"Smoked salmon, crab salad, cream cheese, avocado. Deep fried and topped with eel sauce and smelt roe",picture:""},{name:"*Salmon Lover Roll",price:13.75,description:"empura salmon, avocado, topped with salmon, tobiko, & lemon",picture:""},{name:"Shrimp Lover Roll",price:12,description:"Bay shrimp salad, avocado, topped with boiled shrimp and special sauce",picture:""},{name:"*Philly Roll",price:8,description:"Smoked salmon, cream cheese, avocado, cucumber, smelt roe, sesame seeds",picture:""},{name:"*Spider Roll (5pc)",price:9.5,description:"Soft shell crab, avocado, cucumber, smelt roe, sesame seeds, radish sprouts",picture:""},{name:"Caterpillar Roll",price:17,description:"Eel, cucumber, krab, topped with avocado, sesame seeds, & eel sauce",picture:""},{name:"*Raijin Roll",price:16,description:"California roll topped with spicy scallops and real crab",picture:""},{name:"*Fujin Roll",price:16,description:"Spicy tuna, avocado, cucumber, krab, topped with seared albacore, sesame seeds, jalapeno, & Kigaru sauce",picture:""},{name:"*Hawaiian Roll",price:13,description:"Spicy tuna, smelt roe, pineapple, topped with salmon, sesame seeds, eel sauce & mayo",picture:""},{name:"*Dragon Roll",price:18,description:"Shrimp tempura, cucumber, eel, krab, topped with avocado, eel sauce, smelt roe, and sesame seeds",picture:""}],Ue=[{name:"*Creamy Scallop",price:3.5,description:"",picture:""},{name:"*Salmon Roe",price:5.25,description:"",picture:""},{name:"*Real Crab",price:5.25,description:"",picture:""},{name:"Krab Salad",price:2.5,description:"",picture:""},{name:"*Flying Fish Egg",price:123,description:"",picture:""},{name:"Fried Bean Curd",price:2.5,description:"",picture:""},{name:"Natto",price:3.5,description:"",picture:""},{name:"*Smelt Roe",price:2.75,description:"",picture:""},{name:"*Uni (1pc)",price:3.75,description:"",picture:""}],We=d.a.div({static:{},grow:{}}),Je=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={isDesktop:!1,openDrawer:!1,showDialog:!1},a.updatePredicate=a.updatePredicate.bind(Object(u.a)(Object(u.a)(a))),a.handleClickButton=a.handleClickButton.bind(Object(u.a)(Object(u.a)(a))),a.handleClose=a.handleClose.bind(Object(u.a)(Object(u.a)(a))),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleClickButton",value:function(){this.setState({showDialog:!0})}},{key:"handleClose",value:function(){this.setState({showDialog:!1})}},{key:"componentDidMount",value:function(){this.updatePredicate(),window.addEventListener("resize",this.updatePredicate)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updatePredicate)}},{key:"updatePredicate",value:function(){this.setState({isDesktop:window.innerWidth>890})}},{key:"render",value:function(){var e=this;return n.a.createElement(M.a,{basename:"/"},n.a.createElement("div",null,this.state.isDesktop?n.a.createElement(F,null):n.a.createElement(ce,{openDrawer:this.state.openDrawer,closeDrawer:function(){return e.setState({openDrawer:!1})}}),n.a.createElement(H.a,{exact:!0,path:"/",component:function(){return n.a.createElement(g,{handleListClick:function(){return e.setState({openDrawer:!0})}})}}),n.a.createElement(H.a,{path:"/sushi",component:function(){return n.a.createElement(A,{nigiri:Ke,gunkan:Ue,makirolls:Ge,desktop:e.state.isDesktop})}}),n.a.createElement(H.a,{path:"/appetizers",component:function(){return n.a.createElement(B,{appetizers:Re})}}),n.a.createElement(H.a,{path:"/maindish",component:function(){return n.a.createElement(oe,{japaneseCurry:Pe,noodles:ze,donburi:Be})}}),n.a.createElement(H.a,{path:"/drinks",component:function(){return n.a.createElement(se,{beer:Ie,chuHi:Me,softDrinks:Fe,dessert:He})}}),n.a.createElement(H.a,{path:"/contact",component:function(){return n.a.createElement(De,null)}}),n.a.createElement(We,{pose:this.state.showDialog?"static":"grow"},n.a.createElement(le.a,{onClick:this.handleClickButton,style:{position:"fixed",bottom:"0",right:"0",zIndex:2,marginRight:"5px",marginBottom:"10px"},size:this.state.isDesktop?"large":"small"},n.a.createElement(C.a,{style:this.state.isDesktop?{fontSize:"40px"}:{fontSize:"30px"},color:"error"},"favorite_border"))),n.a.createElement(ye,{open:this.state.showDialog,close:this.handleClose}),n.a.createElement(I,null)))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=a(47),Le={items:[]},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;return"ADD_TO_CART"===t.type?Object.assign({},e,{items:e.items.concat(t.payload)}):"REMOVE_FROM_CART"===t.type?Object.assign({},{items:e.items.filter(function(e){return e.name!==t.payload.name})}):e},Ye=new(function(){function e(){Object(o.a)(this,e)}return Object(s.a)(e,[{key:"loadState",value:function(){try{var e=localStorage.getItem("itemState");return null===e?this.initializeState():JSON.parse(e)}catch(t){return this.initializeState()}}},{key:"saveState",value:function(e){try{var t=JSON.stringify(e);localStorage.setItem("itemState",t)}catch(a){}}},{key:"initializeState",value:function(){return{items:[]}}}]),e}()),qe=Object(_e.b)(Ve,Ye.loadState());qe.subscribe(function(){Ye.saveState(qe.getState())}),c.a.render(n.a.createElement(k.a,{store:qe},n.a.createElement(Je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},34:function(e,t,a){e.exports=a.p+"static/media/wall2.91e69747.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/wall1.14620e15.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/appetizer.44cc30c3.svg"},73:function(e,t,a){e.exports=a.p+"static/media/beer.216305e9.svg"},74:function(e,t,a){e.exports=a.p+"static/media/home.133ce3f8.svg"},75:function(e,t,a){e.exports=a.p+"static/media/noodle.c005cbdf.svg"},76:function(e,t,a){e.exports=a.p+"static/media/sending.b3f066f2.svg"},77:function(e,t,a){e.exports=a.p+"static/media/sushi.d5bfd4e9.svg"},78:function(e,t,a){e.exports=a.p+"static/media/location.523b6499.svg"},79:function(e,t,a){e.exports=a.p+"static/media/phone.8b2f97f7.svg"},80:function(e,t,a){e.exports=a.p+"static/media/envelope.4d9e5a20.svg"},81:function(e,t,a){e.exports=a.p+"static/media/tonkotsuramen.35aaee61.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/chirashidon.280ec53a.jpg"},92:function(e,t,a){e.exports=a(104)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.7168b245.chunk.js.map