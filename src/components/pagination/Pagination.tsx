import React, { Component } from 'react';
import Page from './Page';

type PaginationParameter = { currentPage: number, totalPages: number , onFetch: Function };

export default class Pagination extends Component<PaginationParameter> {

    createPagination = (props: PaginationParameter) => {
        let element = [];

        for (let i = 1; i <= props.totalPages; i++) {
            element.push(<Page key={`page_${i}`} current={props.currentPage === i} onFetch={props.onFetch} page={i} />)
        }
        return element
    };

    render() {
        return (
            <div className={'Pagination'}>
                {this.createPagination(this.props)}
            </div>
        );
    }
}
