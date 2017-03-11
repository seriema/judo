function dataFriendly(str) {
    // Turns strings like "All belts" into "allbelts". Useful for HTML values and string comparisons.
    return str ?
        str.trim().toLowerCase().replace(" ", "") :
        "";
}

function unique(arr, propName) {
    var uniques = [];

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
    var nameA = dataFriendly(a[propName]);
    var nameB = dataFriendly(b[propName]);
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
    var userData = localStorage[propertyName];
    return userData ? JSON.parse(userData) : fallbackValue;
}

window.store = {
    state: {
        jdata: window.jdata,
        even: true,
        selectedTechniques: [],
        selectedTechniqueName: null,
        selectedBelt: null,
        selectedSort: null,
        showTable: true,
        showTranslation: false
    },

    init() {
        this.state.selectedTechniques = loadUserData("selectedTechniques", []);
        this.state.selectedTechniqueName = loadUserData("selectedTechniqueName", null);
        this.state.selectedBelt = loadUserData("selectedBelt", null);
        this.state.selectedSort = loadUserData("selectedSort", null);
    },

    belts() {
        // The belts from the data
        var belts = unique(this.state.jdata, "belt")
        .sort()
        .map(function (belt) {
            return {
                value: dataFriendly(belt),
                label: belt
            };
        });

        // Add an "select all" option as the first option
        belts.unshift({
            value: null,
            label: "All belts"
        });
        return belts;
    },

    setSelectedBelt(newValue) {
        this.state.selectedBelt = newValue;
        saveUserData("selectedBelt", newValue);
    },

    setSelectedSort(newValue) {
        this.state.selectedSort = newValue;
        saveUserData("selectedSort", newValue);
    },

    setSelectedTechniques(newValues) {
        this.state.selectedTechniques = newValues;
        saveUserData("selectedTechniques", newValues);
    },

    setSelectedTechniqueName(newValue) {
        this.state.selectedTechniqueName = newValue;
        saveUserData("selectedTechniqueName", newValue);
    },

    techniqueNames() {
        return unique(this.state.jdata, "technique").sort();
    },

    techniques() {
        var techniques = this.state.jdata.filter(this.isValidTechnique.bind(this));

        // sort by some property
        return techniques.sort(this.techniqueSortOrder.bind(this));
    },

    toggleTranslation() {
        this.state.showTranslation = !this.state.showTranslation;
    },

    isValidTechnique(technique) {
        var validType = this.state.selectedTechniques.length === 0 ||
            this.state.selectedTechniques.indexOf(technique.technique) !== -1;

        var validBelt = this.state.selectedBelt === null ||
            this.state.selectedBelt === dataFriendly(technique.belt);

        return validType && validBelt;
    },

    techniqueSortOrder(techniqueA, techniqueB) {
        var selectedSort = this.state.selectedSort === null ? "romaji" : this.state.selectedSort;

        return sortOnProperty(techniqueA, techniqueB, selectedSort);
    }
};

window.store.init();
