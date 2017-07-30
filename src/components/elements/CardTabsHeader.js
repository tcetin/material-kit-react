import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class CardTabsHeader extends Component{

    static propTypes = {
        headerType:PropTypes.string,
        children:PropTypes.oneOfType([PropTypes.element,PropTypes.array]).isRequired,
        style:PropTypes.object
    };

    static defaultProps = {
        style:{}
    };

    constructor(props) {
        super(props);
        this.setClass = this.setClass.bind(this);
    }

    setClass = ()=>{
       let classes = ['header'];

        if(this.props.headerType){
            classes.push('header-'+this.props.headerType);
        }

        return classNames(classes);
    };

    render(){
        const {
            style
        } = this.props;

        return(
            <div className={this.setClass()}
                 style={style}>
                <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                        <ul className="nav nav-tabs" data-tabs="tabs">
                            {this.props.children}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default CardTabsHeader