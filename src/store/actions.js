/*
 * action types
 */

export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY';
export const TOGGLE_SHOW_ANSWER = 'TOGGLE_SHOW_ANSWER';
export const TOGGLE_TABLE = 'TOGGLE_TABLE';
export const TOGGLE_TRANSLATION = 'TOGGLE_TRANSLATION';
export const SET_BELT = 'SET_BELT';
export const SET_NEXT_TECHNIQUE = 'SET_NEXT_TECHNIQUE';
export const SET_SORT = 'SET_SORT';
export const SET_TECHNIQUE_NAME = 'SET_TECHNIQUE_NAME';

export const SORT_ENUM_RANDOM = 'SORT_ENUM_RANDOM';

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
export const setSortToRandom = () => setSort(SORT_ENUM_RANDOM);

export const setTechniqueName = (techniqueName) => {
    return {
        type: SET_TECHNIQUE_NAME,
        techniqueName
    };
};

export const setNextTechnique = () => {
    return {
        type: SET_NEXT_TECHNIQUE,
        offset: 1
    }
};
