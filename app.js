new Vue({
    el: "#app",

    data: {
        sharedState: window.store.state,
        showCards: true,
        showTable: false
    },

    methods: {
        toggleTable(event) {
            this.showTable = !this.showTable;
        },
        toggleTranslation(event) {
            window.store.toggleTranslation();
        },
        pickCard() {
            window.store.pickCard();
        }
    }

});
