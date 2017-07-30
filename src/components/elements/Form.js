import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class Form extends Component{

    static propTypes = {
        className:PropTypes.string,
        method:PropTypes.string,
        action:PropTypes.string,
        style:PropTypes.object,
        _onSubmit:PropTypes.func
    };

    static defaultProps = {
        className:'',
        style:{},
        method:'',
        action:''
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () => {
        let classes = [];
        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);


    };

    render(){
        let {method,action,style,_onSubmit} = this.props;
        return(
            <form className={this.setClass()}
                  method={method}
                  action={action}
                  style={style}
                  onSubmit={_onSubmit}>
                {this.props.children}
            </form>
        );
    }
}


export default Form