<template>
    <div>
        <section class="pt-11">
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
            <the-footer></the-footer>
        </section>
    </div>
</template>
<script>
import ThePortfolio from "../components/ThePortfolio.vue";
import projects from "../assets/content/projects.json";
import TheFooter from "../components/TheFooter.vue";
export default {
    name: "Portfolio",
    components: { ThePortfolio, TheFooter },
    data() {
        return {
            projects: projects.projects,
            toggle: false,
        };
    },
};
</script>
