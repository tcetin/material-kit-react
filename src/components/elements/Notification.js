import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from "./Icon";


class Notification extends Component{

    static propTypes = {
        className:PropTypes.string,
        type:PropTypes.string,
        style:PropTypes.object
    };

    static defaultProps = {
        className:'',
        style:{}
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
        this.setIcon = this.setIcon.bind(this);
    }

    setClass = () => {
        let classes = ['alert'];

        if(this.props.type){
            classes.push('alert-'+this.props.type);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }



        return classNames(classes);


    };

    setIcon = () => {
        if(this.props.type){
            if(this.props.type === 'info'){
                return  (<div className="alert-icon"><Icon iconName="info_outline"/></div>);
            }else if(this.props.type === 'success'){
                return (<div className="alert-icon"><Icon iconName="check"/></div>);
            }else if(this.props.type==='warning'){
                return (<div className="alert-icon"><Icon iconName="warning"/></div>);
            }else if(this.props.type==='danger'){
                return (<div className="alert-icon"><Icon iconName="error_outline"/></div>);
            }else{
                return '';
            }
        }
    };

    render(){

        return(
            <div className={this.setClass()} style={this.props.style}>
                <div className="container-fluid">
                    {this.setIcon()}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i className="material-icons">clear</i></span>
                    </button>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export default Notification