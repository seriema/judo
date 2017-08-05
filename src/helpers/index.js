// Turns strings like "All belts" into "allbelts". Useful for HTML values and string comparisons.
// Usage: dataFriendly('All belts'), or belts.map(dataFriendly)
export const dataFriendly = string => {
    return !string ? '' : string.trim().toLowerCase().replace(' ', '');
};

// Checks if a property on an item is truthy.
// Usage: myArray.filter(withProperty('someProperty'))
export const withProperty = propertyName => item => !!item[propertyName];

// Adds the element if it's missing, or removes if it exists.
// Usage: toggleElement(categories, 'Ne waza')
export const toggleElement = (array, element) => {
    const categoryIndex = array.indexOf(element);
    let newArray = [...array];

    if (categoryIndex === -1) {
        newArray.push(element);
    } else {
        newArray.splice(categoryIndex, 1);
    }

    return newArray;
};

// Returns the property values from an array, without duplicates.
// Usage: unique(allTechniques, 'category')
export const unique = (array, propertyName) => {
    let uniques = [];

    array.map(a => {
        return a[propertyName];
    }).forEach(a => {
        if (uniques.indexOf(a) === -1) {
            uniques.push(a);
        }
    });

    return uniques;
}

// Given the store it will return all the valid techniques given the selected filters.
// Usage: filterTechniques(store.getState())
export const filterTechniques = state => {
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

    return state.techniques
        .filter(withProperty('youtube'))
        .filter(propertyEqualsIfExists('beltjudo', state.selected.belt))
        .filter(propertyContains('technique', state.selected.categories))
        .sort(onProperty(state.selected.sort));
};
