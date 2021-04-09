<template>
    <router-link @click="scrollToTop" :to="{ name: 'Contact' }"
        ><img id="tilter" class="h-16 lg:h-20 cursor-pointer z-50 animate-wiggle" title="Contactez moi" src="/src/assets/image/code-coffee.png" alt="image de tasse à café"
    /></router-link>
</template>
<script>
export default {
    name: "TheContactTilter",
    components: {},
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
<style scoped>
#tilter {
    position: fixed;
    right: 10px;
    bottom: 10px;
}
</style>
