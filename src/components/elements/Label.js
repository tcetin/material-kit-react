import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Label extends Component{

    static propTypes = {
        className:PropTypes.string,
        text:PropTypes.string,
        type:PropTypes.string
    };

    static defaultProps = {
        className:''
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () => {
        let classes = ['label'];

        if(this.props.type){
            classes.push('label-'+this.props.type);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);


    };

    render(){
        return(
            <span className={this.setClass()}>{this.props.text}</span>
        );
    }
}


export default Label