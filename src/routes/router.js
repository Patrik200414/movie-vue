import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue';
import SearchedMovies from '../pages/SearchedMovies.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/searched-move',
        component: SearchedMovies
    }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
});

