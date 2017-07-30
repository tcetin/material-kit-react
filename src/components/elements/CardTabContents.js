import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class CardTabContents extends Component{

    static propTypes = {
        className:PropTypes.string,
        children:PropTypes.oneOfType([PropTypes.element,PropTypes.array]).isRequired,
        style:PropTypes.object
    };

    static defaultProps = {
        className:'',
        style:{}
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = ()=>{
        let cls = ['tab-content'];

        if(this.props.className){
            cls.push(this.props.className);
        }

        return classNames(cls);

    };

    render(){
        const {
            style
        } = this.props;

        return(
            <div className="content"
                 style={style}>
                <div className={this.setClass()}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export default CardTabContents