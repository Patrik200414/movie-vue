<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>
        <template v-else-if="movies.length">
            <h1 class="justify-content-lg-center">Searched movies: {{this.$route.query.title}}{{ checkIfYearExists }}</h1>
            <div class="row justify-content-around">
                <div class="col-sm-10"></div>
                <MovieCard v-for="movie in movies" :movie="movie" :key="movie.imdbID"></MovieCard>
            </div>
            
        </template>
    </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue';
const apiKey = import.meta.env.VITE_API_KEY;

export default {
    name: 'SearchedMovies',
    data(){
        return{
            movies: [],
            error: ''
        }
    },
    mounted(){
        this.getSearchedMovies();
    },
    methods: {
        async getSearchedMovies(){
            const query = this.$route.query;
            if(!query.title){
                this.error = 'Please enter a movie title!';
                return;
            }
            const moviesData = await fetch(`https://www.omdbapi.com/?${query.year > 0 ? `y=${query.year}&` : ''}s=${query.title}&apiKey=${apiKey}`);
            const moviesResponse = await moviesData.json();

            if(moviesData.ok && moviesResponse.Search){
                console.log(moviesResponse.Search)
                this.movies = moviesResponse.Search;
                this.error = '';
            } else{
                this.error = moviesResponse.Error;
            }
        }
    },
    watch: {
        '$route'(){
            this.getSearchedMovies();
        }
    },
    computed: {
        checkIfYearExists(){
            return this.$route.query.year ? ` | ${this.$route.query.year}` : '';
        }
    },
    components: {
        MovieCard: MovieCard,
    }

}
</script>