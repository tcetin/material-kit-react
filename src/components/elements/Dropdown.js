import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

class Dropdown extends Component{

   static propTypes = {
       className: PropTypes.string,
       style: PropTypes.object,
       label:PropTypes.string.isRequired,
       color:PropTypes.string
   };

    static defaultProps = {
        className: '',
        style: {},
        color:'simple'
    };

    constructor(props){
        super(props);
        this.setClass =this.setClass.bind(this);
    }

    setClass = ()=>{
        let {className} = this.props;
        let classes = ['dropdown'];
        if(className){
            classes.push(className);
        }
        return classNames(classes);
    };



    render(){
        let {style,label,color} = this.props;
        return(
            <div className={this.setClass()}
                 style={style}>
                <a href="#"
                   className={classNames(['btn','btn-'+color,'dropdown-toggle'])}
                   data-toggle="dropdown">
                    {label}
                    <b className="caret"></b>
                </a>
                <ul className="dropdown-menu">
                    {this.props.children}
                </ul>
            </div>
        );
    }
};


export default Dropdown;