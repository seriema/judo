new Vue({
    el: "#app",

    data: {
        showCards: true,
        showTable: false
    },

    methods: {
        toggleTable(event) {
            this.showTable = !this.showTable;
        }
    }
});
