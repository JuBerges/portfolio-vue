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
.slide-enter-active,
.slide-leave-active {
    transition: opacity 400ms, transform 400ms;
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
}
</style>
