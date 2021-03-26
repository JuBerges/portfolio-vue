<template>
    <div>
        <a :href="image" target="_blank"><img class="border-t-8 border-b-8 border-blue-500 mx-auto" :src="image" alt="image d'illustration de projet"/></a>
    </div>
</template>
<script>
export default {
    name: "TheDisplay",
    props: ["image"],
};
</script>
