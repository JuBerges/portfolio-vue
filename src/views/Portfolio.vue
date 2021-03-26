<template>
    <section class="pt-11 mb-36 min-h-screen">
        <h1 class="text-white glow font-extrabold text-6xl text-center pt-11 uppercase">PROJETS réalisés</h1>
        <div>
            <the-portfolio
                :key="pro"
                v-for="pro in projects"
                :name="pro.name"
                :text="pro.text"
                :tech="pro.tech"
                :images="pro.images"
                :link="pro.link"
                :video="pro.video"
            ></the-portfolio>
        </div>
    </section>
</template>
<script>
import ThePortfolio from "../components/ThePortfolio.vue";
import projects from "../assets/content/projects.json";
export default {
    name: "Portfolio",
    components: { ThePortfolio },
    data() {
        return {
            projects: projects.projects,
            toggle: false,
        };
    },
};
</script>
