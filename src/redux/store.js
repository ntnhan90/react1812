import { combineReducers, createStore } from 'redux';

const defaultWords = [
    { _id: 'a', en: 'One111', vn: 'Mot', isMemorized: true },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
];

function wordsReducer(state = defaultWords, action) {
    return state;
}

function shouldShowFormReducer(state = false, action) {
    return state;
}

function filterModeReducer(state = 'SHOW_ALL', action) {
    return state;
}

const reducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
});

export const store = createStore(reducer);
