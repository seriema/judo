
Vue.component("judo-table", {
    template: "<div class='c-judo-table'> \
            <!-- <p>Selected sort: {{ sharedState.selectedSort }}</p> --> \
            <table class='table'> \
            <thead class='thead-inverse'> \
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
                    <td><a v-if='!!tech.youtube' v-bind:href='tech.youtube' target='_blank'>YouTube</a></td> \
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
