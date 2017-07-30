import React, { Component } from 'react';
import classNames from 'classnames';



class Col extends Component{

    constructor(props){
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = () => {
        let classes = [];
        if(this.props.md){
            classes.push("col-md-"+this.props.md);
        }
        if(this.props.sm){
            classes.push("col-sm-"+this.props.sm);
        }
        if(this.props.xs){
            classes.push("col-xs-"+this.props.xs);
        }

        if(this.props["md-offset"]){
            classes.push("col-md-offset-"+this.props["md-offset"]);
        }

        if(this.props["sm-offset"]){
            classes.push("col-sm-offset-"+this.props["sm-offset"]);
        }

        if(this.props["xs-offset"]){
            classes.push("col-xs-offset-"+this.props["xs-offset"]);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);

    };


    render(){
        let {style} = this.props;
        return(
            <div className={this.setClass()} style={style}>{this.props.children}</div>
        );
    }
}


export default Col