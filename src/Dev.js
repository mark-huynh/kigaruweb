import React from 'react';
import Menu from './Menu.jsx'
import {nigiri} from './food/sushi/nigiri.js';

class Dev extends React.Component {

    render(){

        return (
            <div>
                <Menu title="Nigiri" items={nigiri} /> 
            </div>
        );
    }
}

export default Dev;
