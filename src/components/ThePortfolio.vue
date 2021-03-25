<template>
    <div>
        <h1 class="mt-20 text-2xl text-white">{{ name }}</h1>
        <p class="text-white">{{ text }}</p>
    </div>
</template>
<script>
export default {
    name: "ThePortfolio",
    props: ["name", "text", "images", "video", "link"],
};
</script>
