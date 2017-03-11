
Vue.component("judo-table", {
    template: "<div class='c-judo-table'> \
            <table class='table'> \
            <thead class='thead-inverse'> \
                <tr> \
                    <th v-on:click='setSort(\"romaji\")' v-bind:class='{ \"font-italic\": sharedState.selectedSort === \"romaji\" }'>Name</th> \
                    <th v-on:click='setSort(\"technique\")' v-bind:class='{ \"font-italic\": sharedState.selectedSort === \"technique\" }'>Technique</th> \
                    <th v-on:click='setSort(\"belt\")' v-bind:class='{ \"font-italic\": sharedState.selectedSort === \"belt\" }'>Belt</th> \
                </tr> \
            </thead> \
            <tbody> \
                <tr v-for='tech in techniques' :key='tech.romaji' v-bind:class='{ \"table-active\": tech.romaji === sharedState.selectedTechniqueName }'> \
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
    },

    methods: {
        setSort(sortProp) {
            window.store.setSelectedSort(sortProp);
        }
    }
});
