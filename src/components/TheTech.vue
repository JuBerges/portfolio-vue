<template>
    <div class="flex w-full justify-around flex-wrap my-16">
        <div class="flex mx-10 justify-center text-center items-center p-2 glass border border-blue-600">
            <h2 class="uppercase font-extrabold text-4xl text-blue-500">Technologies utilisées</h2>
        </div>
        <!-- icon part -->
        <div class="mx-5 flex flex-wrap justify-center">
            <div class="text-5xl flex flex-wrap justify-center items-center p-2 glass border border-blue-600">
                <i title="logo html 5" class="fab fa-html5 text-red-600 m-1 bg-white px-1 rounded"></i>
                <i title="logo CSS 3" class="fab fa-css3-alt text-blue-500 m-1 bg-white px-1 rounded"></i>
                <i title="logo JavaScript" class="fab fa-js-square text-yellow-300 m-1 bg-white px-1 rounded"></i>
                <i title="logo node JS" class="fab fa-node text-green-500 m-1 bg-white px-1 rounded"></i>
                <i title="logo PHP" class="fab fa-php text-indigo-600 m-1 bg-white px-1 rounded"></i>
                <i title="logo React" class="fab fa-react bg-white text-blue-400 m-1 px-1 rounded"></i>
                <i title="logo Symfony" class="fab fa-symfony m-1 text-gray-700 bg-white px-1 rounded"></i>
                <i title="logo Vue JS" class="fab fa-vuejs m-1 text-green-500 bg-white px-1 rounded"></i>
                <img title="logo MySQL" class="h-12 m-1 bg-white rounded" src="/src/assets/image/sql.png" alt="logo de MySQL" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "TheTech",
};
</script>
