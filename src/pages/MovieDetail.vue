<template>
    <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>
    <template v-else>
        <h1>Movie Detail</h1>

    </template>
</template>

<script>
const apiKey = import.meta.env.VITE_API_KEY;

export default {
    name: 'MovieDetail',
    data(){
        return {
            movieDetail: {},
            error: ''
        }
    },
    mounted(){
        this.getMovieDetails();
    },
    methods: {
        async getMovieDetails(){
            const movieId = this.$route.params.id;
            
            if(!movieId){
                this.error = 'Invalid url parameter!';
                return;
            }

            const movieDetail = await fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${movieId}`);
            const movieDetailResponse = await movieDetail.json();
            const response = movieDetailResponse.Response === 'True';

            if(response){
                console.log(movieDetailResponse);
                this.movieDetail = movieDetailResponse;
                this.error = '';
            } else{
                this.error = movieDetailResponse.Error;
            }
        }
    },
    watch: {
        '$route'(){
            this.getMovieDetails();
        }
    }
}
</script>