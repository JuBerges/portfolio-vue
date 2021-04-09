<template>
    <div>
        <div>
            <NavBar @scroll-top="scrollToTop"></NavBar>
            <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <component @scroll-top="scrollToTop" :is="Component" />
                </transition>
            </router-view>
            <TheContactTilter></TheContactTilter>
        </div>
    </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import TheContactTilter from "./components/TheContactTilter.vue";
export default {
    name: "App",
    components: { NavBar, TheContactTilter },
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
<!--Style du darkmode-->
<style scoped>
.slide-enter-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter-from {
    transform: translateX(-1000px);
}
.slide-leave-to {
    transform: translateX(1000px);
}
</style>
