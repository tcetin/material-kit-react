import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';

class Paginate extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: [],
            offset: 0
        }
    }

    handlePageClick = (data) => {
        console.log(data.selected);
    };

    render() {
        return (
                <ReactPaginate previousLabel={this.props.previousLabel}
                               nextLabel={this.props.nextLabel}
                               breakLabel={this.props.breakLabel}
                               breakClassName={this.props.breakClassName}
                               pageCount={this.state.pageCount}
                               marginPagesDisplayed={this.props.marginPagesDisplayed}
                               pageRangeDisplayed={this.props.pageRangeDisplayed}
                               onPageChange={this.handlePageClick}
                               containerClassName={this.props.containerClassName}
                               subContainerClassName={this.props.subContainerClassName}
                               activeClassName={"active"} />
        );
    }
}

export default Paginate