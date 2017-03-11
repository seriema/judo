Vue.component("judo-card", {
    template: "<div class='c-judo-card'> \
    <button v-on:click='pickCard' class='btn btn-primary mb-2'>Pick another card</button> \
    <button v-on:click='toggleTranslation' v-if='!!(card && card.swedish)' class='btn btn-secondary mb-2'>{{ sharedState.showTranslation ? \"Hide hint\" : \"Show hint\" }}</button> \
            <div class='row' v-if='hasVideo'> \
                <div class='col' v-show='showSideA !== false'> \
                    <div v-on:click='flipCard' class='card side-a' v-bind:class='card.belt.toLowerCase()'> \
                        <div class='card-block'> \
                            <h3 class='card-title'>{{ card.romaji }}</h3> \
                            <p v-show='sharedState.showTranslation' class='card-title'><em>Swedish translation: {{ card.swedish }}</em></p> \
                            <p class='card-text'>Belt: {{ card.belt }}</p> \
                            <p class='card-text'>Technique type: {{ card.technique }}</p> \
                            <small class='card-text'>Tap the card to see the answer</small> \
                        </div> \
                    </div> \
                </div> \
                <div class='col' v-show='showSideA !== true'> \
                    <div v-on:click='flipCard' class='card side-b'> \
                        <div class='card-block'> \
                            <h3 class='card-title'>{{ card.romaji }}</h3> \
                            <div class='video'> \
                                <iframe v-bind:src='youtubeEmbedUrl' width='640' height='360' frameborder='0' style='position:absolute;width:100%;height:100%;left:0' allowfullscreen></iframe> \
                            </div> \
                            <small class='card-text'>Tap the card to hide the answer</small> \
                        </div> \
                    </div> \
                </div> \
            </div> \
            <div class='row' v-else> \
                <div class='col'> \
                    <div class='card card-danger card-inverse'> \
                        <div class='card-block'> \
                            <h3 class='card-title'>Sorry!</h3> \
                            <p class='card-text'>There are no videos for the filters you selected.</p> \
                            <p class='card-text'>Selected belt: {{ sharedState.selectedBelt || 'All belts' }}</p> \
                            <p class='card-text '>Selected technique types: {{ sharedState.selectedTechniques }}</p> \
                        </div> \
                    </div> \
                </div> \
            </div> \
        </div>",

    data: function () {
        return {
            sharedState: window.store.state,
            showSideA: true, // set to 'null' to show both
            selectedTechnique: null
        };
    },

    computed: {
        card() {
            this.pickCard();
            return this.selectedTechnique;
        },

        hasVideo() {
            return !!this.card && !!this.card.youtube;
        },

        youtubeEmbedUrl() {
            var vidQuery = this.card.youtube.indexOf("v=") + 2;
            var ampersand = this.card.youtube.indexOf("&", vidQuery);
            var videoId = this.card.youtube.substring(vidQuery, ampersand);

            return "https://www.youtube.com/embed/" + videoId + "?ecver=2";
        }
    },

    methods: {
        flipCard() {
            this.showSideA = !this.showSideA;
        },

        pickCard() {
            // Always flip the card to side A when picking a new card.
            this.showSideA = true;

            var filteredTechniques = window.store.techniques().filter(function (tech) {
                return !!tech.youtube;
            });

            var selectedTechnique = null;

            if (filteredTechniques.length === 0) {
                window.store.setSelectedTechniqueName(null);
                this.selectedTechnique = null;
            } else {
                var maxId = filteredTechniques.length;
                var randomId = Math.floor(Math.random() * maxId);

                this.selectedTechnique = filteredTechniques[randomId];
                window.store.setSelectedTechniqueName(this.selectedTechnique.romaji);
            }
        },

        toggleTranslation(event) {
            window.store.toggleTranslation();
        }
    }
});
