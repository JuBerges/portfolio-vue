<template>
    <button type="submit" class="pushable mx-1">
        <span class="shadow"></span>
        <span class="edge"></span>
        <span class="front" :class="size">
            <slot>Push</slot>
        </span>
    </button>
</template>
<script>
export default {
    name: "TheButton",
    data() {
        return {
            size: "p-2",
        };
    },
    props: {
        sizeChanger: String,
    },
    mounted() {
        if (this.sizeChanger) {
            this.size = this.sizeChanger;
        }
    },
};
</script>
<style scoped>
.pushable {
    position: relative;
    border: none;
    background: transparent;
    padding: 0;
    cursor: pointer;
    outline-offset: 4px;
    transition: filter 250ms;
}
.shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: hsl(0deg 0% 0% / 0.25);
    will-change: transform;
    transform: translateY(2px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
.edge {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(to left, hsl(217, 91%, 30%) 0%, hsl(217, 91%, 59%) 8%, hsl(217, 91%, 59%) 92%, hsl(217, 91%, 30%) 100%);
}
.front {
    display: block;
    position: relative;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: bold;
    color: #000;
    background: hsl(0deg 0% 100%);
    will-change: transform;
    transform: translateY(-4px);
    transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}
.pushable:hover {
    filter: brightness(110%);
}
.pushable:hover .front {
    transform: translateY(-6px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}
.pushable:active .front {
    transform: translateY(-2px);
    transition: transform 34ms;
}
.pushable:hover .shadow {
    transform: translateY(4px);
    transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}
.pushable:active .shadow {
    transform: translateY(1px);
    transition: transform 34ms;
}
.pushable:focus:not(:focus-visible) {
    outline: none;
}
</style>
