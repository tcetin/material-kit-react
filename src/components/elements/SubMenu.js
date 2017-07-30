import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import classNames from 'classnames';
import Icon from "./Icon";

class SubMenu extends Component{
    constructor(props){
        super(props);
        this.setMenuIcon = this.setMenuIcon.bind(this);
        this.state = {
            isActive:this.props.active
        }
    }

    const
        setMenuIcon = ((iconName)=>{
            if(iconName)
             return <Icon iconName={iconName}/>;

             return '';
        });

    render(){
        let ulClass = ['dropdown-menu'];

        if(this.props.right){
            ulClass.push('dropdown-menu-right');
        }else if(this.props.left){
            ulClass.push('dropdown-menu-left');
        }


        return(
            <li className={this.state.isActive ? 'active' : ''}>
                <a href="/" className="dropdown-toggle" data-toggle="dropdown">
                    {this.setMenuIcon(this.props.subMenuIcon) || this.props.subMenuTitle}
                    <b className="caret"></b>
                </a>

                <Router>
                    <ul className={classNames(ulClass)}>
                        {this.props.children}
                    </ul>
                </Router>
            </li>
        );
    }
}


export default SubMenu;