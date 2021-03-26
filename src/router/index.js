import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        // route level code-splitting
        // this generates a separate chunk (contact.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function() {
            return import(/* webpackChunkName: "Contact" */ "../views/Contact.vue");
        },
    },
    {
        path: "/portfolio",
        name: "Portfolio",
        component: function() {
            return import(/* webpackChunkName: "Portfolio" */ "../views/Portfolio.vue");
        },
    },
    {
        path: "/404",
        name: "NotFound",
        component: function() {
            return import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue");
        },
    },
    {
        //path: "*"
        path: "/:catchAll(.*)",
        redirect: "404",
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
