import React, { Component } from 'react';

export default class Search extends Component<{ results: any, fetchStatus: any, onFetch: any }> {
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
                    console.log(ev);
                    return onFetch(ev.target.value);
                } }
                       placeholder="enter keywords"/>
                <div>
                    {
                        results && results.recipes && results.recipes.map((item: any) => {
                            return (
                                <div key={ item.title }>
                                    <span>Title: { item.title }</span><br/>
                                    <div>Description: { item.description }</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
