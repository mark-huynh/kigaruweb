import React from 'react';
import Menu from './Menu.jsx'
import MenuContainer from './MenuContainer'
import {nigiri} from './food/sushi/nigiri.js';
import wallPic from './pictures/backgrounds/wall2.jpg';
import fishPic from './pictures/backgrounds/wall1.jpg';

const backImage = {
    background: 'url(' + wallPic + ') no-repeat center fixed',
    // background: 'no-repeat center fixed',
    backgroundSize: 'cover',
    height: '100vh'
}

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
