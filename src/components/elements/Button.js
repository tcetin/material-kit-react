import React, { Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Button extends Component{

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        type: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: PropTypes.func
    };

    static defaultProps = {
        className: '',
        style: {},
        type: 'button'
    };


    constructor(props) {
        super(props);
        this.setCssClass = this.setCssClass.bind(this);
    }

     let
        setCssClass = (cls)=>{

            let btnType = this.props.btnType;
            let btnCss = ['btn'];

            if(btnType==='round'){
                btnCss.push('btn-round');
            }else if(btnType==='fab-mini'){
                btnCss.push('btn-fab','btn-fab-mini','btn-round');
            }else if(btnType==='simple'){
                    btnCss.push('btn-simple');
            }

            if(this.props.btnColor){
                btnCss.push('btn-'+this.props.btnColor);
            }

            if(this.props.btnSize){
                btnCss.push('btn-'+this.props.btnSize);
            }

            if(cls){
                btnCss.push(cls);
            }

            return classNames(btnCss);
        };




    render() {
        const {
            className,
            style,
            type,
            disabled,
            onClick
        } = this.props;

        return (
            <button type={type}
                    className={this.setCssClass(className)}
                    onClick={onClick}
                    disabled={disabled}
                    style={style}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;