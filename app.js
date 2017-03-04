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
        pickCard() {
            window.store.pickCard();
        }
    }

});
