import { combineReducers } from 'redux'
import {
    TOGGLE_TABLE,
    TOGGLE_TRANSLATION,
    SET_SORT,
    SET_RANDOM_TECHNIQUE
} from './actions'

function show(state = {}, action) {
    switch (action.type) {
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
        default:
            return state;
    }
}

function selected(state = {}, action) {
    switch (action.type) {
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

        case SET_RANDOM_TECHNIQUE:
            const techniquesWithVideo = techniques => {
                return techniques.filter(function (tech) {
                    return !!tech.youtube;
                });
            };

            const filteredTechniques = techniquesWithVideo(state.techniques);
            let techniqueName = null;

            if (filteredTechniques.length !== 0) {
                const maxId = filteredTechniques.length;
                const randomId = Math.floor(Math.random() * maxId);
                const randomTechnique = filteredTechniques[randomId];

                techniqueName = randomTechnique.romaji; // also set side A on the card
            }

            return {
                ...state,
                techniqueName
            };
        default:
            return state;
    }
}

const judoApp = combineReducers({
    show,
    selected
});

export default judoApp
