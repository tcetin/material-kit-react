import React, { Component } from 'react';


class MenuToggle extends Component{
    render(){
        return(
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target={'#'+this.props.toggleId}>
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                {this.props.children}
            </div>
        );
    }
}


export default MenuToggle
