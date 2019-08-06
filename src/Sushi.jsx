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
                items={[
                  {
                    name: "ItemName",
                    price: 10.5
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description: ""
                  },
                  {
                    name: "ItemName",
                    price: 10.5
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description: ""
                  },
                  {
                    name: "ItemName",
                    price: 10.5
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description: ""
                  },
                  {
                    name: "ItemName",
                    price: 10.5
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description: ""
                  },
                  {
                    name: "ItemName",
                    price: 10.5
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description: ""
                  },
                  {
                    name: "ItemName",
                    price: 10.5
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description: ""
                  },
                  {
                    name: "ItemName",
                    price: 10.5
                  },
                  {
                    name: "ItemName",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  }
                ]}
              />
            </MenuContainer>
          </div>
        );
    }
}

export default Sushi;
