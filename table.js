
Vue.component("judo-table", {
    template: "<div class='c-judo-table'> \
            <!-- <p>Selected sort: {{ sharedState.selectedSort }}</p> --> \
            <table class='table'> \
            <thead class='thead-inverse'> \
                <tr> \
                    <th v-on:click='sharedState.selectedSort=\"romaji\"'>Name</th> \
                    <th v-on:click='sharedState.selectedSort=\"technique\"'>Technique</th> \
                    <th v-on:click='sharedState.selectedSort=\"belt\"'>Belt</th> \
                </tr> \
            </thead> \
            <tbody> \
                <tr v-for='tech in techniques' :key='tech.romaji' v-bind:class='{ \"table-active\": tech.romaji === sharedState.selectedTechnique.romaji }'> \
                    <td> \
                        <a v-if='!!tech.youtube' v-bind:href='tech.youtube' target='_blank'>{{ tech.romaji }}</a> \
                        <span v-else>{{ tech.romaji }}</span> \
                    </td> \
                    <td>{{ tech.technique }}</td> \
                    <td>{{ tech.belt }}</td> \
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
