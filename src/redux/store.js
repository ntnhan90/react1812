import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function wordsReducer(state = [], action) {
    if (action.type === 'SET_WORDS') return action.words;
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word._id !== action._id);
    }
    if (action.type === 'TOGGLE_WORD') {
        return state.map(word => {
            if (word._id !== action._id) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    if (action.type === 'ADD_WORD') return [action.word, ...state];
    return state;
}

function shouldShowFormReducer(state = false, action) {
    if (action.type === 'TOGGLE_FORM') return !state;
    return state;
}

function filterModeReducer(state = 'SHOW_ALL', action) {
    if (action.type === 'SET_FILTER_MODE') return action.filterMode;
    return state;
}

const reducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    filterMode: filterModeReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));
