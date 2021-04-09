<template>
    <header class=" fixed w-full z-50">
        <div id="nav" class="flex justify-between bg-blue-900 h-16 border-b-4 border-blue-500">
            <!--Logo du site-->
            <div class="mt-2 flex">
                <router-link @click="scrollTop" :to="{ name: 'Home' }">
                    <div class="ml-2 lg:ml-4 flex min-w-max">
                        <img class="h-11" src="../assets/logo/logo_white_large.png" alt="logo de julien bergès" />
                    </div>
                </router-link>
                <div>
                    <audio id="musicTheme" src="https://julien-berges.fr/music/sphinks-cybernight.mp3"></audio>
                </div>
                <div class="flex pb-2">
                    <button title="Arrêter la musique" v-if="music" class="mx-4 text-white hover:text-red-500 animate-pulse" @click="muteMusic()">
                        <i class="fas fa-volume-up fa-lg"></i>
                    </button>
                    <button title="Jouer la musique" v-else class="mx-4 text-white hover:text-green-500 animate-pulse" @click="muteMusic()">
                        <i class="fas fa-volume-mute fa-lg"></i>
                    </button>
                </div>
            </div>
            <div class="hidden lg:flex mr-2 h-11 mt-2 lg:items-center">
                <!-- Lien vers l'accueil-->
                <router-link @click="scrollTop" class="router" :to="{ name: 'Home' }"><the-button>ACCUEIL</the-button></router-link>
                <!-- Lien vers portfolio -->
                <router-link @click="scrollTop" class="router" :to="{ name: 'Portfolio' }">
                    <the-button>PORTFOLIO</the-button>
                </router-link>
                <!-- Lien vers contact -->
                <router-link @click="scrollTop" class="router" :to="{ name: 'Contact' }"><the-button>CONTACT</the-button></router-link>
            </div>
            <div @click="toggledNav()" class="flex lg:hidden router bg-white p-2 items-center border-blue-500 border-l-4 px-6 cursor-pointer"><i class="fas fa-bars"></i></div>
        </div>
        <transition name="slide-fade">
            <div v-if="toggleNav" class="h-16 bg-blue-900 flex justify-center items-center p-2 border-4 border-t-0  border-blue-500">
                <!-- Lien vers l'accueil-->
                <router-link @click="scrollTop(), (toggleNav = false)" class="router" :to="{ name: 'Home' }"><the-button>ACCUEIL</the-button></router-link>
                <!-- Lien vers portfolio -->
                <router-link @click="scrollTop(), (toggleNav = false)" class="router" :to="{ name: 'Portfolio' }">
                    <the-button>PORTFOLIO</the-button>
                </router-link>
                <!-- Lien vers contact -->
                <router-link @click="scrollTop(), (toggleNav = false)" class="router" :to="{ name: 'Contact' }"><the-button>CONTACT</the-button></router-link>
            </div>
        </transition>
    </header>
</template>
<script>
import TheButton from "./TheButton.vue";
export default {
    name: "NavBar",
    components: { TheButton },
    data() {
        return {
            toggleNav: false,
            music: false,
        };
    },
    methods: {
        scrollTop() {
            return this.$emit("scroll-top");
        },
        toggledNav() {
            !this.toggleNav ? (this.toggleNav = true) : (this.toggleNav = false);
        },
        muteMusic() {
            let musicPlayer = document.getElementById("musicTheme");
            if (this.music) {
                musicPlayer.pause();
                this.music = false;
            } else {
                musicPlayer.play();
                this.music = true;
            }
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
    color: rgb(59, 130, 246);
}

.router.router-link-active,
.router.router-link-exact-active {
    /*  border-bottom: solid 10px white; */
    color: rgb(37, 99, 235);
}
.slide-fade-enter-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from {
    transform: translateX(-400px);
}
.slide-fade-leave-to {
    transform: translateX(400px);
}
</style>
