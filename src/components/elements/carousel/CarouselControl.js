import React, { Component } from 'react';
import Icon from "../Icon";

class CarouselControls extends Component{
    static defaultProps={
        dataLength:0,
        controlsClick:()=>{}
    }

    constructor(props){
        super(props);
        this.state={
            leftCss:"left carousel-control",
            rightCss:"right carousel-control"
        }
    }

    _onclick=(call)=>{
        this.props.controlsClick(call);
    }

    render(){
        let {dataLength}=this.props;
        if(dataLength<2){
            return null;
        }
        return(
            <div>
                <a className={this.state.leftCss} onClick={this._onclick.bind(this,"prev")}>
                    <Icon iconName="keyboard_arrow_left"/>
                </a>
                <a className={this.state.rightCss} onClick={this._onclick.bind(this,"next")}>
                    <Icon iconName="keyboard_arrow_right"/>
                </a>
            </div>
        )
    }
}

export default CarouselControls