<template>
    <div>
        <div class="notfound pt-11 h-screen">
            <h1 class="text-white font-extrabold text-5xl mt-6">404</h1>
            <h2 class="text-white font-extrabold text-5xl">Page Introuvable</h2>
            <router-link :to="{ name: 'Home' }">
                <button
                    class="text-white bold text-3xl font-extrabold mt-6 bg-transparent bg-black bg-opacity-40 border-4 border-white p-2 rounded-lg hover:text-blue-500 hover:border-blue-500"
                >
                    RETOUR
                </button>
            </router-link>
            <img class="mx-auto" src="/src/assets/image/losttra.png" alt="image de john travolta perdu" />
        </div>
        <the-footer></the-footer>
    </div>
</template>
<script>
import TheFooter from "../components/TheFooter.vue";
export default {
    name: "NotFound",
    components: { TheFooter },
};
</script>
