<template>
  <Navbar :onChangeInput="handleInputChange" :titleValue="title" :year="year" :onGetMovies="getMovies"></Navbar>
  <RouterView></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';
const apiKey = import.meta.env.VITE_API_KEY;

export default {
  name: 'App',
  data(){
    return {
      movies: [],
      title: '',
      year: ''
    }
  },
  methods: {
    async getMovies(){
      if(!this.title){
        alert('Please enter the title!');
        return;
      }

      const movies = await fetch(`https://www.omdbapi.com/?${this.year > 0 ? `y=${this.year}&` : ''}s=${this.title}&apiKey=${apiKey}`);
      const moviesResponse = await movies.json();
      console.log(moviesResponse);
    },

    handleInputChange(event){
      const fieldName = event.target.name;
      this[fieldName] = fieldName === 'year' ? Number(event.target.value) : event.target.value;
    }
  },
  components: {
    Navbar: Navbar
  }
}
</script>
