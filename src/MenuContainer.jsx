import React from 'react';

class MenuContainer extends React.Component {
  render() {
    return <div className="menu-back">{this.props.children}</div>;
  }
}

export default MenuContainer;