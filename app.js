
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

new Vue({
    el: "#app",
    data: {
        jdata: window.jdata,
        even: true,
        selectedTechniques: [],
        selectedBelt: null,
        selectedSort: null,
        showTable: true,
        showCards: false
    },
    computed: {
        headers: function () {
            var obj = this.jdata[0]; // The elements all look the same
            return Object.keys(obj);
        },
        beltNames: function () {
            return unique(this.jdata, "belt");
        },
        techniqueNames: function () {
            return unique(this.jdata, "technique");
        },
        techniques: function () {
            var techniques = this.jdata;

            if (this.selectedTechniques.length > 0) {
                techniques = techniques.filter(function (j) {
                    return this.selectedTechniques.indexOf(j.technique) !== -1;
                }.bind(this));
            }

            if (this.selectedBelt !== null) {
                techniques = techniques.filter(function (t) {
                    return t.belt === this.selectedBelt;
                }.bind(this));
            }

            // sort by some property
            return techniques.sort(function (a, b) {
                return sortCalc(a, b, this.selectedSort === null ? "romaji" : this.selectedSort);
            }.bind(this));
        }
    },
    methods: {
        flipView: function (event) {
            this.showTable = !this.showTable;
            this.showCards = !this.showCards;
        }
    }
});
