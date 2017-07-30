import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ProgressBar extends Component{

    static propTypes = {
        type:PropTypes.string.isRequired,
        className:PropTypes.string,
        style:PropTypes.object
    };

    static defaultProps = {
        className:'',
        style:{},
    };

    constructor(props){
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () =>{
        let classes = ['progress'];
        if(this.props.type){
            classes.push('progress-line-'+this.props.type);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);
    };

    render(){
        return(
            <div className={this.setClass()} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}


export default ProgressBar;