import React, { Component } from 'react';
import { Simulate } from 'react-dom/test-utils';

export default class Page extends Component<{ page: number|undefined }> {

    render() {
        let { page } = this.props;
        return (
            <div>{page}</div>
    );
    }
}
