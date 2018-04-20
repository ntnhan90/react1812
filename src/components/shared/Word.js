import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WordComponent extends Component {
    getButton() {
        if (this.props.wordInfo.isMemorized) {
            return <button className="btn btn-warning">Forgot</button>;
        }
        return <button className="btn btn-success">Memorized</button>;
    }

    get shouldShowWord() {
        const { filterMode, wordInfo } = this.props;
        if (filterMode === 'SHOW_ALL') return true;
        if (filterMode === 'SHOW_MEMORIZED') return wordInfo.isMemorized;
        return !wordInfo.isMemorized;
    }

    render() {
        if (!this.shouldShowWord) return null;
        const { en, vn, isMemorized } = this.props.wordInfo;
        const engClassName = isMemorized ? 'text-success' : 'text-danger';
        return (
            <div>
                <h3 className={engClassName}>{en}</h3>
                <p>{vn}</p>
                <button
                    className="btn btn-danger"
                >
                    Remove
                </button>
                { this.getButton() }
            </div>
        );
    }
}
const mapStates = state => ({ filterMode: state.filterMode });

export const Word = connect(mapStates)(WordComponent);
