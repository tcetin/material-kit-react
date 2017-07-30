import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Title extends Component{

    static propTypes = {
        style:PropTypes.object,
        size:PropTypes.oneOfType([PropTypes.number]).isRequired
    };

    static defaultProps = {
        style:{}
    };

    constructor(props){
        super(props);
        this.renderTitle = this.renderTitle.bind(this);
        this.setClass = this.setClass.bind(this);
    }

        setClass = ()=>{
            let classes = ['title'];
            if(this.props.className){
                classes.push(this.props.className);
            }
            return classNames(classes);
        };


        renderTitle = ()=>{
            if(this.props.size===1){
                return  (<div className={this.setClass()} style={this.props.style}>
                            <h1>{this.props.children}</h1>
                        </div>);
            }else if(this.props.size===2){
                return  (<div className={this.setClass()} style={this.props.style}>
                    <h2>{this.props.children}</h2>
                </div>);
            }else if(this.props.size===3){
                return  (<div className={this.setClass()} style={this.props.style}>
                    <h3>{this.props.children}</h3>
                </div>);
            }else if(this.props.size===4){
                return  (<div className={this.setClass()} style={this.props.style}>
                    <h4>{this.props.children}</h4>
                </div>);
            }else if(this.props.size===5){
                return  (<div className={this.setClass()} style={this.props.style}>
                    <h5>{this.props.children}</h5>
                </div>);
            }else if(this.props.size===6){
                return  (<div className={this.setClass()} style={this.props.style}>
                    <h6>{this.props.children}</h6>
                </div>);
            }
        };


    render(){
        return(
            this.renderTitle()
        );
    }
}


export default Title