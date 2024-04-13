<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  data(){
    return {
      movies: [],
      title: '',
      year: ''
    }
  },
  mounted(){

  },
  methods: {
    async getMovies(){
      if(!this.title){
        alert('Please enter the title!');
        return;
      }

      const movies = await fetch(`https://www.omdbapi.com/?${this.year > 0 ? `y=${this.year}&` : ''}s=${this.title}&apiKey=e6047284`);
      const moviesResponse = await movies.json();
      console.log(moviesResponse);
    }
  },
  components: {
    Navbar: Navbar
  }
}
</script>
