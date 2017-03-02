Vue.component("judo-filter", {
    template:
    "<div class='c-judo-filter'> \
        <form class='form-inline'> \
            <div class='form-group'> \
                <label class='sr-only' for='belt'>Belt</label> \
                <select class='custom-select mr-2 mb-2' name='belt' v-model='sharedState.selectedBelt'> \
                    <option v-bind:value='null'>All belts</option> \
                    <option v-for='b in beltNames' :key='b' v-bind:value='b'>{{ b }}</option> \
                </select> \
            </div> \
            <div class='form-group'> \
                <label v-for='t in techniqueNames' class='custom-control custom-checkbox mb-2 mr-2'> \
                    <input type='checkbox' v-bind:id='t' v-bind:value='t' v-model='sharedState.selectedTechniques' class='custom-control-input'> \
                    <span class='custom-control-indicator'></span> \
                    <span v-bind:for='t' :key='t' class='custom-control-description'>{{ t }}</span> \
                </label> \
            </div> \
            <!-- <p>Selected belt: {{ sharedState.selectedBelt }}</p> \
            <p>Checked names: {{ sharedState.selectedTechniques }}</p> --> \
        </form> \
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
