import { combineReducers } from 'redux';
import {
    SET_BELT,
    SET_SORT,
    SET_RANDOM_TECHNIQUE,
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
        case SET_RANDOM_TECHNIQUE:
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
                sort: action.filter,
                techniques: state.techniques.sort((techA, techB) => {
                    const a = techA[action.filter] ? techA[action.filter].toLowerCase() : '';
                    const b = techB[action.filter] ? techB[action.filter].toLowerCase() : '';

                    if (a < b)
                        return -1;
                    if (a > b)
                        return 1;
                    else
                        return 0;
                })
            };

        case SET_RANDOM_TECHNIQUE: {
            const techniquesWithVideo = techniques => {
                return techniques.filter(function (tech) {
                    return !!tech.youtube;
                });
            };

            const filteredTechniques = techniquesWithVideo(state.techniques);
            let techniqueName = null;

            if (filteredTechniques.length !== 0) {
                const maxId = filteredTechniques.length;
                const randomId = Math.floor(action.randomNumber * maxId);
                const randomTechnique = filteredTechniques[randomId];

                techniqueName = randomTechnique.romaji;
            }

            return {
                ...state,
                techniqueName
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

export default judoApp
