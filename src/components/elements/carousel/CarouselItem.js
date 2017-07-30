import React, { Component } from 'react';
import classNames from 'classnames';


class CarouselItem extends Component{

    static defaultProps={
        data:[],
        activeIndex:0,
        direction:null,
        css:"item"
    }

    render(){
        let {activeIndex,css,direction,data}=this.props;
        let row=data.map((item,index)=>{
            let position;
            if(index>activeIndex){
                position="right";
                direction="next";
            }
            else if(index<activeIndex){
                position="left";
                direction="prev";
            }
            let className=classNames(css,direction,position);

            if(index===activeIndex){
                className=classNames(css,"active");
            }
            return (
                <div key={index} className={className}>
                    {item}
                </div>
            );
        });

        return(
            <div className="carousel-inner">
                {row}
            </div>
        );
    }
}


export default CarouselItem