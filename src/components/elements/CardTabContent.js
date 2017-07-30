import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class CardTabContent extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        contentName:PropTypes.string.isRequired
    };

    static defaultProps = {
        className:'',
        style:{}
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = ()=>{
        let cls = ['tab-pane'];

        if(this.props.className){
            cls.push(this.props.className);
        }

        return classNames(cls);

    };

    render(){
        const {
            style,
            contentName
        } = this.props;

        return(
            <div className={this.setClass()} id={contentName} style={style}>
                {this.props.children}
            </div>
        );
    }
}


export default CardTabContent