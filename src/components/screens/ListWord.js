import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Word } from '../shared/Word';
import { WordForm } from '../shared/WordForm';
import { WordFilter } from '../shared/WordFilter';
import * as actionCreators from '../../redux/actionCreators';

class ListWordComponent extends Component {
    componentDidMount() {
        this.props.getWords();
    }
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

export const ListWord = connect(mapStates, actionCreators)(ListWordComponent);
