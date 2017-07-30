import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Radio extends Component{

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        name: PropTypes.string,
        type: PropTypes.string,
        defaultChecked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        checked: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onClick: PropTypes.func,
        tabIndex: PropTypes.string,
        readOnly: PropTypes.bool
    };

    static defaultProps = {
        className: '',
        style: {},
        type: 'radio',
        defaultChecked: false,
        onFocus() {},
        onBlur() {},
        onChange() {}
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

        const checked = 'checked' in props ? props.checked : props.defaultChecked;

        this.state = {
            checked
        };
    }


    handleChange(e) {
        const {props} = this;
        if (props.disabled) {
            return;
        }

        this.setState({
            checked: !this.state.checked,
        });

        props.onChange({
            target: {
                ...props,
                checked: e.target.checked,
            },
            stopPropagation() {
                e.stopPropagation();
            },
            preventDefault() {
                e.preventDefault();
            },
        });
    }



    render() {
        const {
            className,
            style,
            name,
            type,
            disabled,
            readOnly,
            tabIndex,
            onClick,
            onFocus,
            onBlur
        } = this.props;

        const {checked} = this.state;

        return (
            <div className="radio">
                <label>
                    <input
                        name={name}
                        type={type}
                        style={style}
                        className={className}
                        readOnly={readOnly}
                        disabled={disabled}
                        tabIndex={tabIndex}
                        checked={!!checked}
                        onClick={onClick}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={this.handleChange}/>
                    {this.props.inputText}
                </label>
            </div>
        );
    }
}

export default Radio;