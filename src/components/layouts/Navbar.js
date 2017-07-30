import React, { Component } from 'react';
import classNames from 'classnames';



class Navbar extends Component{
    render(){
        let classes = ['navbar'];

        if(this.props.default){
            classes.push('navbar-default');
        }
        if(this.props.transparent){
            classes.push('navbar-transparent');
        }
        if(this.props.fixedTop){
            classes.push('navbar-fixed-top');
        }
        if(this.props.colorOnScroll){
            classes.push('navbar-color-on-scroll');
        }
        if(this.props.info){
            classes.push('navbar-info');
        }
        if(this.props.primary){
            classes.push('navbar-primary');
        }
        if(this.props.success){
            classes.push('navbar-success');
        }
        if(this.props.warning){
            classes.push('navbar-warning');
        }
        if(this.props.danger){
            classes.push('navbar-danger');
        }
        if(this.props.transparent){
            classes.push('navbar-transparent');
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return (
            <nav className={classNames(classes)}>
                {this.props.children}
            </nav>
        );
    }
}

export default Navbar;