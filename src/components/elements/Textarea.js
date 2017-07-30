import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from "./Icon";


class Textarea extends Component{
    static propTypes = {
        className:PropTypes.string,
        style:PropTypes.object,
        rows: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        content: PropTypes.string,
        hint: PropTypes.string,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool
    };

    static defaultProps = {
        className: 'form-control',
        style:{},
        hint:''
    };

    constructor(props){
        super(props);
        this.setClass = this.setClass.bind(this);
        this.setIcon = this.setIcon.bind(this);
    }

    setClass=()=>{
      let classes = ['form-group'];

      if(this.props.animType){
            if(this.props.animType==='floating'){
                classes.push('label-floating');
            }else if(this.props.animType==='success'){
                classes.push('label-floating');
                classes.push('has-success');

            }else if(this.props.animType==='error'){
                classes.push('label-floating');
                classes.push('has-error');
            }
        }
      return classNames(classes);
    };

    setIcon = ()=>{
        if(this.props.animType){
            if(this.props.animType==='success'){
                return (<span className="form-control-feedback"><Icon iconName="done"/></span>);
            }else if(this.props.animType==='error'){
                return (<span className="material-icons form-control-feedback">clear</span>);
            }
        }else{
            return '';
        }

    };

    render(){
        const {
            className,
            style,
            name,
            content,
            rows,
            disabled,
            readOnly,
            hint
        }=this.props;
        return(
            <div className={this.setClass()}>
                {this.props.labelText && (<label className="control-label">{this.props.labelText}</label>)}
                <textarea name={name}
                       rows={rows}
                       value={content}
                       placeholder={hint}
                       className={className}
                       style={style}
                       disabled={disabled}
                       readOnly={readOnly}/>
                {this.setIcon()}
            </div>

        );
    }
}

export default Textarea
