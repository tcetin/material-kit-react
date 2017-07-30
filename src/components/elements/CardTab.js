import React, { Component } from 'react';
import PropTypes from 'prop-types';


class CardTab extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        targetContent:PropTypes.string
    };

    static defaultProps = {
        className:'',
        style:{},
        targetContent:''
    };

    render(){
        const {
            className,
            style,
            targetContent
        } = this.props;
        return(
            <li className={className}
                style={style}>
                <a href={'#'+targetContent} data-toggle="tab">
                    {this.props.children}
                </a>
            </li>
        );
    }
}


export default CardTab