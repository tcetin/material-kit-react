import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from "../elements/Icon";



class FormGroup extends Component{
    constructor(props){
        super(props);
    }

    render(){

        const
            classes = ['form-group'];

        if(this.props.groupType){
            if(this.props.groupType==='floating'){
                classes.push('label-floating');
            }
        }

        if(this.props.groupColor){
            if(this.props.groupColor==='success'){
                classes.push('has-success');
            }
        }

        return(
            <div className={classNames(classes)}>
                {this.props.children}
            </div>
        );
    }
}


export default FormGroup