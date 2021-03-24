<template>
    <header id="nav" class="flex justify-between bg-blue-900 h-16 border-b-4 border-blue-500 fixed w-full ">
        <!--Logo du site-->
        <div>
            <router-link @click="scrollTop" :to="{ name: 'Home' }">
                <div class="ml-1 md:ml-4 flex min-w-max">
                    <img class="h-11" src="../assets/logo/logo_white_large.png" alt="logo de julien bergès" />
                </div>
            </router-link>
        </div>
        <div class="flex mr-2">
            <!-- Lien vers l'accueil-->
            <router-link @click="scrollTop" class="router btn-nav" :to="{ name: 'Home' }">Accueil</router-link>
            <!-- Lien vers music -->
            <router-link @click="scrollTop" class="router btn-nav" :to="{ name: 'Portfolio' }">
                Portfolio
            </router-link>
            <!-- Lien vers about -->
            <router-link @click="scrollTop" class="router btn-nav" :to="{ name: 'Contact' }">Contact</router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: "NavBar",
    components: {},
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
<!-- Style for darkmode and router-link-activ -->
<style scoped>
.router {
    color: rgba(0, 0, 0);
}
.router:hover {
    color: rgb(30, 58, 138);
}

.router.router-link-active,
.router.router-link-exact-active {
    /*  border-bottom: solid 10px white; */
    color: rgb(30, 58, 138);
}
</style>
