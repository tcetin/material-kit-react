import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Container extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        fluid:PropTypes.bool
    };

    static defaultProps = {
        className:'',
        style:{}
    };

    render(){
        let classes = [];
        if(this.props.fluid){
            classes.push('container-fluid');
        }else{
            classes.push('container');
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return(
                <div className={classNames(classes)} style={this.props.style}>{this.props.children}</div>
        );
    }
}


export default Container;