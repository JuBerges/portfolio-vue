<template>
    <article>
        <!-- TITLE -->
        <h2 class="mt-10 mb-4 text-center text-5xl text-blue-500 uppercase font-bold coated">
            <a :href="link" target="_blank"><i class="fas fa-chevron-left"></i> {{ name }} <i class="fas fa-chevron-right"></i></a>
        </h2>
        <!-- DESCRIPTION -->
        <div class="bg-black bg-transparent bg-opacity-50 text-white w-2/3 mx-auto border-4 border-blue-500 rounded-lg">
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
            <div class="flex" v-if="images">
                <the-display class="w-2/3 overflow-hidden" :key="img" v-for="img of images" :image="img"></the-display>
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
        return {};
    },
    mounted() {},
};
</script>
<style scoped>
.coated {
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
</style>
