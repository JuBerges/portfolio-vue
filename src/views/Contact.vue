<template>
    <div>
        <div class="help pt-11 mb-36 min-h-screen">
            <the-contact></the-contact>
        </div>
        <the-footer></the-footer>
    </div>
</template>
<script>
import TheContact from "../components/TheContact.vue";
import TheFooter from "../components/TheFooter.vue";
export default {
    name: "Contact",
    components: { TheContact, TheFooter },
    data() {
        return {
            toggle: false,
        };
    },
};
</script>
