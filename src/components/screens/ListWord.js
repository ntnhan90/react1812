import React, { Component } from 'react';
import { Word } from '../shared/Word';

export class ListWord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: [
                { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
                { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
                { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
            ],
            txtEn: '',
            txtVn: ''
        };
        this.genWord = this.genWord.bind(this);
        this.addWord = this.addWord.bind(this);
    }

    removeWord(_id) {
        this.setState(prevState => ({
            words: prevState.words.filter(w => w._id !== _id)
        }));
    }

    toggleWord(_id) {
        this.setState(prevState => ({
            words: prevState.words.map(w => {
                if (w._id !== _id) return w;
                return { ...w, isMemorized: !w.isMemorized };
            })
        }));
    }

    addWord() {
        const word = {
            _id: Math.random() + '',
            en: this.state.txtEn,
            vn: this.state.txtVn,
            isMemorized: true
        };
        this.setState(prevState => ({
            words: prevState.words.concat(word),
            txtEn: '',
            txtVn: ''
        }));
    }

    genWord(word) {
        const engClassName = word.isMemorized ? 'text-success' : 'text-danger';
        return (
            <div key={word._id}>
                <h3 className={engClassName}>{word.en}</h3>
                <p>{word.vn}</p>
                <button
                    className="btn btn-danger"
                    onClick={() => this.removeWord(word._id)}
                >
                    Remove
                </button>
                <button
                    className="btn btn-success"
                    onClick={() => this.toggleWord(word._id)}
                >
                    Toggle
                </button>
            </div>
        );
    }

    render() {
        return (
            <div>
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
                </div>
                { this.state.words.map(this.genWord) }
            </div>
        );
    }
}
