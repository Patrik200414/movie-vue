import { createRouter, createWebHistory } from "vue-router";

import Home from '../pages/Home.vue';
import SearchedMovies from '../pages/SearchedMovies.vue';
import MovieDetail from '../pages/MovieDetail.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/searched-move',
        component: SearchedMovies
    },
    {
        path: '/movie/:id',
        component: MovieDetail
    }
]

export default createRouter({
    history: createWebHistory(),
    routes: routes
});

