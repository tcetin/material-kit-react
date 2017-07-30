import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Footer extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object
    };

    static defaultProps = {
        className:'',
        style:{}
    };

    constructor(props){
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = ()=>{
        let classes = ['footer'];
        if(this.props.className){
            classes.push(this.props.className);
        }
        return classNames(classes);
    }

    render(){

        let {style} = this.props;

        return(
            <footer className={this.setClass()} style={style}>
                {this.props.children}
            </footer>
        );
    }
}


export default Footer;