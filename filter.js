Vue.component("judo-filter", {
    template:
    "<div class='c-judo-filter'> \
        <form class='form-inline'> \
            <div class='form-group'> \
                <label class='sr-only' for='belt'>Belt</label> \
                <select class='custom-select mr-2 mb-2' name='belt' v-model='selectedBelt'> \
                    <option v-for='b in belts' :key='b' v-bind:value='b.value'>{{ b.label }}</option> \
                </select> \
            </div> \
            <div class='form-group'> \
                <label v-for='t in techniqueNames' class='custom-control custom-checkbox mb-2 mr-2'> \
                    <input type='checkbox' v-bind:id='t' v-bind:value='t' v-model='selectedTechniques' class='custom-control-input'> \
                    <span class='custom-control-indicator'></span> \
                    <span v-bind:for='t' :key='t' class='custom-control-description'>{{ t }}</span> \
                </label> \
            </div> \
        </form> \
    </div>",

    data: function () {
        return {
            sharedState: window.store.state,
            selectedTechniques: window.store.state.selectedTechniques.slice() // Don't databind directly to the states, but we want this property here because checkboxes are handled a bit special by Vue so we don't want to reinvent all the logic of keeping an array matching what values are checked.
        };
    },

    computed: {
        belts() {
            return window.store.belts();
        },

        selectedBelt: {
            get: function () {
                return this.sharedState.selectedBelt;
            },
            set: function (newValue) {
                window.store.setSelectedBelt(newValue);
            }
        },

        techniqueNames() {
            return window.store.techniqueNames();
        }
    },

    methods: {
        flipView(event) {
            window.store.flipView(event);
        }
    },

    watch: {
        selectedTechniques(newValue, oldValue) {
            window.store.setSelectedTechniques(newValue);
        }
    }
});
