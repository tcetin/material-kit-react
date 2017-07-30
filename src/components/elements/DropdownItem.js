import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownItem extends Component{
    static propTypes = {
      className:PropTypes.string,
      style:PropTypes.object,
      onClick:PropTypes.func
    };

    static defaultProps = {
      className:'',
      style:{}
    };
    render(){

        let {className,style,onClick} = this.props;

        return(
            <li className={className}
                style={style}
                onClick={onClick}>
                {this.props.children}
            </li>
        )
    }
}

export default DropdownItem;