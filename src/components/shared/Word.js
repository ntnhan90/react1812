import React, { Component } from 'react';
import { connect } from 'react-redux';

export class WordComponent extends Component {
    getButton() {
        const { wordInfo, dispatch } = this.props;
        const toggleWord = () => dispatch({ type: 'TOGGLE_WORD', _id: wordInfo._id });
        if (wordInfo.isMemorized) {
            return (
                <button className="btn btn-warning" onClick={toggleWord}>
                    Forgot
                </button>
            );
        }
        return (
            <button className="btn btn-success" onClick={toggleWord}>
                Memorized
            </button>
        );
    }

    get shouldShowWord() {
        const { filterMode, wordInfo } = this.props;
        if (filterMode === 'SHOW_ALL') return true;
        if (filterMode === 'SHOW_MEMORIZED') return wordInfo.isMemorized;
        return !wordInfo.isMemorized;
    }

    render() {
        if (!this.shouldShowWord) return null;
        const { en, vn, isMemorized, _id } = this.props.wordInfo;
        const { dispatch } = this.props;
        const engClassName = isMemorized ? 'text-success' : 'text-danger';
        return (
            <div>
                <h3 className={engClassName}>{en}</h3>
                <p>{vn}</p>
                <button
                    className="btn btn-danger"
                    onClick={() => dispatch({ type: 'REMOVE_WORD', _id })}
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
