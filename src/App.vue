<template>
    <div>
        <div>
            <NavBar @scroll-top="scrollToTop"></NavBar>
            <router-view v-slot="{ Component }">
                <transition name="slide" mode="out-in">
                    <component :is="Component" />
                </transition>
            </router-view>
            <the-footer></the-footer>
        </div>
    </div>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
    name: "App",
    components: { NavBar, TheFooter },
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
    transform: translateX(-400px);
}
.slide-leave-to {
    transform: translateX(400px);
}
</style>
