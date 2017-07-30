import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Pill extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        targetElement:PropTypes.string.isRequired
    };

    static defaultProps = {
        style:{}
    };

    render(){
        return(
            <li className={this.props.className}>
                <a href={'#'+this.props.targetElement}
                   role="tab"
                   data-toggle="tab"
                   style={this.props.style}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}


export default Pill