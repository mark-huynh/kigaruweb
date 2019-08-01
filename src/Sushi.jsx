import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import {nigiri} from './food/sushi/nigiri.js';
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
                    <MenuContainer>
                        <Menu title="Nigiri & Gunkan (2pc)" items={nigiri} />
                        <Menu title="Sashimi (3pc)" items={sashimi} />
                        <Menu title="Maki / Rolls" items={maki} />
                    </MenuContainer>
                </div>
        );
    }
}

export default Sushi;