import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import wall from './pictures/backgrounds/wall2.jpg'

class Drinks extends React.Component {

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
              <Menu title="Drinks" items={[
                  {
                    name: "asdf",
                    price: 10.5
                  },
                  {
                    name: "ItemNagsadfame",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "gfds",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "asdg",
                    price: 10.5,
                    description:
                      "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
                  },
                  {
                    name: "gg",
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
                    }]} />
            </MenuContainer>
          </div>
        );
    }
}

export default Drinks;