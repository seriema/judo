import { combineReducers } from 'redux';
import {
    SET_BELT,
    SET_SORT,
    SET_TECHNIQUE_NAME,
    TOGGLE_CATEGORY,
    TOGGLE_SHOW_ANSWER,
    TOGGLE_TABLE,
    TOGGLE_TRANSLATION,
} from './actions';
import { toggleElement } from '../helpers';

function show(state = {}, action) {
    switch (action.type) {
        case TOGGLE_SHOW_ANSWER:
            return {
                ...state,
                answer: !state.answer
            };
        case TOGGLE_TABLE:
            return {
                ...state,
                table: !state.table
            };
        case TOGGLE_TRANSLATION:
            return {
                ...state,
                translation: !state.translation
            };
        case TOGGLE_CATEGORY:
        case SET_BELT:
        case SET_TECHNIQUE_NAME:
            return {
                ...state,
                answer: false
            }
        default:
            return state;
    }
}

function selected(state = {}, action) {
    switch (action.type) {
        case SET_BELT:
            return {
                ...state,
                belt: action.belt
            };
        case SET_SORT:
            return {
                ...state,
                sort: action.filter
            };

        case SET_TECHNIQUE_NAME: {
            return {
                ...state,
                techniqueName: action.techniqueName
            };
        }
        case TOGGLE_CATEGORY: {
            return {
                ...state,
                categories: toggleElement(state.categories, action.category)
            };
        }
        default:
            return state;
    }
}

// Won't really be used but is needed to create the "techniques" branch of the store data.
function techniques(state = {}) {
    return state;
}

const judoApp = combineReducers({
    show,
    selected,
    techniques
});

export default judoApp;
