import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import {appetizers} from './food/appetizers.js';
import wall from './pictures/backgrounds/wall2.jpg'

class Appetizer extends React.Component {

    style={
        backgroundImage: `url(${wall})`
    }

    render(){

        return (
          <div style={this.style} className="menu-background">
            {!this.props.desktop && (
              <div style={this.style} className="mobile-menu-back" />
            )}
            <MenuContainer>
              <Menu title="Appetizers" items={[          {
            name: "Garlic Edamame",
            price: 3.75,
            description: "Edamame sautéed with butter and garlic"
          },
          {
            name: "Chilled Tofu",
            price: 4.5,
            description: "Chilled tofu with kimchi, green onion & bonito flakes"
          },
          {
            name: "Kigaru French Fries",
            price: 3.75,
            description: "Spiral cut potato and french fries with okonomiyaki sauce & mayo on top"
          },
          {
            name: "Pork Belly Kakuni",
            price: 7.75,
            description: "Braised pork belly served with Japanese mustard"
          },
          {
            name: "*Tuna Poke",
            price: 8.25,
            description: "Sweet sesame soy sauce marinated tuna with avocado, sea weed salad, onion, and cilantro"
          },          {
            name: "*Salmon Poke",
            price: 8.25,
            description: "Sweet sesame soy sauce marinated salmon with avocado, sea weed salad, onion, and cilantro"
          },
          {
            name: "Ika-Maru",
            price: 10,
            description: "Grilled whole squid served with mayo and chili pepper flakes"
          },
          {
            name: "Kaki Fry",
            price: 8.5,
            description: "Deep fried oyster with tonkatsu sauce"
          },
          {
            name: "Octopus Dumpling (5pc)",
            price: 5,
            description: "Takoyaki topped with takoyaki sauce, mayo, seaweed flakes, and bonito flakes"
          },
          {
            name: "Fried Calamari",
            price: 6.75,
            description: "Deep fried calamari with Kigaru tar-tar sauce"
          },          {
            name: "Karaage (5pc)",
            price: 6.5,
            description: "Japanese style fried chicken served with mayo"
          },
          {
            name: "Fried Tofu",
            price: 4.75,
            description: "Deep fried tofu in bonito broth with green onion and bonito flake on top"
          },
          {
            name: "Fried Eggplant",
            price: 4.75,
            description: "Deep fried eggplant in bonito broth with green onion and bonito flake on top"
          },
          {
            name: "Fried Eggplant Tofu",
            price: 7.75,
            description: "Deep fried eggplant and tofu in bonito broth with green onion and bonito flake on top"
          },
          {
            name: "Fried Mochi",
            price: 5.25,
            description: "Deep fried mochi in bonito broth with green onion and bonito flake on top"
          },          {
            name: "Garlic Butter Mussels (5pc)",
            price: 7.75,
            description: "Mussels with garlic and butter topped with basil"
          },
          {
            name: "Baked Scallops (3pc)",
            price: 9.75,
            description: "Scallops with garlic and butter"
          },
          {
            name: "Vegetable Gyoza (5pc)",
            price: 4.5,
            description: "Pan-fried veggie dumplings"
          },
          {
            name: "Grilled Gyoza (5pc)",
            price: 4.75,
            description: "Pan-fried pork and chicken dumplings"
          },
          {
            name: "Chicken Wings (5pc)",
            price: 6.75,
            description: "Deep fried chicken wings dipped in yakitori sauce with sesame seeds on top"
          },          {
            name: "Tempura",
            price: 6.5,
            description: "Choice of shrimp OR assorted veggies"
          },
          {
            name: "Tempura Platter",
            price: 10.25,
            description: "Shrimp and assorted veggies"
          },
          {
            name: "Fried Shrimp (5pc)",
            price: 9,
            description: "Panko-breaded shrimp with Kigaru tartar sauce"
          },
          {
            name: "Pork Katsu",
            price: 8,
            description: "Deep fried pork loin served with shredded cabbage, and katsu sauce"
          }]} />
            </MenuContainer>
          </div>
        );
    }
}

export default Appetizer;
