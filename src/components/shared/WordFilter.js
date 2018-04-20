import React, { Component } from 'react';

export class WordFilter extends Component {
    render() {
        return (
            <select
                className="form-control" style={{ width: '200px', marginBottom: '10px' }}
            >
                <option value="SHOW_ALL">SHOW ALL</option>
                <option value="SHOW_FORGOT">SHOW FORGOT</option>
                <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
            </select>
        );
    }
}
