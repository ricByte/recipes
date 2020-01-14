import React, { Component } from 'react';
import './Search.css'
import Pagination from '../pagination/Pagination';
import Delete from '../delete/Delete';

export default class Search extends Component<{ results: any, fetchStatus: any, onFetch: Function, onDelete: Function }> {
    componentDidMount() {
        this.props.onFetch('');
    }
    render() {
        let { results, fetchStatus, onFetch, onDelete } = this.props;
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
                                    <div className="Recipe-Description">Description: { item.description }</div>
                                    <Delete id={item.id} deleteItem={onDelete}/>
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
