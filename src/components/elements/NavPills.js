import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class NavPills extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        type:PropTypes.string
    };

    static defaultProps = {
        className:'',
        style:{}
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () => {
        let classes = ['nav nav-pills'];

        if(this.props.type){
            classes.push('nav-pills-'+this.props.type);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);


    };


    render(){
        return(
            <ul className={this.setClass()}
                role="tablist"
                style={this.props.style}>
                {this.props.children}
            </ul>
        );
    }
}


export default NavPills