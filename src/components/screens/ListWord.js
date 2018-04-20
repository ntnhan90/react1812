import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Word } from '../shared/Word';
import { WordForm } from '../shared/WordForm';
import { WordFilter } from '../shared/WordFilter';

class ListWordComponent extends Component {
    render() {
        return (
            <div>
                <WordFilter />
                <WordForm />
                { this.props.words.map(wordInfo => <Word key={wordInfo._id} wordInfo={wordInfo} />) }
            </div>
        );
    }
}

const mapStates = state => ({ words: state.words });

export const ListWord = connect(mapStates)(ListWordComponent);
