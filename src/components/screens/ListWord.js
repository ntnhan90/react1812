import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Word } from '../shared/Word';
import { WordForm } from '../shared/WordForm';
import { WordFilter } from '../shared/WordFilter';
import * as actionCreators from '../../redux/actionCreators';

import axios from 'axios';

class ListWordComponent extends Component {
    componentDidMount() {
        axios.get('https://word1203.herokuapp.com/word')
        .then(response => response.data)
        .then(res => this.props.setWords(res.words));
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
