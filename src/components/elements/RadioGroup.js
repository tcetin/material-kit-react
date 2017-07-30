import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends Component{

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
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            selectedOption : this.props.selectedRadio
        };
    }


    handleInputChange(e) {

        const {props} = this;
        if (props.disabled) {
           return;
        }

        this.setState({
            selectedOption : e.target.value
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

    const {     className,
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

            const {selectedOption} = this.state;

        const
            radioItems = (this.props.rd).map((radio) =>
                <div className="radio" key={radio.value}>
                    <label>
                        <input
                            name={name}
                            type={type}
                            style={style}
                            className={className}
                            readOnly={readOnly}
                            disabled={disabled}
                            tabIndex={tabIndex}
                            checked={selectedOption === radio.value}
                            onClick={onClick}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onChange={this.handleInputChange}
                            value = {radio.value}/>
                            {radio.text}
                    </label>
                </div>
            );

        return (<div>{radioItems}</div>);
    }
}

export default RadioGroup;