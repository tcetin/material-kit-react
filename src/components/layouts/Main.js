import React, { Component } from 'react';
import classNames from 'classnames';


class Main extends Component{
    render(){
        return(
            <div className={classNames('main','main-raised')}>{this.props.children}</div>
        );
    }
}


export default Main;