import React, { Component } from 'react';
import './Search.css'
import Pagination from '../pagination/Pagination';

export default class Search extends Component<{ results: any, fetchStatus: any, onFetch: Function }> {
    componentDidMount() {
        this.props.onFetch('');
    }
    render() {
        let { results, fetchStatus, onFetch } = this.props;
        return (
            <div>
                <h3>Search recipes</h3>
                <div>Status: { fetchStatus }</div>
                <input autoFocus={true} onChange={ (ev)=> {
                    return onFetch({value: ev.target.value});
                } }
                       placeholder="enter keywords"/>
                <div className="Recipe-Container">
                    {
                        results && results.recipes && results.recipes.map((item: any) => {
                            return (
                                <div key={ item.title } className="Recipe">
                                    <span>Title: { item.title }</span><br/>
                                    <div>Description: { item.description }</div>
                                </div>
                            );
                        })
                    }
                    {
                        results && results.totalPages && <Pagination currentPage={results.currentPage} totalPages={results.totalPages} onFetch={onFetch}/>
                    }

                </div>
            </div>
        );
    }
}
