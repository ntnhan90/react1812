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
            ]
        };
        this.genWord = this.genWord.bind(this);
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
                { this.state.words.map(this.genWord) }
            </div>
        );
    }
}
