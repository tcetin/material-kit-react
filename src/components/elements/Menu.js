import React, { Component } from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import classNames from 'classnames';


class Menu extends Component{

    render(){
        let ulClasses = ['nav','navbar-nav'];

        if(this.props.right){
            ulClasses.push('navbar-right');
        }

        if(this.props.left){
            ulClasses.push('navbar-left');
        }


        return(
                    <div className="collapse navbar-collapse" id={this.props.id}>
                        <Router>
                            <ul className={classNames(ulClasses)}>
                                {this.props.children}
                            </ul>
                        </Router>
                    </div>

        );
    }
}


export default Menu;