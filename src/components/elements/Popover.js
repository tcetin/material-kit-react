import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Popover extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        type:PropTypes.string,
        title:PropTypes.string.isRequired,
        content:PropTypes.string.isRequired,
        text:PropTypes.string.isRequired,
        direction:PropTypes.string.isRequired
    };

    static defaultProps = {
        className:'',
        type:'button',
        style:{}
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () => {
        let classes = ['btn'];

        if(this.props.type){
            classes.push('btn-'+this.props.type);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);


    };

    render(){
        const {style,type,title,content,text,direction} = this.props;
        return(
            <button type={type}
                    className={this.setClass()}
                    data-toggle="popover"
                    data-placement={direction}
                    title={title}
                    data-content={content}
                    data-container="body"
                    style = {style}>
                {text}
            </button>
        );
    }
}


export default Popover