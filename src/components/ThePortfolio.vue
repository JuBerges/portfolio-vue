<template>
    <article>
        <!-- TITLE -->
        <h2 class="mt-10 mb-4 text-center text-3xl sm:text-5xl text-blue-500 uppercase font-bold coated">
            <a :href="link" target="_blank"><i class="fas fa-chevron-left"></i> {{ name }} <i class="fas fa-chevron-right"></i></a>
        </h2>
        <!-- DESCRIPTION -->
        <div class="bg-black bg-transparent bg-opacity-50 text-white mx-2 sm:w-2/3 sm:mx-auto border-4 border-blue-500 rounded-lg">
            <div class="p-2">
                <p>
                    <span class="font-bold text-blue-500">Description: <br /></span>{{ text }}
                </p>
                <p>
                    <span class="font-bold text-blue-500">Technologies utilisées: <br /></span>{{ tech }}
                </p>
            </div>
            <div class="h-1 bg-blue-500"></div>
            <!-- VIDEO -->
            <div v-if="video">
                <iframe
                    class="h-80 w-full px-2"
                    :src="video"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
                <p class="px-2 text-xs text-center">
                    Musique: <a href="https://www.youtube.com/channel/UC7Lah4xMT_IFjq1axEcXcAA" target="_blank" class="text-blue-500 uppercase font-bold">Sphinks</a>
                </p>
            </div>
            <div v-if="video" class="h-1 bg-blue-500"></div>
            <!-- IMAGES -->
            <div class="" v-if="images">
                <div v-if="!toggle"><button class="p-2 bg-blue-500 text-white w-full" @click="toggled()">Afficher Galerie</button></div>
                <!-- MODAL START -->
                <div v-if="toggle" class="modal h-full w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-75">
                    <!-- modal -->
                    <div class="bg-blue-500 rounded-lg shadow-lg w-full sm:w-2/3 mx-2 mt-10 border-4 border-blue-900">
                        <!-- modal body -->
                        <div id="commentScroll" class="p-2 max-h-96 overflow-scroll text-white ">
                            <!-- ICI -->
                            <div v-if="toggle"><the-display class="" :key="img" v-for="img of images" :image="img"></the-display></div>
                        </div>
                        <div><button class="p-2 bg-blue-500 text-white w-full" @click="toggled()">Fermer</button></div>
                    </div>
                </div>
                <!-- MODAL END -->
            </div>
        </div>
    </article>
</template>
<script>
import TheDisplay from "../components/TheDisplay.vue";
export default {
    name: "ThePortfolio",
    components: { TheDisplay },
    props: ["name", "text", "tech", "images", "video", "link"],
    data() {
        return {
            toggle: false,
        };
    },
    methods: {
        toggled() {
            if (!this.toggle) {
                this.toggle = true;
            } else {
                this.toggle = false;
            }
        },
    },
};
</script>
<style scoped>
.coated {
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
</style>
