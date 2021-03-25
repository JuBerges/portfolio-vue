<template>
    <div class="help pt-11 mb-36 min-h-screen">
        <the-contact></the-contact>
    </div>
</template>
<script>
import TheContact from "../components/TheContact.vue";
export default {
    name: "Contact",
    components: { TheContact },
    data() {
        return {
            toggle: false,
        };
    },
};
</script>
