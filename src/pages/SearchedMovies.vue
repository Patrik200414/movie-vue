<template>
    <div class="container">
        <div v-if="error" class="alert alert-danger" role="alert">{{error}}</div>
        <template v-else>
            <h1 class="justify-content-lg-center">Searched movies: {{this.$route.query.title}}{{ checkIfYearExists }}</h1>
        </template>
    </div>
</template>

<script>
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
        getSearchedMovies(){
            const query = this.$route.query;
            if(!query.title){
                this.error = 'Please enter a movie title!';
                return;
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