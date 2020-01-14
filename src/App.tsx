import { connect } from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import { component as Search, selectors as searchSel, actions as searchActions } from './components/search';


const { search } = searchActions;

export class App extends Component<{ results: any, fetchStatus: any, search: any }> {
    render() {
        let { results, fetchStatus, search } = this.props;
        return (
            <div className="App">
                <div className="usersDiv">

                    <div className="main">
                        <Search results={ results } fetchStatus={ fetchStatus }
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
    },
);

export default enhance(App);
