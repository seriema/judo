new Vue({
    el: "#app",

    data: {
        sharedState: window.store.state,
        showCards: true // set to 'null' to show both
    },

    methods: {
        flipView(event) {
            this.showCards = !this.showCards;
        },
        pickCard() {
            window.store.pickCard();
        }
    }

});
