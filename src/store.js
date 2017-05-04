import data from './data';

function dataFriendly(str) {
    // Turns strings like "All belts" into "allbelts". Useful for HTML values and string comparisons.
    return str ?
        str.trim().toLowerCase().replace(" ", "") :
        "";
}

function unique(arr, propName) {
    let uniques = [];

    arr.map(function (a) {
        return a[propName];
    }).forEach(function (a) {
        if (uniques.indexOf(a) === -1) {
            uniques.push(a);
        }
    });

    return uniques;
}

function sortOnProperty(a, b, propName) {
    const nameA = dataFriendly(a[propName]);
    const nameB = dataFriendly(b[propName]);
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}

function saveUserData(propertyName, value) {
    // Not really needed for simple types, but absolutely needed otherwise.
    localStorage[propertyName] = JSON.stringify(value);
}

function loadUserData(propertyName, fallbackValue) {
     // JSON.parse is needed even for simple types as otherwise null value become the string "null".
    let userData = localStorage[propertyName];
    return userData ? JSON.parse(userData) : fallbackValue;
}

let store = {
    state: {
        jdata: data,
        even: true,
        selectedTechniques: [],
        selectedTechniqueName: null,
        selectedBelt: "",
        selectedSort: "romaji",
        showTable: true,
        showCards: true,
        showTranslation: false
    },

    init() {
        store.state.selectedTechniques = loadUserData("selectedTechniques", store.state.selectedTechniques);
        store.state.selectedTechniqueName = loadUserData("selectedTechniqueName", store.state.selectedTechniqueName);
        store.state.selectedBelt = loadUserData("selectedBelt", store.state.selectedBelt);
        store.state.selectedSort = loadUserData("selectedSort", store.state.selectedSort);
    },

    belts() {
        // The belts from the data
        let belts = unique(store.state.jdata, "beltjudo")
        .filter(function (belt) {
            // Filter out techniques with no belt in judo (in the future I want to show the jujutsu techniques as well)
            return !!belt;
        })
        .sort()
        .map(function (belt) {
            return {
                value: dataFriendly(belt),
                label: belt
            };
        });

        // Add an "select all" option as the first option
        belts.unshift({
            value: "",
            label: "All belts"
        });
        return belts;
    },

    setSelectedBelt(newValue) {
        store.state.selectedBelt = newValue;
        saveUserData("selectedBelt", newValue);
    },

    setSelectedSort(newValue) {
        store.state.selectedSort = newValue;
        saveUserData("selectedSort", newValue);
    },

    setSelectedTechniques(newValues) {
        store.state.selectedTechniques = newValues;
        saveUserData("selectedTechniques", newValues);
    },

    setSelectedTechniqueName(newValue) {
        store.state.selectedTechniqueName = newValue;
        saveUserData("selectedTechniqueName", newValue);
    },

    techniqueNames() {
        let techniques = store.state.jdata.filter(function (technique) {
            // Removes techniques with no technique-type name
            return !!technique.technique;
        });
        return unique(techniques, "technique").sort();
    },

    techniques() {
        let techniques = store.state.jdata.filter(store.isValidTechnique.bind(this));

        // sort by some property
        return techniques.sort(store.techniqueSortOrder.bind(this));
    },

    toggleTranslation() {
        store.state.showTranslation = !store.state.showTranslation;
    },

    isValidTechnique(technique) {
        let validType = store.state.selectedTechniques.length === 0 ||
            store.state.selectedTechniques.indexOf(technique.technique) !== -1;

        let validBelt = store.state.selectedBelt === null ||
            store.state.selectedBelt === dataFriendly(technique.beltjudo);

        return validType && validBelt;
    },

    techniqueSortOrder(techniqueA, techniqueB) {
        let selectedSort = store.state.selectedSort;

        return sortOnProperty(techniqueA, techniqueB, selectedSort);
    }
};

store.init();

export default store;
