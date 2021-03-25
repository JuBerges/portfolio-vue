<template>
    <section id="contact">
        <div class="flex justify-around flex-wrap jello-horizontal">
            <div class="flex-col mx-10 mt-16 flex-wrap">
                <h1 class="text-4xl font-bold text-gray-100 self-center">
                    <span class="text-blue-500">Contactez</span> moi<br />
                    afin de discuter de<br />
                    <span class="text-blue-500">votre projet.</span>
                </h1>
                <div class="flex flex-col mt-5">
                    <a href="mailto:mbergesjuline@gmail.com" target="_blank" class="btn-jb">Email: mbergesjulien@gmail.com</a>

                    <a href="tel:+33603371005" class="btn-jb">Tel: 06-03-37-10-05</a>
                </div>
            </div>
            <div class="mx-5">
                <img src="/src/assets/image/code-coffee.png" alt="illustration montrant une tasse de café" />
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "TheContact",
    components: {},
    data() {
        return {};
    },
    methods: {},
};
</script>
<!-- Style for darkmode and router-link-activ -->
<style scoped></style>
