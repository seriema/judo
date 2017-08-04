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
