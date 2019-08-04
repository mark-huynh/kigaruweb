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
                <div style={this.style}className="menu-background">
                    <div className="mobile-menu-back">
                    </div>
                    <MenuContainer>
                        <Menu title="Nigiri & Gunkan (2pc)" items={[
    {
    name: "ItemName",
        price: 10.5
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    }
]} />
                        <Menu title="Sashimi (3pc)" items={[
    {
    name: "ItemName",
        price: 10.5
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    }
]} />
                        <Menu title="Maki / Rolls" items={[
    {
    name: "ItemName",
        price: 10.5
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    },
    {
    name: "ItemName",
        price: 10.5,
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
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
            description: "Relatively Long description asdfajsdflkas asdkfl dsjafl dsjlfka sdlfj dfs jalkdfsjdl ak"
    }
]} />
                    </MenuContainer>
                </div>
        );
    }
}

export default Sushi;