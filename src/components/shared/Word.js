import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

export class WordComponent extends Component {
    getButton() {
        const { wordInfo, toggleWord } = this.props;
        const toggleWordFn = () => toggleWord(wordInfo._id);
        if (wordInfo.isMemorized) {
            return (
                <button className="btn btn-warning" onClick={toggleWordFn}>
                    Forgot
                </button>
            );
        }
        return (
            <button className="btn btn-success" onClick={toggleWordFn}>
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
        const { removeWord } = this.props;
        const engClassName = isMemorized ? 'text-success' : 'text-danger';
        return (
            <div>
                <h3 className={engClassName}>{en}</h3>
                <p>{vn}</p>
                <button
                    className="btn btn-danger"
                    onClick={() => removeWord(_id)}
                >
                    Remove
                </button>
                { this.getButton() }
            </div>
        );
    }
}
const mapStates = state => ({ filterMode: state.filterMode });

export const Word = connect(mapStates, actionCreators)(WordComponent);
