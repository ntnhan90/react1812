import React, { Component } from 'react';

export class Word extends Component {
    render() {
        const { en, vn } = this.props.wordInfo;
        return (
            <div>
                <h3>{en}</h3>
                <p>{vn}</p>
            </div>
        );
    }
}
