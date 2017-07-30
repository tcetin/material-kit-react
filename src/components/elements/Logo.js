import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';

class Logo extends Component{
    render(){
        return(
            <Router>

                <div className="logo-container">
                    <div className="logo">
                        <img src={this.props.logoImgSrc} alt={this.props.logoImgAlt} rel="tooltip"
                             title={this.props.logoImgTitle}
                             data-placement="bottom"
                             data-html="true"/>
                    </div>
                    <div className="brand">
                        {this.props.logoSlogan}
                    </div>

                </div>
            </Router>
        );
    }
}


export default Logo