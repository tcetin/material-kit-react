import React, { Component } from 'react';
import classNames from 'classnames';
import CarouselIndicators from "./CarouselIndicator";
import CarouselItem from "./CarouselItem";
import CarouselControls from "./CarouselControl";


class Carousel extends Component{

    static defaultProps={
        indicators:true,
        controls:true,
        defaultActiveIndex:0,
        wrap: true,
        children:[],
        className:"",
        onSelect:()=>{}
    };

    constructor(props) {
        super(props);
        this.state={
            activeIndex:this.props.defaultActiveIndex,
            className:classNames("carousel slide",this.props.className)
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.activeIndex!==this.state.activeIndex){
            let {direction,activeIndex}=this.state;
            this.props.onSelect(activeIndex,direction);
        }
    }

    _indClick= (index,direction)=>{
        this.setState({activeIndex:index,direction});
    }

    _controlsClick=(call)=>{
        if(call==="prev"){
            this._prev();
        }
        else{
            this._next();
        }
    }

    _next=()=>{
        let {activeIndex}=this.state;
        let {wrap}=this.props;
        let count=this.props.children.length;
        let index =activeIndex+1;
        if (index > count - 1) {
            if (!wrap) {
                return;
            }
            index = 0;
        }
        this.setState({activeIndex:index,direction:"next"});
    };
    _prev=()=>{
        let {activeIndex}=this.state;
        let {wrap}=this.props;
        let index =activeIndex-1;
        let count=this.props.children.length;
        if (index < 0) {
            if (!wrap) {
                return;
            }
            index = count - 1;
        }
        this.setState({activeIndex:index,direction:"prev"});
    };

    render(){
        let {children}=this.props;
        let {activeIndex,className}=this.state;
        return(
            <div className="card card-raised card-carousel">
                <div className={classNames(className)} data-ride="carousel">
                    {this.props.indicators ? <CarouselIndicators data={children} activeIndex={activeIndex}
                                                                 indClick={this._indClick}/> : null}
                    <CarouselItem data={children} activeIndex={activeIndex}/>
                    {this.props.controls ?
                        <CarouselControls dataLength={children.length} prev={this._prev} next={this._next}
                                          controlsClick={this._controlsClick}/> : null}
                </div>
            </div>
        );
    }
}


export default Carousel;