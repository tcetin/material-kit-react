import React, { Component } from 'react';
import classNames from 'classnames';
import Container from './Container';
import Row from './Row';
import Col from './Col';

class Header extends Component{
    const
    styles = {
        backgroundImage:"url("+this.props.imgUrl+")"
    };

    render(){
        return(
            <div className={classNames('header','header-filter')} style={this.styles} ref="header">
                                {this.props.children}
            </div>
        );
    }
}


export default Header