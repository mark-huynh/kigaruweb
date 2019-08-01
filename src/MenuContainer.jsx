import React from 'react';
import Grid from '@material-ui/core/Grid';


class MenuContainer extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div className="menu-back">
                {this.props.children}
            </div>
        );
    }
}

export default MenuContainer;