import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class CardTabs extends Component{

    static propTypes = {
        className:PropTypes.string,
        children:PropTypes.oneOfType([PropTypes.element,PropTypes.array,PropTypes.string]).isRequired,
        style:PropTypes.object
    };

    static defaultProps = {
        className:''
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () => {
        let classes = ['card card-nav-tabs'];
        if (this.props.className) {
            classes.push(this.props.className);
        }
        return classNames(classes);
    }

    render(){
        return(
            <div className={this.setClass()} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}


export default CardTabs