<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar: Navbar
  }
}
</script>
