<template>
    <section id="contact">
        <div class="flex justify-around flex-wrap jello-horizontal">
            <div class="flex-col mx-10 mt-16 flex-wrap">
                <h1 class="text-4xl font-bold text-gray-100 self-center">
                    <span class="text-blue-500">Contactez</span> moi<br />
                    afin de discuter <br />de
                    <span class="text-blue-500">votre projet.</span>
                </h1>
                <div class="flex flex-col mt-5 items-center">
                    <router-link @click="scrollToTop()" :to="{ name: 'Contact' }"><the-button> CLIQUEZ ICI </the-button></router-link>
                </div>
            </div>
            <div class="mx-5">
                <img src="/src/assets/image/code-coffee.png" alt="illustration montrant une tasse de café" />
            </div>
        </div>
    </section>
</template>
<script>
import TheButton from "./TheButton.vue";
export default {
    name: "TheContact",
    components: { TheButton },
    data() {
        return {};
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    },
};
</script>
<!-- Style for darkmode and router-link-activ -->
<style scoped></style>
