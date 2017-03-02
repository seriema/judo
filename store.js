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

function sortCalc(a, b, propName) {
    var nameA = a[propName].toUpperCase(); // ignore upper and lowercase
    var nameB = b[propName].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    // names must be equal
    return 0;
}

window.store = {
    state: {
        jdata: window.jdata,
        even: true,
        selectedTechniques: [],
        selectedTechnique: null,
        selectedBelt: null,
        selectedSort: null,
        showTable: true
    },

    beltNames() {
        return unique(this.state.jdata, "belt").sort(); // TODO: Sort on belt rank instead
    },

    pickCard() {
        var filteredTechniques = this.techniques().filter(function (tech) {
            return !!tech.youtube;
        });

        var maxId = filteredTechniques.length;
        var randomId = Math.floor(Math.random() * maxId);

        this.state.selectedTechnique = filteredTechniques[randomId];
    },

    techniqueNames() {
        return unique(this.state.jdata, "technique").sort();
    },

    techniques() {
        var techniques = this.state.jdata;

        if (this.state.selectedTechniques.length > 0) {
            techniques = techniques.filter(function (j) {
                return this.state.selectedTechniques.indexOf(j.technique) !== -1;
            }.bind(this));
        }

        if (this.state.selectedBelt !== null) {
            techniques = techniques.filter(function (t) {
                return t.belt === this.state.selectedBelt;
            }.bind(this));
        }

        // sort by some property
        return techniques.sort(function (a, b) {
            return sortCalc(a, b, this.state.selectedSort === null ? "romaji" : this.state.selectedSort);
        }.bind(this));
    }
};
