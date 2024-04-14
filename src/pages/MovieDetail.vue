<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>
        <template v-else-if="Object.keys(movieDetail).length">
            <h1>Movie Detail</h1>
    
        </template>
    </div>
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
                const reorganizedData = this.reorganizeMovieDetailData(movieDetailResponse);
                this.movieDetail = reorganizedData;
                this.error = '';
            } else{
                this.error = movieDetailResponse.Error;
            }
        },
        reorganizeMovieDetailData(movieDetailResponse){
            const textBasedInformation = {};

                for(const detailKey in movieDetailResponse){
                    if(detailKey !== 'Poster' && detailKey !== 'Ratings'){
                        textBasedInformation[detailKey] = movieDetailResponse[detailKey];
                    }
                }

                return {
                    TextBasedInformation: textBasedInformation,
                    Poster: movieDetailResponse.Poster,
                    Ratings: movieDetailResponse.Ratings
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