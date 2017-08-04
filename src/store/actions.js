/*
 * action types
 */

export const TOGGLE_SHOW_ANSWER = 'TOGGLE_SHOW_ANSWER';
export const TOGGLE_TABLE = 'TOGGLE_TABLE';
export const TOGGLE_TRANSLATION = 'TOGGLE_TRANSLATION';
export const SET_SORT = 'SET_SORT';
export const SET_RANDOM_TECHNIQUE = 'SET_RANDOM_TECHNIQUE';

/*
 * action creators
 */

 export const toggleShowAnswer = () => {
    return {
        type: TOGGLE_SHOW_ANSWER
    };
}

export const toggleTable = () => {
    return {
        type: TOGGLE_TABLE
    };
};

export const toggleTranslation = () => {
    return {
        type: TOGGLE_TRANSLATION
    };
};

export const setSort = filter => {
    return {
        type: SET_SORT,
        filter
    };
};

export const setRandomTechnique = () => {
    return {
        type: SET_RANDOM_TECHNIQUE,
        randomNumber: Math.random()
    };
};
