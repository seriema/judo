import { filterTechniques, getRandomTechniqueName } from '../helpers';

/*
 * action types
 */

export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const TOGGLE_SHOW_ANSWER = 'TOGGLE_SHOW_ANSWER';
export const TOGGLE_TABLE = 'TOGGLE_TABLE';
export const TOGGLE_TRANSLATION = 'TOGGLE_TRANSLATION';
export const SET_BELT = 'SET_BELT';
export const SET_SORT = 'SET_SORT';
export const SET_TECHNIQUE_NAME = 'SET_TECHNIQUE_NAME';

/*
 * action creators
 */

export const toggleCategory = category => {
    return {
        type: TOGGLE_CATEGORY,
        category
    };
};

export const toggleShowAnswer = () => {
    return {
        type: TOGGLE_SHOW_ANSWER
    };
};

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

export const setBelt = belt => {
    return {
        type: SET_BELT,
        belt
    };
};

export const setSort = filter => {
    return {
        type: SET_SORT,
        filter
    };
};

// TODO: This is an odd type of action, and I'm not quite happy with it. It doesn't fit in with the other simple action creators, and doesn't have it's own action type that's serialized.
export const setRandomTechnique = () => (dispatch, getState) =>
    dispatch(setTechniqueName(getRandomTechniqueName(filterTechniques(getState()))));

export const setTechniqueName = (techniqueName) => {
    return {
        type: SET_TECHNIQUE_NAME,
        techniqueName
    };
};
