import {
    SET_BELT,
    SET_NEXT_TECHNIQUE,
    SET_SORT,
    SET_TECHNIQUE_NAME,
    TOGGLE_CATEGORY,
    TOGGLE_SHOW_ANSWER,
    TOGGLE_TABLE,
    TOGGLE_TRANSLATION,
    SORT_ENUM_RANDOM
} from './actions';
import { toggleElement, dataFriendly, withProperty } from '../helpers';

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
                answer: false, // Also hide the answer. This makes the "hint" more obvious for the user if they click the "show hint" button over and over.
                translation: !state.translation
            };
        case TOGGLE_CATEGORY:
        case SET_BELT:
        case SET_TECHNIQUE_NAME:
        case SET_NEXT_TECHNIQUE:
        case SET_SORT:
            return {
                ...state,
                answer: false
            };

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

function techniques(techniques = {}, selected, action) {
    const filterTechniques = (techniques, selected) => {
        const onProperty = (propertyName) => (left, right) => {
            const a = left[propertyName] ? left[propertyName].toLowerCase() : '';
            const b = right[propertyName] ? right[propertyName].toLowerCase() : '';

            if (a < b)
                return -1;
            if (a > b)
                return 1;
            else
                return 0;
        };

        const propertyEquals = (propertyName, target) => item => dataFriendly(item[propertyName]) === dataFriendly(target);
        const propertyEqualsIfExists = (propertyName, target) => target ? propertyEquals(propertyName, target) : item=>item;

        function contains(targets, item) {
            const friendlyTargets = targets.map(dataFriendly);
            const friendlyItem = dataFriendly(item);

            return friendlyTargets.indexOf(friendlyItem) > -1;
        }
        const propertyContains = (propertyName, targets) => item => contains(targets, item[propertyName]);

        let filtered = [...techniques.allItems]
            .filter(withProperty('youtube'))
            .filter(propertyEqualsIfExists('beltjudo', selected.belt))
            .filter(propertyContains('category', selected.categories));


        if (selected.sort === SORT_ENUM_RANDOM) {
            let randomized = [];
            while (filtered.length > 0) {
                const randomId = Math.floor(Math.random() * filtered.length);
                let randomItem = filtered.splice(randomId, 1)[0];
                randomized.push(randomItem);
            }

            return randomized;
        } else {
            return filtered.sort(onProperty(selected.sort));
        }
    };

    let newTechniques = {
        ...techniques
    };

    // Set initial filtering
    if (!newTechniques.filteredItems) {
        newTechniques = {
            ...newTechniques,
            filteredItems: filterTechniques(techniques, selected)
        };
    }
    // Set initial choice
    if (!newTechniques.currentIndex) {
        newTechniques = {
            ...newTechniques,
            currentIndex: 0,
            currentName: newTechniques.filteredItems.length ? newTechniques.filteredItems[0].romaji : null
        };
    }

    switch (action.type) {
        case TOGGLE_CATEGORY:
        case SET_BELT:
        case SET_SORT:
            const filteredItems = filterTechniques(techniques, selected);
            return {
                ...newTechniques,
                filteredItems,
                currentIndex: 0,
                currentName: filteredItems.length ? filteredItems[0].romaji : null
            };

        case SET_TECHNIQUE_NAME:
            return {
                ...newTechniques,
                currentIndex: newTechniques.filteredItems.findIndex(technique => {
                    return technique.romaji === action.techniqueName;
                }),
                currentName: action.techniqueName
            };

        case SET_NEXT_TECHNIQUE:
            let nextIndex = newTechniques.currentIndex + action.offset;
            if (nextIndex >= newTechniques.filteredItems.length) {
                nextIndex = 0;
            }
            return {
                ...newTechniques,
                currentIndex: nextIndex,
                currentName: newTechniques.filteredItems[nextIndex].romaji // This is pretty useful when debugging redux state changes
            };

        default:
            return newTechniques;
    }
}

const judoApp = (state = {}, action) => {
    const updatedSelected = selected(state.selected, action);
    return {
        show: show(state.show, action),
        selected: updatedSelected,
        techniques: techniques(state.techniques, updatedSelected, action)
    };
};

export default judoApp;
