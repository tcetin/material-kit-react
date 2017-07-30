import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';



class Icon extends Component{

    static propTypes = {
        iconName:PropTypes.string.isRequired,
        className:PropTypes.string,
        type:PropTypes.string,
        style:PropTypes.object
    };

    static defaultProps = {
        className:'material-icons'
    };
    constructor(props){
        super(props);
        this.createIcon = this.createIcon.bind(this);
    }

    createIcon = ()=>{
        let {type,className,iconName} = this.props;
        if(type){
            return (<div className={classNames(['icon','icon-'+this.props.type])}>
                    <i className={className}>{this.props.iconName}</i>
                </div>);
        }

        return (<i className={className}>{iconName}</i>);
    };
    render(){
        return(this.createIcon());
    }
}


export default Icon;