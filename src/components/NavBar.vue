<template>
    <header class=" fixed w-full">
        <div id="nav" class="flex justify-between bg-blue-900 h-16 border-b-4 border-blue-500">
            <!--Logo du site-->
            <div class="mt-2">
                <router-link @click="scrollTop" :to="{ name: 'Home' }">
                    <div class="ml-2 md:ml-4 flex min-w-max">
                        <img class="h-11" src="../assets/logo/logo_white_large.png" alt="logo de julien bergès" />
                    </div>
                </router-link>
            </div>
            <div class="hidden md:flex mr-2 h-11 mt-2">
                <!-- Lien vers l'accueil-->
                <router-link @click="scrollTop" class="router btn-nav pt-cust" :to="{ name: 'Home' }">Accueil</router-link>
                <!-- Lien vers music -->
                <router-link @click="scrollTop" class="router btn-nav pt-cust" :to="{ name: 'Portfolio' }">
                    Portfolio
                </router-link>
                <!-- Lien vers about -->
                <router-link @click="scrollTop" class="router btn-nav pt-cust" :to="{ name: 'Contact' }">Contact</router-link>
            </div>
            <div @click="toggled()" class="flex md:hidden router bg-white p-2 items-center border-blue-500 border-l-4 px-6 cursor-pointer"><i class="fas fa-bars"></i></div>
        </div>
        <transition name="custom-classes-transition" enter-active-class="animated lightSpeedInRight" leave-active-class="animated rollOut">
            <div v-if="toggle" class="h-16 bg-blue-900 flex justify-center p-2">
                <router-link @click="scrollTop" class="router btn-nav pt-cust" :to="{ name: 'Home' }">Accueil</router-link>
                <!-- Lien vers music -->
                <router-link @click="scrollTop" class="router btn-nav pt-cust" :to="{ name: 'Portfolio' }">
                    Portfolio
                </router-link>
                <!-- Lien vers about -->
                <router-link @click="scrollTop" class="router btn-nav pt-cust" :to="{ name: 'Contact' }">Contact</router-link>
            </div>
        </transition>
    </header>
</template>
<script>
export default {
    name: "NavBar",
    components: {},
    data() {
        return {
            toggle: false,
        };
    },
    methods: {
        scrollTop() {
            return this.$emit("scroll-top");
        },
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
<!-- Style for darkmode and router-link-activ -->
<style scoped>
.pt-cust {
    padding-top: 14px;
}
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
