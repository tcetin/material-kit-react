import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class MenuItem extends Component{
    constructor(props){
        super(props);

        this.state = {
            isActive:this.props.active
        }
    }

    render(){

        return(
            <li className={this.state.isActive ? 'active' :''}>
                <NavLink to={this.props.to}
                      target={this.props.target}
                      rel={this.props.rel}
                      title={this.props.title}
                      data-placement={this.props.dataPlacement}
                      className={this.props.className}
                      activeClassName="active">{this.props.children}</NavLink>
            </li>
        );
    }
}


export default MenuItem;