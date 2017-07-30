import React, { Component } from 'react';
import classNames from 'classnames';


class Section extends Component{
    static defaultProps = {
        className:'',
        sectionType:'',
        style:{}
    };
    constructor(props){
        super(props);
        this.setClass = this.setClass.bind(this);
    };

    setClass =()=>{
        let classes = ['section'];

        if(this.props.sectionType){
            classes.push(this.props.sectionType);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);
    };

    render(){
        let {style} = this.props;
        return(
            <div className={this.setClass()}
                 style={style}>
                {this.props.children}
            </div>
        );
    }
}


export default Section