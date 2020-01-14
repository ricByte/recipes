import React, { Component } from 'react';
import './Pagination.css'

export default class Page extends Component<{ page: number|undefined, onFetch: Function, current: boolean  }> {

    render() {
        let { page, onFetch, current } = this.props;
        return (
            <div onClick={()=>onFetch({page})} className={`Page ${current && 'current'}`}>{page}</div>
    );
    }
}
