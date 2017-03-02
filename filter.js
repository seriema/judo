Vue.component("judo-filter", {
    template: "<div> \
        <label for='belt'>Belt</label> \
        <select name='belt' v-model='sharedState.selectedBelt'> \
            <option v-bind:value='null'>All</option> \
            <option v-for='b in beltNames' :key='b' v-bind:value='b'>{{ b }}</option> \
         </select> \
        <span v-for='t in techniqueNames'> \
            <input type='checkbox' v-bind:id='t' v-bind:value='t' v-model='sharedState.selectedTechniques'> \
            <label v-bind:for='t' :key='t'>{{ t }}</label> \
        </span> \
        <p>Selected belt: {{ sharedState.selectedBelt }}</p> \
        <p>Checked names: {{ sharedState.selectedTechniques }}</p> \
        </div>",

    data: function () {
        return {
            sharedState: window.store.state
        };
    },

    computed: {
        beltNames() {
            return window.store.beltNames();
        },
        techniqueNames() {
            return window.store.techniqueNames();
        }
    },

    methods: {
        flipView(event) {
            window.store.flipView(event);
        }
    }
});
