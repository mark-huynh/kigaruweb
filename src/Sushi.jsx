import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
// import {nigiri} from './food/sushi/nigiri.js';
import {sashimi} from './food/sushi/sashimi.js';
import {maki} from './food/sushi/maki.js';
import wall from './pictures/backgrounds/wall1.jpg';


class Sushi extends React.Component {

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
              <Menu
                title="Nigiri (1pc)"
                items={[
                  {
                    name: "*Squid",
                    price: 1.75
                  },
                  {
                    name: "Shrimp",
                    price: 2.25
                  },
                  {
                    name: "*Tuna",
                    price: 2.5
                  },
                  {
                    name: "*Salmon",
                    price: 2.5
                  },
                  {
                    name: "*Salmon Toro",
                    price: 3,
                    description: ""
                  },
                  {
                    name: "*Mackerel",
                    price: 2
                  },
                  {
                    name: "Octopus",
                    price: 2.25
                  },
                  {
                    name: "Egg",
                    price: 1.75
                  },
                  {
                    name: "*Aji",
                    price: 3
                  },
                  {
                    name: "*Albacore",
                    price: 2.5
                  },
                  {
                    name: "*Sweet Shrimp",
                    price: 3.5
                  },
                  {
                    name: "*Yellowtail",
                    price: 2.5,

                  },
                  {
                    name: "*Surf Clam",
                    price: 1.75,

                  },
                  {
                    name: "Eel",
                    price: 3.25,
                  },
                  {
                    name: "*Seared Mackerel",
                    price: 2
                  },
                  {
                    name: "*Seared Salmon",
                    price: 2.5
                  },
                  {
                    name: "*Seared Tuna",
                    price: 2.5
                  },
                  {
                    name: "*Scallop",
                    price: 3
                  },
                  {
                    name: "*Seabream",
                    price: 2.75,
                  }
                ]}
              />
              <Menu
                title="Gunkan (2pc)"
                items={[
                  {
                    name: "*Creamy Scallop",
                    price: 3.5
                  },
                  {
                    name: "*Salmon Roe",
                    price: 5.25
                  },
                  {
                    name: "*Real Crab",
                    price: 5.25
                  },
                  {
                    name: "Krab Salad",
                    price: 2.5
                  },
                  {
                    name: "*Flying Fish Egg",
                    price: 3.75,
                    description: ""
                  },
                  {
                    name: "Fried Bean Curd",
                    price: 2.5
                  },
                  {
                    name: "Natto",
                    price: 3.5
                  },
                  {
                    name: "*Smelt Roe",
                    price: 2.75
                  },
                  {
                    name: "*Uni (1pc)",
                    price: 3.75
                  }
                ]}
              />
              <Menu
                title="Maki / Rolls"
                items={[          {
                  name: "Cucumber Roll (6pc)",
                  price: 2.75
                },
                {
                  name: "*Salmon Roll (6pc)",
                  price: 5.5
                },
                {
                  name: "*Tuna Roll (6pc)",
                  price: 5.5
                },
                {
                  name: "Avocado Roll (6pc)",
                  price: 3.5
                },
                {
                  name: "Ume Shiso Roll (6pc)",
                  price: 3.75,
                  description:"Pickled plum and shiso leaf"
                },          {
                  name: "Ume Cucumber Roll (6pc)",
                  price: 4.5,
                  description:"Pickled plum and cucumber"
                },
                {
                  name: "Avo/Cuc Roll (6pc)",
                  price: 4.5,
                  description:"Avocado, cucumber"
                },
                {
                  name: "*Kigaru Roll",
                  price: 16.75,
                  description:"Tuna, albacore, avocado, cucumber, topped with seared salmon, jalapeno, smelt roe, & Kigaru sauce"
                },
                {
                  name: "Vegetable Roll",
                  price: 5.75,
                  description:"Avocado, cucumber, radish sprouts, pickled radish, burdock root, inari"
                },
                {
                  name: "Giant Veggie Roll",
                  price: 6.75,
                  description:"Avocado, cucumber, squash tempura, eggplant tempura, sesame seeds topped with edamame"
                },          {
                  name: "*Seven Samurai Roll",
                  price: 13.75,
                  description:"Yellowtail, tuna, cucumber, topped with smoked salmon, Kigaru sauce & wasabi tobiko"
                },
                {
                  name: "Lobster Crab Roll",
                  price: 16.75,
                  description:"Cajun-spiced lobster & real crab salad, avocado. Deep fried and topped with sesame seeds. Served with yakitori sauce for dipping"
                },
                {
                  name: "*Rainbow Roll",
                  price: 19,
                  description:"Cucumber, real crab, topped with salmon, yellowtail, albacore, tuna, shrimp, smelt roe, & Kigaru sauce"
                },
                {
                  name: "*Negi Hama Roll",
                  price: 6,
                  description:"Green onion & yellowtail"
                },
                {
                  name: "*Spicy Yellowtail Roll",
                  price: 6.25,
                  description:"Avocado, yellowtail, chili powder, spicy mayo"
                },          {
                  name: "*Salmon Skin Roll",
                  price: 6.5,
                  description:"Salmon skin, avocado, radish sprouts, burdock root, cucumber, and cream cheese"
                },
                {
                  name: "*Spicy Tuna Roll",
                  price: 5.75,
                  description:"Avocado & spicy tuna"
                },
                {
                  name: "*Creamy Scallop Roll",
                  price: 7.5,
                  description:"Creamy scallop & lettuce"
                },
                {
                  name: "Takocado Roll",
                  price: 5.5,
                  description:"Octopus & avocado"
                },
                {
                  name: "*California Roll",
                  price: 4.75,
                  description:"Krab, avocado, cucumber, smelt roe"
                },          {
                  name: "Crispy Shrimp Tempura Roll",
                  price: 6,
                  description:"Shrimp tempura, cucumber, avocado with tempura flakes."
                },
                {
                  name: "*Vegas Roll",
                  price: 13.75,
                  description:"Smoked salmon, crab salad, cream cheese, avocado. Deep fried and topped with eel sauce and smelt roe"
                },
                {
                  name: "*Salmon Lover Roll",
                  price: 13.75,
                  description:"empura salmon, avocado, topped with salmon, tobiko, & lemon"
                },
                {
                  name: "Shrimp Lover Roll",
                  price: 12,
                  description:"Bay shrimp salad, avocado, topped with boiled shrimp and special sauce"
                },
                {
                  name: "*Philly Roll",
                  price: 8,
                  description:"Smoked salmon, cream cheese, avocado, cucumber, smelt roe, sesame seeds"
                },          {
                  name: "*Spider Roll (5pc)",
                  price: 9.5,
                  description:"Soft shell crab, avocado, cucumber, smelt roe, sesame seeds, radish sprouts"
                },
                {
                  name: "Caterpillar Roll",
                  price: 17,
                  description:"Eel, cucumber, krab, topped with avocado, sesame seeds, & eel sauce"
                },
                {
                  name: "*Raijin Roll",
                  price: 16,
                  description:"California roll topped with spicy scallops and real crab"
                },
                {
                  name: "*Fujin Roll",
                  price: 16,
                  description:"Spicy tuna, avocado, cucumber, krab, topped with seared albacore, sesame seeds, jalapeno, & Kigaru sauce"
                },
                {
                  name: "*Hawaiian Roll",
                  price: 13,
                  description:"Spicy tuna, smelt roe, pineapple, topped with salmon, sesame seeds, eel sauce & mayo"
                },          {
                  name: "*Dragon Roll",
                  price: 18,
                  description:"Shrimp tempura, cucumber, eel, krab, topped with avocado, eel sauce, smelt roe, and sesame seeds"
                }]}
              />
            </MenuContainer>
          </div>
        );
    }
  }
export default Sushi;
