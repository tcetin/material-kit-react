import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';


class Copyright extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        year:PropTypes.string.isRequired
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
        let classes = ['copyright'];
        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);
    }

    render(){
        let {style,year} = this.props;
        return(
            <div className={this.setClass()} style={style}>
                &#169; {year}, {this.props.children}
            </div>
        );
    }
}


export default Copyright