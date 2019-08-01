import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import {appetizers} from './food/appetizers.js';

class Appetizer extends React.Component {

    render(){

        return (
                <div className="menu-background">
                    <MenuContainer>
                        <Menu title="Appetizers" items={appetizers} />
                    </MenuContainer>
                </div>
        );
    }
}

export default Appetizer;