<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';
const apiKey = import.meta.env.VITE_API_KEY;

export default {
  name: 'App',
  components: {
    Navbar: Navbar
  }
}
</script>
