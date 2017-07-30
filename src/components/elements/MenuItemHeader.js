import React, { Component } from 'react';

class MenuItemHeader extends Component{
    render(){
        return(
            <li className="dropdown-header">{this.props.children}</li>
        );
    }
}


export default MenuItemHeader;