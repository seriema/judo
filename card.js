Vue.component("judo-card", {
    template: "<div class='c-judo-card'> \
            <div class='row' v-if='hasVideo'> \
                <div class='col-md-8' v-show='showSideA !== false'> \
                    <div v-on:click='flipCard' class='card side-a card-primary card-inverse' > \
                        <div class='card-block'> \
                            <h3 class='card-title'>{{ card.romaji }}</h3> \
                            <p class='card-text'>Belt: {{ card.belt }}</p> \
                            <p class='card-text'>Technique type: {{ card.technique }}</p> \
                            <small class='card-text'>Tap the card to see the answer</small> \
                        </div> \
                    </div> \
                </div> \
                <div class='col-md-8' v-show='showSideA !== true'> \
                    <div v-on:click='flipCard' class='card side-b card-info card-inverse'> \
                        <div class='card-block'> \
                            <h3 class='card-title'>{{ card.romaji }}</h3> \
                            <div class='video'> \
                                <iframe v-bind:src='youtubeEmbedUrl' width='640' height='360' frameborder='0' style='position:absolute;width:100%;height:100%;left:0' allowfullscreen></iframe> \
                            </div> \
                            <small class='card-text'>Tap the card to see the question</small> \
                        </div> \
                    </div> \
                </div> \
            </div> \
            <div class='row' v-else> \
                <div class='col-md-4 col-sm-6'> \
                    <div class='card card-danger card-inverse'> \
                        <div class='card-block'> \
                            <h3 class='card-title'>Sorry!</h3> \
                            <p class='card-text'>There are no videos for the filters you selected.</p> \
                            <p class='card-text'>Selected belt: {{ sharedState.selectedBelt || 'All belts' }}</p> \
                            <p class='card-text'>Selected technique types: {{ sharedState.selectedTechniques }}</p> \
                        </div> \
                    </div> \
                </div> \
            </div> \
        </div>",

    data: function () {
        return {
            sharedState: window.store.state,
            selectedTechnique: null,
            showSideA: true // set to 'null' to show both
        };
    },

    computed: {
        card() {
            if (this.sharedState.selectedTechnique === null) {
                window.store.pickCard();
            }

            // Always flip the card to side A when picking a new card.
            this.showSideA = true;

            return this.sharedState.selectedTechnique;
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
        }
    }
});
