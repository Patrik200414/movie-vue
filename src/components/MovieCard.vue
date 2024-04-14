<template>
    <div class="card movie-card m-3">
        <img :src="getMovieImage" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{movie.Title}}</h5>
            <p class="card-text">Year: {{movie.Year}}</p>
            <p class="card-text">Type: {{movie.Type}}</p>
            <RouterLink class="btn btn-primary" :to="`/movie/${movie.imdbID}`">Check out details</RouterLink>
        </div>
    </div>
    
</template>

<script>
import DefaultMovieImage from '../assets/movie-clapper-open-svgrepo-com.svg';

export default {
    name: 'MovieCard',
    props: {
        movie: {
            type: Object,
            required: true
        }
    },
    computed: {
        getMovieImage(){
            return this.movie.Poster === 'N/A' ? DefaultMovieImage : this.movie.Poster;
        }
    }
}
</script>

<style>
.movie-card{
    width: 18rem;
}
</style>