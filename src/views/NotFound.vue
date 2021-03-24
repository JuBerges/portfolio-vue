<template>
    <div class="notfound pt-11 ml-6">
        <h1 class="text-white font-extrabold text-5xl mt-6">404</h1>
        <h2 class="text-white font-extrabold text-5xl">Page Introuvable</h2>
        <router-link :to="{ name: 'Home' }">
            <button
                class="text-gray-500 bold text-3xl font-extrabold mt-6 bg-transparent bg-black bg-opacity-40 border-4 border-gray-500 p-2 rounded-lg hover:text-white hover:border-white"
            >
                RETOUR
            </button>
        </router-link>
        <img class="mx-auto" src="../assets/images/losttra.png" alt="image de john travolta perdu" />
    </div>
</template>
<script>
export default {
    name: "NotFound",
    components: {},
};
</script>
