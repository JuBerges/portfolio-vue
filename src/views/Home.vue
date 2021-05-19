<template>
    <div>
        <div class="help pt-11">
            <div>
                <main>
                    <div class="flex-col xl:mt-16">
                        <!-- HERO PART -->
                        <div class="flex flex-wrap">
                            <div class="home-text pt-12">
                                <h1 class="glow uppercase text-blue-500 font-extrabold text-4xl xl:text-7xl align-middle">bienvenue</h1>
                                <p class="text-white text-3xl xl:text-4xl font-extrabold">Je suis</p>
                                <h2 class="coated uppercase text-blue-500 font-extrabold text-4xl xl:text-7xl">julien bergès</h2>
                                <p class="text-white text-3xl xl:text-4xl font-extrabold">Développeur Web</p>
                            </div>
                            <div class="w-full xl:w-1/2 flex justify-center">
                                <img class="self-center" src="/src/assets/image/prog.png" alt="illustration montrant un développeur web" />
                            </div>
                        </div>
                        <!-- MOCKUP PART -->
                        <div class="flex flex-wrap-reverse mt-5">
                            <div class="w-full xl:w-1/2 flex justify-center">
                                <img src="/src/assets/image/mockup.png" alt="illustration intégration de maquette" />
                            </div>
                            <div class="home-text pt-12">
                                <p class="text-4xl xl:text-7xl font-bold text-gray-100">
                                    <span class="text-blue-500">Transformation <br /> </span>
                                    de maquette <br />en
                                    <span class="text-blue-500"> site web</span>
                                </p>
                            </div>
                        </div>
                        <!-- RESPONSIVE PART -->
                        <div class="flex flex-wrap mt-5">
                            <div class="home-text pt-4">
                                <p class="text-4xl xl:text-7xl font-bold text-gray-100">
                                    <span class="text-blue-500">Des sites </span>adaptés <br />
                                    pour <span class="text-blue-500">tous</span> <br />les
                                    <span class="text-blue-500"> formats</span>
                                </p>
                            </div>
                            <div class="w-full xl:w-1/2 flex justify-center">
                                <img src="/src/assets/image/responsive.png" alt="illustration de site responsive" />
                            </div>
                        </div>
                        <!-- SEO PART -->
                        <div class="flex flex-wrap-reverse mt-5">
                            <div class="w-full xl:w-1/2 flex justify-center">
                                <img src="/src/assets/image/seo_2.png" alt="illustration amélioration du réferencement" />
                            </div>
                            <div class="home-text pt-16">
                                <p class="text-4xl xl:text-7xl font-bold text-gray-100">
                                    <span class="text-blue-500">Amélioration</span><br />
                                    de la <span class="text-blue-500">visibilité</span> <br />
                                    de votre <span class="text-blue-500">site web</span>
                                </p>
                            </div>
                        </div>
                        <!-- PREZ & TECH PART -->
                        <the-tech />
                    </div>
                </main>
                <!-- PORTFOLIO LINK -->
                <div class="glass h-20 border-blue-500 border-t border-b flex justify-center">
                    <router-link @click="scrollTop()" class="self-center" :to="{ name: 'Portfolio' }"><the-button>Voir mon Portfolio</the-button></router-link>
                </div>
                <the-contact></the-contact>
            </div>
            <the-footer></the-footer>
        </div>
    </div>
</template>
<script>
import TheButton from "../components/TheButton.vue";
import TheContact from "../components/TheContact.vue";
import TheFooter from "../components/TheFooter.vue";
import TheTech from "../components/TheTech.vue";
export default {
    name: "Home",
    components: { TheContact, TheFooter, TheButton, TheTech },
    data() {
        return {};
    },
    methods: {
        scrollTop() {
            return this.$emit("scroll-top");
        },
    },
};
</script>
<style scoped>
.coated {
    text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
}
</style>
