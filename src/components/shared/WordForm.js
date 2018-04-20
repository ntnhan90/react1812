import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

class WordFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { txtVn: '', txtEn: '' };
        this.addWord = this.addWord.bind(this);
    }

    addWord() {
        const { txtEn, txtVn } = this.state;
        const word = {
            _id: Math.random() + '',
            en: txtEn,
            vn: txtVn,
            isMemorized: false
        };
        this.props.addWord(word);
        this.setState({ txtEn: '', txtVn: '' });
    }

    render() {
        const { shouldShowForm, toggleForm } = this.props;
        if (!shouldShowForm) return (
            <button
                className="btn btn-success"
                onClick={toggleForm}
            >
                Create new word
            </button>
        );
        return (
            <div className="form-group" style={{ width: '200px' }}>
                <input
                    placeholder="English"
                    className="form-control"
                    value={this.state.txtEn}
                    onChange={evt => this.setState({ txtEn: evt.target.value })}
                />
                <br />
                <input
                    placeholder="Vietnamese"
                    className="form-control"
                    value={this.state.txtVn}
                    onChange={evt => this.setState({ txtVn: evt.target.value })}
                />
                <br />
                <button
                    className="btn btn-success"
                    onClick={this.addWord}
                >
                    Add word
                </button>
                <button
                    className="btn btn-warning"
                    onClick={toggleForm}
                >
                    Cancel
                </button>
            </div>
        );
    }
}

const mapStates = state => ({ shouldShowForm: state.shouldShowForm });

export const WordForm = connect(mapStates, actionCreators)(WordFormComponent);
