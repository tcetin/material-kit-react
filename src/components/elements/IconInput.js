import React, { Component } from 'react';
import Icon from "./Icon";

class IconInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue : ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;

        this.setState({
            inputValue: value
        });
    }

    let
    setIcon = ()=>{
        if(this.props.faIconName){
            let faSize =this.props.faIconSize ? this.props.faIconSize : '';
            return <i className={'fa fa-'+this.props.faIconName+' '+faSize}></i>
        }else if(this.props.materialIconName){
            return <Icon iconName={this.props.materialIconName}/>;
        }

        return '';
    };

    render(){

        return (
            <div className="input-group">
				<span className="input-group-addon">
                    {this.setIcon()}
				</span>
                <input
                    type={this.props.inputType}
                    value={this.state.inputValue}
                    placeholder={this.props.hint}
                    className="form-control"
                    onChange={this.handleInputChange}/>
            </div>
        );
    }


}

export default IconInput;