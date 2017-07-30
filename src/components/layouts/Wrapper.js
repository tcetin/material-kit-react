import React, { Component } from 'react';

class Wrapper extends Component{
    render(){
        return(
            <div className="wrapper">{this.props.children}</div>
        );
    }
}


export default Wrapper;