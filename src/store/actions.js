/*
 * action types
 */

export const TOGGLE_TABLE = 'TOGGLE_TABLE';
export const TOGGLE_TRANSLATION = 'TOGGLE_TRANSLATION';
export const SET_SORT = 'SET_SORT';

/*
 * action creators
 */

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
