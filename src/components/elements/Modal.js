import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

let $ = window.$;

class Modal extends Component{

    static propTypes = {
        title: PropTypes.string.isRequired,
        size: PropTypes.string
    };

    constructor(props){
        super(props);
        this.setModalClass = this.setModalClass.bind(this);
    }

    setModalClass = ()=>{
        let classes = ['modal-dialog'];
        if(this.props.size){
            classes.push('modal-'+this.props.size);
        }

        if(this.props.className){
            classes.push(this.props.className);
        }

        return classNames(classes);
    };

    render() {

        return (
            <div>
                <button className="btn btn-primary" onClick={()=> $(this.refs.modal).appendTo("body").modal('show')}>
                    Launch demo modal
                </button>
                <div className="modal fade" ref="modal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div className={this.setModalClass()}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                                    <i className="material-icons">clear</i>
                                </button>
                                <h4 className="modal-title">
                                    {this.props.title}
                                </h4>
                            </div>
                            <div className="modal-body">
                                {this.props.children}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default btn-simple">Nice Button</button>
                                <button type="button" className="btn btn-danger btn-simple" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Modal;