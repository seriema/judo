
Vue.component("judo-table", {
    template: "<div> \
            <p>Selected sort: {{ sharedState.selectedSort }}</p> \
            <table> \
            <thead> \
                <tr> \
                    <th v-on:click='sharedState.selectedSort=\"romaji\"'>Name</th> \
                    <th v-on:click='sharedState.selectedSort=\"technique\"'>Technique</th> \
                    <th v-on:click='sharedState.selectedSort=\"belt\"'>Belt</th> \
                    <th v-on:click='sharedState.selectedSort=\"youtube\"'>URL</th> \
                </tr> \
            </thead> \
            <tbody> \
                <tr v-for='tech in techniques' :key='tech.romaji'> \
                    <td>{{ tech.romaji }}</td> \
                    <td>{{ tech.technique }}</td> \
                    <td>{{ tech.belt }}</td> \
                    <td><a v-bind:href='tech.youtube'>YouTube</a></td> \
                </tr> \
            </tbody> \
        </table> \
        </div>",

    data: function () {
        return {
            sharedState: window.store.state
        };
    },

    computed: {
        techniques() {
            return window.store.techniques();
        }
    }
});
