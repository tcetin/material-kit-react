import React, { Component } from 'react';
import classNames from 'classnames';
import noUiSlider from 'nouislider';
import PropTypes from 'prop-types';

let $ = window.$;

class Slider extends Component{

    static propTypes = {
        start: PropTypes.oneOfType([PropTypes.number, PropTypes.array]).isRequired,
        range: PropTypes.object.isRequired,
        connect: PropTypes.oneOfType([PropTypes.bool, PropTypes.array,PropTypes.string]),
        tooltips: PropTypes.bool,
        margin: PropTypes.number,
        limit: PropTypes.number,
        padding: PropTypes.number,
        step: PropTypes.number,
        orientation: PropTypes.string,
        direction:PropTypes.string,
        animate:PropTypes.bool,
        behaviour:PropTypes.string,
        format:PropTypes.func,
        pips:PropTypes.object

    };

    componentDidMount() {
        const {
            start,
            range,
            connect,
            tooltips,
            margin,
            limit,
            padding,
            step,
            orientation,
            direction,
            animate,
            behaviour,
            format,
            pips,
        } = this.props;

        let slider = noUiSlider.create(this.refs.slider,{
            start:start,
            range:range,
            connect:connect,
            tooltips:tooltips,
            margin:margin,
            limit:limit,
            padding:padding,
            step:step,
            orientation:orientation,
            direction:direction,
            animate:animate,
            behaviour:behaviour,
            format:format,
            pips:pips
        });

        this.handleChange = this.handleChange.bind(this);
        slider.on('change', this.handleChange);
    }

    componentWillUnmount(){
        $(this.refs.slider).noUiSlider.off('change', this.handleChange);
        $(this.refs.slider).noUiSlider('destroy');
    }

    handleChange(e) {
        /**
         * You can catch changes on the slider.
         */
        console.log(e);
    }

    render() {
        const classes = ['slider'];

        if(Array.isArray(this.props.start) && (this.props.start).length>1){
            classes.push('slider-info')
        }

        return (
            <div ref="slider" className={classNames(classes)}></div>
        );
    }
}

export default Slider;