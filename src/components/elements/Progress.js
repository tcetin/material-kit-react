import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Progress extends Component{

    static propTypes = {
        type:PropTypes.string.isRequired,
        className:PropTypes.string,
        style:PropTypes.object,
        min:PropTypes.number.isRequired,
        max:PropTypes.number.isRequired,
        value:PropTypes.number.isRequired,
        currentValue:PropTypes.number.isRequired
    };

    static defaultProps = {
        className:'',
        style:{},
        min:0,
        max:100,
        value:10,
        currentValue:10,
        type:''
    };

    constructor(props){
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () =>{
        let classes = ['progress-bar'];
        if(this.props.type){
            classes.push('progress-bar-'+this.props.type);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);
    };

    render(){
        return(
                <div className={this.setClass()}
                     role="progressbar"
                     aria-valuenow={this.props.currentValue}
                     aria-valuemin={this.props.min}
                     aria-valuemax={this.props.max}
                     style={{width:this.props.value + '%'}}>
                    <span className="sr-only">{this.props.currentValue+'% Complete'}</span>
                </div>
        );
    }
}


export default Progress;