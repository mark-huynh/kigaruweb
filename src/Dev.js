import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import {nigiri} from './food/sushi/nigiri.js';

class Dev extends React.Component {

    render(){

        return (
            <div className="menu-background">
                <MenuContainer>
                    <Menu title="Nigiri" items={nigiri} />
                </MenuContainer>
            </div>
        );
    }
}

export default Dev;
