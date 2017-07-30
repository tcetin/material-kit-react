import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class ButtonTooltip extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        type:PropTypes.string,
        title:PropTypes.string.isRequired,
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
        let classes = ['btn btn-tooltip'];

        if(this.props.type){
            classes.push('btn-'+this.props.type);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);

    };


    render(){
        const {style,type,title,text,direction} = this.props;
        return(
            <button type={type}
                    className={this.setClass()}
                    data-toggle="tooltip"
                    data-placement={direction}
                    title={title}
                    data-container="body"
                    style={style}>
                {text}
            </button>
        );
    }
}


export default ButtonTooltip