import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from "./Icon";
import PropTypes from 'prop-types';

class Input extends Component {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        name: PropTypes.string,
        type: PropTypes.string,
        disabled: PropTypes.bool,
        readOnly: PropTypes.bool,
        defaultValue : PropTypes.string,
        hint:PropTypes.string,
        onChange: PropTypes.func,
        animType:PropTypes.string
    };

    static defaultProps = {
        className: 'form-control',
        style:{},
        type:'text',
        defaultValue:'',
        hint:''
    };

    constructor(props) {
        super(props);
        this.state = {
            inputValue : this.props.defaultValue
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.setCssClass = this.setCssClass.bind(this);
        this.setIcon = this.setIcon.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;

        this.setState({
            inputValue: value
        });
    }

    setCssClass = () =>{
        const
            classes = ['form-group'];

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
            type,
            disabled,
            readOnly,
            hint
        }=this.props;

        return (
            <div className={this.setCssClass()}>
                {this.props.labelText && (<label className="control-label">{this.props.labelText}</label>)}
                <input name={name}
                       type={type}
                       value={this.state.inputValue}
                       placeholder={hint}
                       className={className}
                       onChange={this.handleInputChange}
                       style={style}
                       disabled={disabled}
                       readOnly={readOnly}/>
                {this.setIcon()}
            </div>
        );
    }


}

export default Input;