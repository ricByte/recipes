import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import { component as Search, selectors as searchSel, actions as searchActions } from './components/search';


const { search, deleteItem } = searchActions;

export class App extends Component<{ results: any, fetchStatus: any, search: Function, deleteItem: Function }> {
    render() {
        let { results, fetchStatus, search, deleteItem } = this.props;
        return (
            <div className="App">
                <div className="usersDiv">

                    <div className="main">
                        <Search results={ results } fetchStatus={ fetchStatus }
                                onDelete={deleteItem}
                                onFetch={ search }/>

                    </div>
                </div>
            </div>
        );
    }
}


const enhance = connect(
    state => ({
        results: searchSel.results(state),
        fetchStatus: searchSel.fetchStatus(state),
    }),
    {
        search,
        deleteItem
    },
);

export default enhance(App);
