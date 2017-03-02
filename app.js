new Vue({
    el: "#app",

    data: {
        sharedState: window.store.state,
        showCards: null
    },

    methods: {
        flipView(event) {
            this.showCards = !this.showCards;
        }
    }

});
