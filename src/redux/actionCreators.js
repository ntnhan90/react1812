import axios from 'axios';

export function toggleForm() {
    return { type: 'TOGGLE_FORM' };
}

export function setFilterMode(filterMode) {
    return { type: 'SET_FILTER_MODE', filterMode };
}

const URL = 'https://word1203.herokuapp.com'

export function getWords() {
    return dispatch => {
        axios.get(URL + '/word')
        .then(response => response.data)
        .then(res => dispatch({ type: 'SET_WORDS', words: res.words }));
    }
}

export function asyncAddWord(en, vn) {
    return dispatch => {
        dispatch({ type: 'SHOW_LOADING' });
        axios.post(URL + '/word', { en, vn })
        .then(response => response.data)
        .then(res => {
            if (!res.success) throw new Error('Cannot add.');
            dispatch({ type: 'ADD_WORD', word: res.word });
        })
        .catch(error => {
            dispatch({ type: 'HIDE_LOADING' });
            alert('Trung tu vung.');
        });
    }
}

export function asyncRemoveWord(_id) {
    return dispatch => {
        axios.delete(URL + '/word/' + _id)
        .then(response => response.data)
        .then(res => dispatch({ type: 'REMOVE_WORD', _id: res.word._id }));
    }
}

export function asyncToggleWord(_id, isMemorized) {
    return dispatch => {
        axios.put(URL + '/word/' + _id, { isMemorized })
        .then(response => response.data)
        .then(res => dispatch({ type: 'TOGGLE_WORD', _id: res.word._id }));
    }
}
