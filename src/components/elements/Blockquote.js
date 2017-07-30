import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Blockquote extends Component{

    static propTypes = {
        className:PropTypes.string,
        text:PropTypes.string.isRequired,
        speaker:PropTypes.string.isRequired,
        style:PropTypes.object
    };

    static defaultProps = {
        className:'',
        style:{}
    };


    render(){
        const {style,className,speaker,text} = this.props;
        return(
            <blockquote className={className} style={style}>
                <p>{text}</p>
                <small>{speaker}</small>
            </blockquote>
        );
    }
}


export default Blockquote