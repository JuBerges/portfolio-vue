<template>
    <div class="help pt-11 mb-36 min-h-screen">
        <div><the-portfolio :key="pro" v-for="pro in projects" :name="pro.name" :text="pro.text"></the-portfolio></div>
    </div>
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
        };
    },
    mounted() {
        console.log(this.projects);
    },
};
</script>
