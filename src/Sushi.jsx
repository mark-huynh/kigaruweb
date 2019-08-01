import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import {nigiri} from './food/sushi/nigiri.js';
import {sashimi} from './food/sushi/sashimi.js';
import {maki} from './food/sushi/maki.js';

class Sushi extends React.Component {

    render(){

        return (
                <div className="menu-background">
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