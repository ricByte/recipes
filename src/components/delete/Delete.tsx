import React, { Component } from 'react';
import { deleteItem } from '../search/ducks/actions';

export default class Delete extends Component<{ id: number, deleteItem: Function }> {

    render() {
        let { id } = this.props;
        return (
            <div onClick={()=>deleteItem(id)}>
                Delete recipes
            </div>
        );
    }
}
