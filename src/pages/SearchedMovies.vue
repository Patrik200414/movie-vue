<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>
        <template v-else-if="movies.length">
            <h1 class="justify-content-lg-center">Searched movies: {{this.$route.query.title}}{{ checkIfYearExists }}</h1>
        </template>
    </div>
</template>

<script>
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

            
            const moviesData = await fetch(`https://www.omdbapi.com/?${this.year > 0 ? `y=${this.year}&` : ''}s=${this.title}&apiKey=${apiKey}`);
            const moviesResponse = await moviesData.json();

            if(moviesData.ok){
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
    }

}
</script>