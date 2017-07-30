import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Row extends Component{
    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        id:PropTypes.string
    };

    static defaultProps = {
        className:''
    };

    constructor(props){
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass =()=>{
        let classes = ['row'];

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);
    };

    render(){
        const {style} = this.props;
        return(
            <div className={this.setClass()}
                 style={style} >{this.props.children}</div>
        );
    }
}


export default Row