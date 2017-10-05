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
};
