import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Image extends Component{

    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        src:PropTypes.string.isRequired,
        alt:PropTypes.string,
        rounded:PropTypes.bool,
        circle:PropTypes.bool,
        raised:PropTypes.bool
    };

    static defaultProps = {
        className:'',
        style:{},
        alt:''
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () => {
        let classes = [];

        if(this.props.rounded){
            classes.push('img-rounded');
        }

        if(this.props.circle){
            classes.push('img-circle');
        }

        if(this.props.raised){
            classes.push('img-raised');
        }

        if(this.props.responsive){
            classes.push('img-responsive');
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);


    };

    render(){
        const {style,src,alt} = this.props;
        return(
            <img src={src} alt={alt} style={style} className={this.setClass()}/>
        );
    }
}


export default Image