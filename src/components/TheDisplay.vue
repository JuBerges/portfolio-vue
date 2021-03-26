<template>
    <div>
        <a :href="image" target="_blank"><img class="border border-blue-500 h-40" :src="image" alt="image d'illustration de projet"/></a>
    </div>
</template>
<script>
export default {
    name: "TheDisplay",
    props: ["image"],
};
</script>
