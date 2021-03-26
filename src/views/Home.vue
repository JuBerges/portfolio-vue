<template>
    <div class="help pt-11 mb-36 min-h-screen">
        <div>
            <main>
                <div class="flex-col sm:mt-16">
                    <!-- HERO PART -->
                    <div class="flex justify-around flex-wrap">
                        <div class="flex mx-10 mt-16">
                            <h1 class="text-4xl font-bold text-gray-100 self-center">
                                <span class="text-blue-500 font-extrabold text-5xl uppercase glow">Bienvenue <br /></span> Je suis <br /><span
                                    class="text-blue-500 font-extrabold text-5xl"
                                >
                                    Julien Bergès</span
                                ><span>,</span><br />
                                <span class=""> Développeur Web.</span>
                            </h1>
                        </div>
                        <div class="mx-5">
                            <img src="/src/assets/image/prog.png" alt="illustration montrant un développeur web" />
                        </div>
                    </div>
                    <!-- MOCKUP PART -->
                    <div class="flex justify-end flex-wrap-reverse">
                        <div class="mx-5">
                            <img src="/src/assets/image/mockup.png" alt="illustration intégration de maquette" />
                        </div>
                        <div class="flex mx-10 mt-16">
                            <p class="text-4xl font-bold text-gray-100 align-middle">
                                <span class="text-blue-500">Transformation <br /> </span>
                                de maquette <br />en
                                <span class="text-blue-500"> site web</span>
                            </p>
                        </div>
                    </div>
                    <!-- RESPONSIVE PART -->
                    <div class="flex justify-start flex-wrap">
                        <div class="flex mx-10">
                            <p class="text-4xl font-bold text-gray-100 align-middle">
                                <span class="text-blue-500">Des sites </span>adaptés <br />
                                pour <span class="text-blue-500">tout</span> <br />les
                                <span class="text-blue-500"> formats</span>
                            </p>
                        </div>
                        <div class="mx-5">
                            <img src="/src/assets/image/responsive.png" alt="illustration de site responsive" />
                        </div>
                    </div>
                    <!-- SEO PART -->
                    <div class="flex justify-center flex-wrap-reverse">
                        <div class="mx-5">
                            <img src="/src/assets/image/seo_2.png" alt="illustration amélioration du réferencement" />
                        </div>
                        <div class="flex mx-10 mt-16">
                            <p class="text-4xl font-bold text-gray-100 align-middle">
                                <span class="text-blue-500">Amélioration</span><br />
                                de la <span class="text-blue-500">visibilité</span> <br />
                                de votre <span class="text-blue-500">site web</span>
                            </p>
                        </div>
                    </div>
                    <!-- PREZ & TECH PART -->
                    <div class="flex justify-around flex-wrap my-16">
                        <div class="flex mx-10">
                            <h2 class="uppercase font-extrabold text-4xl text-blue-500">Technologies utilisées</h2>
                        </div>
                        <!-- icon part -->
                        <div class="mx-5 flex flex-wrap">
                            <div class="text-5xl">
                                <i title="logo html 5" class="fab fa-html5 text-red-600"></i>
                                <i title="logo CSS 3" class="fab fa-css3-alt text-blue-500"></i>
                                <i title="logo JavaScript" class="fab fa-js-square text-yellow-300"></i>
                                <i title="logo node JS" class="fab fa-node text-green-500"></i>
                                <i title="logo PHP" class="fab fa-php text-indigo-600"></i>
                            </div>
                            <div class="flex">
                                <img title="logo Vue jS" class="h-12" src="/src/assets/image/vuejs.png" alt="logo de VueJS" />
                                <img title="logo Symfony" class="h-12 bg-gray-50" src="/src/assets/image/symfony.png" alt="logo de Symfony" />
                                <img title="logo MySQL" class="h-12" src="/src/assets/image/sql.png" alt="logo de MySQL" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div class="h-20 bg-black border-blue-500 border-t-4 border-b-4 bg-transparent bg-opacity-50 flex justify-center">
                <router-link @click="scrollTop()" class="bg-blue-500 self-center p-2 text-white uppercase border-2 border-white rounded-lg" :to="{ name: 'Portfolio' }"
                    >Voir mon Portfolio</router-link
                >
            </div>
            <the-contact></the-contact>
        </div>
    </div>
</template>
<script>
import TheContact from "../components/TheContact.vue";
export default {
    name: "Home",
    components: { TheContact },
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
<style scoped></style>
