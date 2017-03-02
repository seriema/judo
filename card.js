Vue.component("judo-cards", {
    template: "<div class='c-judo-cards'> \
            <button v-on:click='pickCard'>Pick card</button>\
            <button v-on:click='flipCard'>Flip card</button>\
            <div class='side-a' v-show='showSideA !== false'> \
                <h1>Side A - Name</h1> \
                <h2>{{ card.romaji }}</h2>\
                <p>Belt: {{ card.belt }}</p> \
                <p>Technique type: {{ card.technique }}</p> \
            </div> \
            <div class='side-b' v-show='showSideA !== true'> \
                <h1>Side B - Video</h1> \
                <div v-show='hasVideo' class='video'> \
                    <iframe v-bind:src='youtubeEmbedUrl' width='640' height='360' frameborder='0' style='position:absolute;width:100%;height:100%;left:0' allowfullscreen></iframe> \
                </div> \
            </div> \
        </div>",

    data: function () {
        return {
            sharedState: window.store.state,
            selectedTechnique: null,
            showSideA: null
        };
    },

    computed: {
        card() {
            if (this.sharedState.selectedTechnique === null) {
                this.pickCard();
            }

            return this.sharedState.selectedTechnique;
        },
        hasVideo() {
            return !!this.card.youtube;
        },
        youtubeEmbedUrl() {
            var vidQuery = this.card.youtube.indexOf("v=") + 2;
            var ampersand = this.card.youtube.indexOf("&", vidQuery);
            var videoId = this.card.youtube.substring(vidQuery, ampersand);

            return "https://www.youtube.com/embed/" + videoId + "?ecver=2";
        }
    },

    methods: {
        pickCard() {
            window.store.pickCard();
        },
        flipCard() {
            this.showSideA = !this.showSideA;
        }
    }
});
