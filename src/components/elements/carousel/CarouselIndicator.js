import React, { Component } from 'react';

class CarouselIndicators extends Component{
    static defaultProps={
        data:[],
        activeIndex:0,
        indClick:()=>{}
    }

    constructor(props){
        super(props);
        this.state={
            css:"carousel-indicators"
        }
    }

    _onClick= (index)=>{
        let {activeIndex}=this.props;
        let direction="";
        if(activeIndex<index){
            direction="next";
        }
        else{
            direction = "prev";
        }
        this.props.indClick(index,direction);
    }

    render(){
        let {data,activeIndex}=this.props;
        let row=data.map((item,index)=>{
            let className;
            if(index===activeIndex){
                className="active";
            }
            else{
                className="";
            }
            return (
                <li key={index} onClick={this._onClick.bind(this,index)} className={className}></li>
            );
        });
        return(
            <ol className={this.state.css}>
                {row}
            </ol>
        )
    }
}

export default CarouselIndicators